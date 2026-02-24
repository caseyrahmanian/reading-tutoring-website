# Complete Setup Guide for Your Reading Specialist Website

## Quick Start (5 Steps to Go Live!)

1. **Set up GitHub Account** (if you don't have one)
2. **Create Repository and Upload Files**
3. **Enable GitHub Pages**
4. **Customize Your Content**
5. **Set Up Payment & Contact Form**

---

## Part 1: GitHub Setup & Deployment

### Step 1: Create a GitHub Account
1. Go to https://github.com
2. Click "Sign up"
3. Follow the registration process
4. Verify your email address

### Step 2: Create a New Repository
1. Click the "+" icon in the top right → "New repository"
2. Repository name: `reading-tutoring-website` (or any name you prefer)
3. Description: "Professional reading specialist tutoring website"
4. Make it **Public** (required for free GitHub Pages)
5. Check "Add a README file"
6. Click "Create repository"

### Step 3: Upload Your Website Files
1. In your new repository, click "Add file" → "Upload files"
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `config.json`
   - `admin.html`
3. Write a commit message: "Initial website upload"
4. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. In your repository, click "Settings" (top menu)
2. Scroll down and click "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Under "Branch", select `main` and `/root`
5. Click "Save"
6. Wait 2-3 minutes, then refresh the page
7. You'll see: "Your site is live at https://YOUR-USERNAME.github.io/reading-tutoring-website/"

**🎉 Your website is now live!**

---

## Part 2: Customizing Your Website

### Option A: Using the Admin Panel (Easiest!)

1. Open `admin.html` in your browser (locally or visit `https://YOUR-USERNAME.github.io/reading-tutoring-website/admin.html`)
2. Edit all the content:
   - Business name
   - Hero section text
   - About section
   - Services
   - Products
3. Click "Generate Updated Config"
4. Copy the generated JSON code
5. Go to your GitHub repository
6. Click on `config.json`
7. Click the pencil icon (Edit)
8. Replace all content with the copied JSON
9. Click "Commit changes"

### Option B: Editing config.json Directly

1. In your GitHub repository, click on `config.json`
2. Click the pencil icon (Edit)
3. Update the values:
   ```json
   {
     "businessName": "Your Business Name Here",
     "contactEmail": "yourname@email.com",
     "hero": {
       "title": "Your Main Headline",
       "subtitle": "Your Tagline"
     }
   }
   ```
4. Click "Commit changes"

### Customization Tips

**Adding Your Own Images:**
- Upload images to your GitHub repository
- In `config.json`, use: `"imageUrl": "image-name.jpg"`
- OR use free stock photos from:
  - Unsplash.com
  - Pexels.com
  - Pixabay.com

**Adding Videos:**
1. Upload your video to YouTube or Vimeo
2. Get the embed code
3. Edit `index.html` (find the video-placeholder section)
4. Replace with your embed code

---

## Part 3: Setting Up Payment Processing

### Option 1: Gumroad (Recommended for Beginners)

**Why Gumroad?**
- Easiest to set up
- No upfront costs
- Takes 10% + payment processing fees
- Perfect for digital products

**Setup Steps:**
1. Go to https://gumroad.com
2. Sign up for a free account
3. Click "Create Product"
4. Add product details (title, price, description)
5. Upload your digital product files
6. Click "Publish"
7. Copy the product URL
8. Update `config.json`:
   ```json
   "purchaseUrl": "https://yourname.gumroad.com/l/product-name"
   ```

### Option 2: Teachable (For Courses)

**Best for:**
- Online courses
- Video lessons
- Membership sites

**Setup:**
1. Go to https://teachable.com
2. Create free account (free plan available)
3. Create your course
4. Get the course link
5. Update `config.json` with your Teachable links

### Option 3: Stripe + Buy Button

**For more control:**
1. Sign up at https://stripe.com
2. Create products in Stripe dashboard
3. Generate Buy Button code
4. Add to your website

---

## Part 4: Setting Up the Contact Form

### Option 1: Formspree (Recommended - Free Tier Available)

**Setup Steps:**
1. Go to https://formspree.io
2. Sign up (free for 50 submissions/month)
3. Click "New Form"
4. Get your form endpoint (looks like: `https://formspree.io/f/xyzabc123`)
5. Edit `script.js` in GitHub:
   - Find line: `const formspreeUrl = 'https://formspree.io/f/YOUR_FORM_ID';`
   - Replace `YOUR_FORM_ID` with your actual form ID
6. Commit changes

**That's it!** Contact form will now work and emails will be sent to you.

### Option 2: Email Fallback (No Setup Required)

The website already includes a fallback that opens the user's email client. Just update `config.json`:
```json
"contactEmail": "your-actual-email@gmail.com"
```

---

## Part 5: Getting a Custom Domain (Optional)

### Buy a Domain
- **Namecheap** (~$10-15/year)
- **Google Domains** (~$12/year)
- **GoDaddy** (~$15-20/year)

### Connect to GitHub Pages

1. Buy your domain (e.g., `readingspecialist.com`)
2. In your GitHub repository → Settings → Pages
3. Under "Custom domain", enter your domain
4. In your domain registrar's DNS settings, add:
   - Type: `A` → Points to: `185.199.108.153`
   - Type: `A` → Points to: `185.199.109.153`
   - Type: `A` → Points to: `185.199.110.153`
   - Type: `A` → Points to: `185.199.111.153`
   - Type: `CNAME` → Name: `www` → Points to: `YOUR-USERNAME.github.io`
5. Wait 24-48 hours for DNS to propagate

---

## Part 6: Ongoing Maintenance

### How to Update Content

1. **Using Admin Panel:**
   - Open `admin.html`
   - Make changes
   - Generate new config
   - Update `config.json` on GitHub

2. **Direct Edits:**
   - Go to your GitHub repository
   - Click the file you want to edit
   - Click pencil icon
   - Make changes
   - Commit

### How to Add Products

1. Create the digital product
2. Upload to Gumroad/Teachable
3. Get the purchase link
4. Add to `config.json` in the products array:
   ```json
   {
     "title": "New Product Name",
     "description": "What it includes",
     "price": "$XX.XX",
     "imageUrl": "image-url-here",
     "purchaseUrl": "gumroad-link-here"
   }
   ```

### How to Update Services

Edit the services array in `config.json`:
```json
{
  "icon": "📚",
  "title": "Service Name",
  "description": "Service description"
}
```

---

## Troubleshooting

### Website not showing up?
- Wait 5-10 minutes after enabling GitHub Pages
- Check Settings → Pages to confirm it's enabled
- Make sure repository is Public

### Contact form not working?
- Verify Formspree form ID is correct
- Check that email in `config.json` is correct
- Look for JavaScript errors in browser console (F12)

### Images not loading?
- Make sure URLs are complete (start with `https://`)
- Check that image files are uploaded to repository
- Try using Unsplash URLs for testing

### Changes not appearing?
- Wait a few minutes (GitHub Pages can take 5-10 min to update)
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that you committed the changes

---

## Need Help?

1. **GitHub Pages Documentation:** https://pages.github.com/
2. **Formspree Documentation:** https://help.formspree.io/
3. **Gumroad Help:** https://help.gumroad.com/

---

## Security Notes

- Never commit passwords or API keys to GitHub
- Keep your GitHub account secure with 2-factor authentication
- Regularly update your contact form to prevent spam
- Consider adding Google reCAPTCHA to contact form (optional)

---

## Next Steps

Once your website is live:
1. Test the contact form
2. Test product purchase links
3. Check on mobile devices
4. Share your link with friends for feedback
5. Add your website to your social media profiles
6. Create business cards with your website URL

**Your website is ready to help you grow your reading tutoring business!** 🎉
