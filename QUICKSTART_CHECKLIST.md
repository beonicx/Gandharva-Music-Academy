# ✅ Quick Setup Checklist

## 🎯 Immediate Setup (5 minutes)

### Email Configuration

- [ ] 1. Enable 2-Step Verification on Google Account
- [ ] 2. Generate Gmail App Password at https://myaccount.google.com/apppasswords
- [ ] 3. Update `backend/.env`:
  ```env
  EMAIL_USER=your-email@gmail.com
  EMAIL_PASS=your_16_char_app_password
  ACADEMY_EMAIL=your-email@gmail.com
  ```
- [ ] 4. Test by submitting a contact form

### WhatsApp Click-to-Chat (Already Working! ✅)

- [x] Floating WhatsApp button - **Live on website**
- [x] WhatsApp link in contact section
- [ ] Optional: Update phone number in `frontend/components/shared/WhatsAppButton.tsx` if needed

---

## 🚀 Optional: WhatsApp Notifications (15 minutes)

For automated WhatsApp alerts when enquiries are submitted:

- [ ] 1. Create free Twilio account at https://www.twilio.com/console
- [ ] 2. Join WhatsApp Sandbox (Messaging → Try it out → WhatsApp)
- [ ] 3. Send join code to Twilio number from your WhatsApp
- [ ] 4. Update `backend/.env`:
  ```env
  TWILIO_ACCOUNT_SID=ACxxxxx...
  TWILIO_AUTH_TOKEN=your_token
  WHATSAPP_FROM=whatsapp:+14155238886
  WHATSAPP_TO=whatsapp:+916388250645
  ```
- [ ] 5. Restart backend server
- [ ] 6. Test with contact form submission

---

## 🔍 Verification

### Test Email
```bash
# Submit contact form on website
# Check your Gmail inbox for notification
```

### Test WhatsApp Button
```bash
# 1. Open website
# 2. Wait 3 seconds
# 3. Click green floating button
# 4. Verify WhatsApp opens
```

### Test WhatsApp Notifications (if configured)
```bash
# Submit contact form
# Check your WhatsApp for notification
```

---

## 📝 Current Configuration

**Email Status:** ⚠️ Needs configuration  
**WhatsApp Button:** ✅ Ready to use  
**WhatsApp Notifications:** ⚠️ Optional (needs Twilio)

---

## 🆘 Need Help?

See detailed setup guide: `SETUP_EMAIL_WHATSAPP.md`

**Common Issues:**
- Email not working → Check Gmail App Password setup
- WhatsApp button not showing → Wait 3 seconds, clear cache
- Twilio errors → Verify Account SID and Auth Token
