import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

import homeRoute from "./routes/home.js";
import featuresRoute from "./routes/features.js";
import pricingRoute from "./routes/pricing.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// =============================
//  GO DADDY SMTP TRANSPORTER
// =============================
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GODADDY_USER,
    pass: process.env.GODADDY_PASS,
  },
});

// Debug logs
console.log("SMTP User:", process.env.GODADDY_USER);
console.log("SMTP Pass Length:", process.env.GODADDY_PASS?.length);

// =============================
//  SEND EMAIL API
// =============================
app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!email || !firstName) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields",
    });
  }

  const OWNER_EMAIL = process.env.GODADDY_USER;
  const SITE_NAME = process.env.SITE_NAME || "Social Agent AI";

  // ============= OWNER EMAIL =============
  const ownerMail = {
    from: `"${SITE_NAME}" <${OWNER_EMAIL}>`,
    to: OWNER_EMAIL,
    replyTo: email,
    subject: `New Inquiry from ${SITE_NAME}`,
    html: `
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>

      <h3>Message:</h3>
      <p>${message?.replace(/\n/g, "<br>") || "No message provided"}</p>

      <hr>
      <small>Generated from your website (${SITE_NAME})</small>
    `,
  };

  try {
    // Send owner email
    await transporter.sendMail(ownerMail);

    // ================================
    //  AUTO-REPLY TO USER
    // ================================
    let autoReplyOk = false;

    const autoReply = {
      from: `"${SITE_NAME}" <${OWNER_EMAIL}>`,
      to: email,
      subject: `We received your request — ${SITE_NAME}`,
      html: `
        <div style="font-family:Arial; max-width:600px; margin:0 auto; padding:20px; background:#ffffff; border-radius:10px; border:1px solid #e5e7eb;">
          
          <h2 style="color:#4f46e5;">Thanks, ${firstName}!</h2>
          <p>We have received your message and our team will contact you within 24 hours.</p>

          <hr style="margin:20px 0; border:none; border-top:1px solid #ddd">

          <p><strong>Your Details</strong></p>
          <ul style="padding-left:18px;">
            <li><strong>Name:</strong> ${firstName} ${lastName || ""}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone || "N/A"}</li>
          </ul>

          <p><strong>Your Message:</strong></p>
          <div style="background:#f9fafb; padding:10px; border-radius:8px; border:1px solid #e5e7eb;">
            ${message?.replace(/\n/g, "<br>") || "No message provided"}
          </div>

          <p style="margin-top:20px;">
            If this wasn't you, feel free to ignore this email.  
            Otherwise, we’ll reach out shortly!
          </p>

          <p style="color:#6b7280; margin-top:20px; font-size:13px;">
            Regards,<br>
            <strong>${SITE_NAME}</strong>
          </p>

        </div>
      `,
    };

    try {
      await transporter.sendMail(autoReply);
      autoReplyOk = true;
    } catch (err) {
      console.log("Auto-reply error:", err.message);
    }

    return res.json({
      success: true,
      autoReply: autoReplyOk,
    });

  } catch (err) {
    console.log("Email Error:", err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// =============================
//  ROUTES
// =============================
app.use("/api/home", homeRoute);
app.use("/api/features", featuresRoute);
app.use("/api/pricing", pricingRoute);

// =============================
//  START SERVER
// =============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
