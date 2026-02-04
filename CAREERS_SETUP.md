# Careers System Setup Guide

To enable the job application system, follow these steps to securely connect your Gmail account.

## 1. Generate Gmail App Password
For security, do **not** use your primary Gmail password.
1. Go to your [Google Account settings](https://myaccount.google.com/).
2. Navigate to **Security** > **2-Step Verification** (ensure it's ON).
3. Scroll to the bottom and click on **App Passwords**.
4. Select **App**: `Other (Custom name)` and call it `Vertex Website`.
5. Click **Generate**. Copy the **16-character code**.

## 2. Configure Environment Variables
Create or update the `.env` file in the project root:
```bash
GMAIL_USER="your-email@gmail.com"
GMAIL_APP_PASSWORD="xxxx-xxxx-xxxx-xxxx" # The 16-character code
RECRUITER_EMAIL="careers@yourdomain.com" # Where applications should be sent
```

## 3. Testing Locally
1. Ensure your `.env` variables are correctly set.
2. Restart your dev server: `npm run dev`.
3. Go to `/careers`, select a job, fill out the form, and upload a PDF.
4. Check both the Recruiter inbox and the Applicant's inbox for confirmations.

## 4. Production Deployment
- If deploying to Vercel/Netlify, remember to add these environment variables in the provider's dashboard.
- The system supports attachments up to 5MB (configured in the frontend validation).
