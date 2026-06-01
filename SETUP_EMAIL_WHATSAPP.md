# Email & WhatsApp Integration Setup Guide

Complete guide to configure email and WhatsApp notifications for Gandharva Music Academy website.

---

## 📧 Email Setup (Gmail)

### Step 1: Enable 2-Step Verification

1. Go to your Google Account: https://myaccount.google.com
2. Navigate to **Security** → **2-Step Verification**
3. Follow the steps to enable it (required for App Passwords)

### Step 2: Generate Gmail App Password

1. Visit: https://myaccount.google.com/apppasswords
2. Select **App**: Choose "Mail" or "Other (Custom name)" → Enter "Gandharva Website"
3. Click **Generate**
4. Copy the 16-character password (looks like: `xxxx xxxx xxxx xxxx`)

### Step 3: Configure Backend Environment

Edit `backend/.env`:

```env
# Email Configuration
EMAIL_USER=your-academy-email@gmail.com
EMAIL_PASS=your_16_char_app_password
ACADEMY_EMAIL=your-academy-email@gmail.com
```

**Important:**
- Use the same Gmail account for `EMAIL_USER` and `ACADEMY_EMAIL` (or different if you want)
- Remove spaces from the app password
- Keep this file secure and never commit it to git

### Test Email

```bash
cd backend
npm run dev
```

Then submit a test enquiry through the contact form on the website.

---

## 💬 WhatsApp Integration

### Option 1: Click-to-Chat (Already Implemented ✅)

**No setup required!** The floating WhatsApp button and contact section WhatsApp link work immediately.

**Features:**
- Floating WhatsApp button on all pages
- Direct WhatsApp link in contact section
- Opens WhatsApp chat with pre-filled message

**To customize:**

Edit `frontend/components/shared/WhatsAppButton.tsx`:
```tsx
phoneNumber = '916388250645'  // Your WhatsApp number (without +)
message = 'Your custom message here'
```

---

### Option 2: WhatsApp Business API (Advanced)

Get automated WhatsApp notifications when someone submits an enquiry.

#### Requirements
- Twilio Account (Free trial available)
- WhatsApp Business account (optional for production)

#### Setup Steps

**1. Create Twilio Account**
- Go to: https://www.twilio.com/console
- Sign up for free trial ($15 credit)
- Verify your phone number

**2. Get WhatsApp Sandbox Credentials**
- In Twilio Console, go to: **Messaging** → **Try it out** → **Send a WhatsApp message**
- Join sandbox by sending the code to the Twilio number
- Copy your sandbox number (e.g., `whatsapp:+14155238886`)

**3. Configure Backend**

Edit `backend/.env`:

```env
# WhatsApp Notifications (Twilio)
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
WHATSAPP_FROM=whatsapp:+14155238886
WHATSAPP_TO=whatsapp:+916388250645
```

**Where to find:**
- `TWILIO_ACCOUNT_SID` & `TWILIO_AUTH_TOKEN`: Twilio Console home page
- `WHATSAPP_FROM`: Your Twilio WhatsApp sandbox number
- `WHATSAPP_TO`: Your WhatsApp number where you want to receive notifications

**4. Restart Backend**

```bash
cd backend
npm run dev
```

#### Message Format

When an enquiry is submitted, you'll receive a WhatsApp message like:

```
🎵 New Enquiry - Gandharva Music Academy

Name: Rahul Sharma
Phone: +91 98765 43210
Email: rahul@example.com
Course: Classical Singing
Message: I want to learn from basics

Submitted via website
```

---

## 🚀 Production Deployment

### For Email

**Gmail limits for free accounts:**
- 500 emails/day
- 100 recipients per email

For higher volume, consider:
- **SendGrid** (100 emails/day free)
- **AWS SES** (62,000 emails/month free)
- **Mailgun** (5,000 emails/month free)

### For WhatsApp

**Twilio Sandbox Limitations:**
- Recipients must join sandbox first
- Limited to testing/development
- Expires after 3 days of inactivity

**For Production:**
- Upgrade to Twilio WhatsApp Business API ($50+/month)
- Or use alternative providers:
  - **Gupshup** - India-focused, cheaper
  - **Interakt** - WhatsApp Business API in India
  - **Wati** - WhatsApp marketing platform

