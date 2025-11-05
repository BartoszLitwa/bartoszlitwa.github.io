# Quick Start Guide - Updated Portfolio

## 🚀 Getting Started

### 1. Install & Run Locally
```bash
cd /Users/bartosz/dev/bartoszlitwa.github.io
npm install --legacy-peer-deps
npm start
```
Open http://localhost:3000 to view your updated portfolio.

### 2. What's New?

#### Featured Project Section
Right after the hero banner, you'll see a prominent **"Featured Project"** section showcasing **Rentifynow**:
- Large title with gradient styling
- "Almost Live" status indicator
- Technical stack badges
- Key features list
- Metrics cards
- CTA button to visit www.rentifynow.com

#### Updated Hero Banner
- New rotating text includes: ".NET Developer 3 @ KPMG" and "BSc Computer Science Graduate"
- Updated description mentioning senior position
- Stats show: 4 Years Experience, 15+ Services Built, 90% Cost Savings

#### Updated Experience
- First position shows: ".NET Developer 3" at KPMG
- Education badge: "🎓 Bachelor of Science in Computer Science - Warsaw University"
- New achievement about promotion

#### Simplified Skills
- Focuses on most important technologies
- Updated percentages to reflect current expertise
- Emphasizes Azure cloud and DevOps tools

## 📸 Replace Placeholder Image

**IMPORTANT:** Replace the Rentifynow placeholder image:

1. Take a high-quality screenshot of Rentifynow dashboard (1920x1080 or larger)
2. Save it as: `src/assets/rentify/dashboard.png`
3. Or upload your screenshot and update the path in `src/data/projects.json`:
   ```json
   "imgUrl": "rentify/your-screenshot-name.png"
   ```

## 🎨 Customize Content

### Update Rentifynow Details
Edit: `src/data/projects.json`
```json
{
  "title": "Rentify - Property Management Platform",
  "description": "Update this description if needed",
  "url": "https://www.rentifynow.com",
  "technologies": ["Add", "or", "remove", "technologies"],
  "highlights": ["Update", "these", "feature", "highlights"]
}
```

### Update Your Experience
Edit: `src/data/experience.json`
```json
{
  "title": ".NET Developer 3",
  "education": "Bachelor of Science in Computer Science - Warsaw University",
  "achievements": [
    "Add or modify achievements here"
  ]
}
```

### Update Skills
Edit: `src/data/skills.json`
- Adjust percentages
- Add/remove technologies
- Update tool proficiency levels

## 🎯 Deploy Your Changes

### Option 1: GitHub Pages (Recommended)
```bash
npm run deploy
```
This will build and deploy to your GitHub Pages site automatically.

### Option 2: Manual Build
```bash
npm run build
```
Then upload the `build` folder to your hosting provider.

## ✅ Pre-Deployment Checklist

- [ ] Replaced Rentifynow placeholder image
- [ ] Verified www.rentifynow.com URL is correct
- [ ] Reviewed all experience achievements
- [ ] Checked all dates are accurate
- [ ] Tested on mobile device
- [ ] Tested on desktop browser
- [ ] All links work correctly
- [ ] Contact form works (if EmailJS configured)

## 🎨 Design Color Palette

The new minimalist design uses:
- **Primary Accent:** Purple (#5b30f7)
- **Secondary Accent:** Green (#22c55e)
- **Dark Backgrounds:** #0a0a0f, #14141e, #16161f
- **Text Colors:** White primary, #b4b4c4 secondary

To change colors, edit CSS variables in `src/App.css`:
```css
:root {
  --accent-primary: #5b30f7;  /* Change this */
  --accent-secondary: #22c55e; /* And this */
}
```

## 📱 Test Your Portfolio

### Desktop
- Open http://localhost:3000
- Check featured project section appears correctly
- Scroll through all sections
- Click CTA buttons

### Mobile
- Use Chrome DevTools (F12) → Toggle Device Toolbar
- Test on iPhone SE, iPhone 12 Pro, iPad
- Check responsive layout
- Verify text is readable

## 🐛 Troubleshooting

### Build Warnings
The build may show minor warnings about unused variables. These are safe to ignore:
- `setTranslations` in LanguageProvider
- `Language` in useLanguage

### Featured Project Not Showing
1. Check `src/components/FeaturedProject/FeaturedProject.tsx` exists
2. Verify it's imported in `src/App.tsx`
3. Clear browser cache and refresh

### Image Not Loading
1. Ensure image is in `src/assets/rentify/` folder
2. Check filename matches in `projects.json`
3. Try absolute path: `require('../../assets/rentify/dashboard.png')`

## 📝 Common Edits

### Change Featured Project URL
Edit: `src/data/projects.json`
```json
"url": "https://your-new-url.com"
```

### Update Stats in Hero
Edit: `src/components/Banner/SimpleBanner.tsx`
```typescript
<span className="stat-number">5</span> // Change number
<span className="stat-label">Years Experience</span> // Change label
```

### Add More Technologies to Featured Section
Edit: `src/data/projects.json`
```json
"technologies": ["React", "TypeScript", "...", "New Tech Here"]
```

### Modify Featured Project Highlights
Edit: `src/data/projects.json`
```json
"highlights": [
  "First highlight",
  "Second highlight",
  "Add more here..."
]
```

## 🌟 Portfolio Sections Order

1. **Hero Banner** - Name, title animation, stats, CTA buttons
2. **Featured Project** - Rentifynow showcase ⭐ NEW
3. **Skills** - Technologies and tools
4. **Experience** - Work history with education badge
5. **Projects** - All projects with filtering
6. **Certifications** - Professional certifications
7. **Contact** - Contact form
8. **Footer** - Social links and copyright

## 💡 Tips for Best Results

1. **Screenshot Quality:** Use high-resolution images (1920x1080+)
2. **Project Description:** Be specific about technologies and impact
3. **Keep It Updated:** Regular updates show active development
4. **Test Thoroughly:** Check on different devices and browsers
5. **Backup Before Deploy:** Git commit before running `npm run deploy`

## 📞 Need Help?

If you encounter issues:
1. Check the console for errors (F12 in browser)
2. Review `PORTFOLIO_UPDATE_SUMMARY.md` for detailed changes
3. Check `README.md` for full documentation
4. Git diff to see what changed: `git diff`

## 🚀 Deploy Now!

Once everything looks good:
```bash
# Commit your changes
git add .
git commit -m "Portfolio update: Featured Rentifynow, .NET 3 promotion, BSc graduation"

# Deploy to GitHub Pages
npm run deploy

# Or just build
npm run build
```

Your updated, minimalist portfolio is ready to impress! 🎉

---

**Last Updated:** October 27, 2025




