import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'
import { body, validationResult } from 'express-validator'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// ── Middleware ──────────────────────────────────────────────
app.use(express.json())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}))

// Rate limiting — max 10 contact requests per 15 min per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many requests. Please try again later.' },
})

// ── Email transporter ───────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,       // academy Gmail address
    pass: process.env.EMAIL_PASS,       // Gmail App Password
  },
})

// ── Routes ──────────────────────────────────────────────────

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Gandharva Music Academy API' })
})

// Contact / Enquiry form
app.post(
  '/api/contact',
  contactLimiter,
  [
    body('name').trim().notEmpty().withMessage('Name is required').escape(),
    body('phone').trim().notEmpty().withMessage('Phone is required').escape(),
    body('email').optional({ checkFalsy: true }).isEmail().withMessage('Invalid email').normalizeEmail(),
    body('course').trim().notEmpty().withMessage('Course is required').escape(),
    body('message').optional({ checkFalsy: true }).trim().escape(),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, phone, email, course, message } = req.body

    // Build email HTML
    const htmlContent = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #fdf8f0; border-radius: 12px;">
        <div style="text-align: center; margin-bottom: 24px;">
          <h1 style="color: #D4A843; font-size: 28px; margin: 0;">🎵 Gandharva Music Academy</h1>
          <p style="color: #8A7A6A; font-size: 13px; margin: 4px 0 0;">New Enquiry Received</p>
        </div>
        <hr style="border: 1px solid #e8d8b8; margin-bottom: 24px;" />
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #8A7A6A; font-size: 13px; width: 120px;">Student Name</td>
            <td style="padding: 10px 0; color: #1a1008; font-size: 15px; font-weight: bold;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #8A7A6A; font-size: 13px;">Phone</td>
            <td style="padding: 10px 0; color: #1a1008; font-size: 15px;">${phone}</td>
          </tr>
          ${email ? `<tr>
            <td style="padding: 10px 0; color: #8A7A6A; font-size: 13px;">Email</td>
            <td style="padding: 10px 0; color: #1a1008; font-size: 15px;">${email}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 10px 0; color: #8A7A6A; font-size: 13px;">Course</td>
            <td style="padding: 10px 0; color: #D4A843; font-size: 15px; font-weight: bold;">${course}</td>
          </tr>
          ${message ? `<tr>
            <td style="padding: 10px 0; color: #8A7A6A; font-size: 13px; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #1a1008; font-size: 14px; line-height: 1.6;">${message}</td>
          </tr>` : ''}
        </table>
        <hr style="border: 1px solid #e8d8b8; margin-top: 24px;" />
        <p style="text-align: center; color: #8A7A6A; font-size: 12px; margin-top: 16px;">
          Submitted via gandharva-music-academy.com
        </p>
      </div>
    `

    try {
      // Only send if EMAIL_USER is configured
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail({
          from: `"Gandharva Academy Website" <${process.env.EMAIL_USER}>`,
          to: process.env.ACADEMY_EMAIL || process.env.EMAIL_USER,
          subject: `🎵 New Enquiry: ${course} — ${name}`,
          html: htmlContent,
          replyTo: email || undefined,
        })
      }

      console.log(`[ENQUIRY] ${new Date().toISOString()} | ${name} | ${phone} | ${course}`)
      return res.status(200).json({ success: true, message: 'Enquiry received successfully' })
    } catch (err) {
      console.error('[EMAIL ERROR]', err)
      // Still return success (enquiry logged), email failure is silent
      return res.status(200).json({ success: true, message: 'Enquiry received successfully' })
    }
  }
)

// Get courses list (useful for future admin panel)
app.get('/api/courses', (req, res) => {
  res.json({
    courses: [
      { category: 'Vocal', items: ['Classical Singing', 'Semi-Classical Singing', 'Folk Singing'] },
      { category: 'Strings', items: ['Guitar', 'Sitar', 'Harmonium'] },
      { category: 'Percussion', items: ['Tabla', 'Dholak', 'Drums', 'Cajon'] },
      { category: 'Keys', items: ['Casio / Keyboard'] },
      { category: 'Dance', items: ['Kathak', 'Bollywood Dance'] },
    ]
  })
})

// ── Start ───────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✦ Gandharva Music Academy API running on http://localhost:${PORT}`)
})