---

## 🔧 Alternative Integrations

### 1. Telegram Bot (Free Alternative)

```bash
cd backend
npm install node-telegram-bot-api
```

Create bot via [@BotFather](https://t.me/botfather) on Telegram.

### 2. Discord Webhook (Free)

```bash
cd backend
npm install axios
```

Create webhook in Discord server settings.

### 3. Slack Integration (Free)

```bash
cd backend
npm install @slack/webhook
```

Create webhook in Slack workspace.

---

## 📱 WhatsApp Button Customization

### Change Position

Edit `frontend/components/shared/WhatsAppButton.tsx`:

```tsx
// Bottom-left instead of bottom-right
<div className="fixed bottom-6 left-6 z-50">
```

### Disable Tooltip

```tsx
<WhatsAppButton showPopup={false} />
```

### Custom Message per Page

```tsx
// In specific page
<WhatsAppButton 
  message="I want to inquire about Tabla classes"
/>
```

### Remove from Specific Pages

Edit `frontend/app/layout.tsx` and conditionally render based on route.

---

## 🛡️ Security Best Practices

1. **Never commit `.env` files**
   - Already in `.gitignore`
   - Use `.env.example` for templates

2. **Rotate credentials regularly**
   - Change Gmail app password every 3-6 months
   - Rotate Twilio tokens periodically

3. **Rate limiting**
   - Already implemented (10 requests per 15 min)
   - Prevents spam and abuse

4. **Input validation**
   - Already implemented with `express-validator`
   - Sanitizes user input

5. **CORS configuration**
   - Only allows requests from your frontend domain
   - Update `FRONTEND_URL` in production

---

## 🧪 Testing

### Test Email

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "phone": "+91 98765 43210",
    "email": "test@example.com",
    "course": "Classical Singing",
    "message": "Test enquiry"
  }'
```

### Test WhatsApp Button

1. Open website in browser
2. Wait 3 seconds for button to appear
3. Click the floating green button
4. Verify WhatsApp opens with pre-filled message

---

## 📊 Monitoring & Analytics

### View Logs

```bash
cd backend
npm run dev

# Look for:
# [ENQUIRY] timestamp | name | phone | course
# [WHATSAPP] Notification sent
```

### Track Deliverability

- **Email**: Check Gmail Sent folder
- **WhatsApp**: Check Twilio console logs
- **Server**: Check console output

---

## ❓ Troubleshooting

### Email Not Sending

**Issue:** "Invalid credentials"
- ✓ Verify 2-Step Verification is enabled
- ✓ Generate new App Password
- ✓ Remove spaces from password in .env

**Issue:** "Connection timeout"
- ✓ Check firewall/antivirus blocking port 587
- ✓ Try different Gmail account
- ✓ Check Gmail security settings

### WhatsApp Not Working

**Issue:** "Authentication failed"
- ✓ Verify Account SID and Auth Token are correct
- ✓ Check for extra spaces in .env

**Issue:** "Not registered for sandbox"
- ✓ Send join code to Twilio WhatsApp number
- ✓ Wait 1-2 minutes after joining

**Issue:** "Message not received"
- ✓ Check Twilio console for error logs
- ✓ Verify phone number format includes country code
- ✓ Ensure recipient number is verified with Twilio (trial account)

### Floating Button Not Appearing

**Issue:** Button doesn't show
- ✓ Wait 3 seconds after page load
- ✓ Check browser console for errors
- ✓ Clear browser cache

---

## 📚 Documentation Links

- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
- [Nodemailer Docs](https://nodemailer.com/about/)
- [Twilio WhatsApp Quickstart](https://www.twilio.com/docs/whatsapp/quickstart)
- [WhatsApp Click-to-Chat](https://faq.whatsapp.com/5913398998672934)

---

## 🆘 Support

For issues with setup:
1. Check the troubleshooting section above
2. Review backend console logs
3. Test with curl commands
4. Verify all environment variables are set correctly

---

**Last Updated:** June 2026  
**Version:** 1.0
