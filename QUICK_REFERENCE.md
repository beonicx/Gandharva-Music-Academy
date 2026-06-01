# 🚀 Quick Reference Card

## 📧 Email Setup (5 min)

```bash
# 1. Generate Gmail App Password
open https://myaccount.google.com/apppasswords

# 2. Edit backend/.env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=xxxxxxxxxxxx
ACADEMY_EMAIL=your-email@gmail.com

# 3. Start & test
cd backend && npm run dev
cd frontend && npm run dev
```

---

## 💬 WhatsApp Button Customization

**File:** `frontend/components/shared/WhatsAppButton.tsx`

```tsx
// Change phone number
phoneNumber = '916388250645'

// Change message
message = 'Hello! I want to inquire about...'

// Disable tooltip
showPopup = {false}

// Change position (in JSX)
className="fixed bottom-6 left-6 z-50"  // Bottom left
```

---

## 📱 WhatsApp API Setup (Optional)

```bash
# 1. Get Twilio credentials
open https://console.twilio.com

# 2. Join WhatsApp sandbox
# Send join code to Twilio number

# 3. Edit backend/.env
TWILIO_ACCOUNT_SID=ACxxxxx...
TWILIO_AUTH_TOKEN=your_token
WHATSAPP_FROM=whatsapp:+14155238886
WHATSAPP_TO=whatsapp:+916388250645

# 4. Restart backend
cd backend && npm run dev
```

---

## 🧪 Testing

### Test Email
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"1234567890","course":"Guitar","email":"test@test.com"}'
```

### Test WhatsApp Button
1. Open http://localhost:3000
2. Wait 3 seconds
3. Click green button
4. Verify WhatsApp opens

---

## 🔍 View Logs

```bash
# Backend logs
cd backend && npm run dev

# Look for:
[ENQUIRY] - Form received
[WHATSAPP] - WhatsApp sent
[EMAIL ERROR] - Email issue
```

---

## 📂 Important Files

```
backend/
├── server.js              # Email & WhatsApp logic
├── .env                   # Your config (SECRET)
└── .env.example           # Template

frontend/
├── components/shared/WhatsAppButton.tsx  # Floating button
├── components/contact/Contact.tsx        # Contact form
├── app/layout.tsx                        # WhatsApp button import
└── .env                                  # Frontend config

Documentation/
├── QUICKSTART_CHECKLIST.md      # Quick setup
├── SETUP_EMAIL_WHATSAPP.md      # Detailed guide
├── README_INTEGRATIONS.md       # Overview
└── QUICK_REFERENCE.md           # This file
```

---

## 🎨 Customization Quick Links

| What | Where | Line |
|------|-------|------|
| WhatsApp number | `frontend/components/shared/WhatsAppButton.tsx` | ~11 |
| WhatsApp message | `frontend/components/shared/WhatsAppButton.tsx` | ~12 |
| Button position | `frontend/components/shared/WhatsAppButton.tsx` | ~42 |
| Email template | `backend/server.js` | ~63 |
| Rate limit | `backend/server.js` | ~21 |

---

## 🔒 Security Checklist

- [x] `.env` in `.gitignore`
- [x] Rate limiting enabled
- [x] Input validation active
- [x] CORS configured
- [ ] Gmail App Password set (you need to do this)
- [ ] Production URL updated (before deploy)

---

## 🆘 Common Issues

**Email not sending?**
→ Check `EMAIL_PASS` in backend/.env (no spaces)

**WhatsApp button not showing?**
→ Wait 3 seconds, clear cache

**Twilio errors?**
→ Verify Account SID & Auth Token

**CORS errors?**
→ Check `FRONTEND_URL` in backend/.env

---

## 📞 Contact Methods

| Method | Status | Setup |
|--------|--------|-------|
| Phone link | ✅ Working | None |
| WhatsApp button | ✅ Working | None |
| Email form | ⚠️ Needs config | 5 min |
| WhatsApp API | ⏳ Optional | 15 min |

---

## 🎯 Next Steps

1. ✅ Read QUICKSTART_CHECKLIST.md
2. ⏳ Configure Gmail App Password
3. ⏳ Test contact form
4. ⏳ (Optional) Setup Twilio WhatsApp

---

**Pro Tip:** The WhatsApp button works immediately without any setup!
