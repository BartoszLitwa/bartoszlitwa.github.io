# 🚀 Deployment Checklist

## Pre-Deployment Verification

### ✅ Build Status
- [x] Production build successful (`npm run build`)
- [x] No TypeScript errors
- [x] No critical linting errors
- [x] All components render correctly

### ✅ SEO Verification

#### Meta Tags
```bash
# Verify meta tags are present
curl -s https://litwa.dev | grep -i "meta name"
```
Expected tags:
- [x] Title: ".NET Developer 3 @ KPMG | Azure DevOps & CI/CD Expert"
- [x] Description with keywords
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Canonical URL

#### Structured Data
Test structured data:
1. Visit: https://search.google.com/test/rich-results
2. Enter: https://litwa.dev
3. Verify: Person schema appears with occupation, skills, employer

Expected output:
```json
{
  "@type": "Person",
  "name": "Bartosz Litwa",
  "jobTitle": ".NET Developer 3",
  "worksFor": {
    "@type": "Organization",
    "name": "KPMG"
  }
}
```

#### Sitemap
Verify sitemap is accessible:
- [x] https://litwa.dev/sitemap.xml exists
- [x] All pages listed with correct priorities
- [x] Valid XML format

Test:
```bash
curl -s https://litwa.dev/sitemap.xml | head -20
```

#### Robots.txt
Verify robots.txt configuration:
- [x] https://litwa.dev/robots.txt accessible
- [x] Sitemap reference present
- [x] Proper allow/disallow rules

Test:
```bash
curl -s https://litwa.dev/robots.txt
```

### ✅ Performance Testing

#### Lighthouse Audit
Run Lighthouse in Chrome DevTools:
```
1. Open Chrome DevTools (F12)
2. Navigate to "Lighthouse" tab
3. Select "Desktop" + "Performance + Accessibility + Best Practices + SEO"
4. Click "Generate report"
```

Target Scores:
- Performance: 90+ ✅
- Accessibility: 95+ ✅
- Best Practices: 95+ ✅
- SEO: 100 ✅

#### Core Web Vitals
Monitor these metrics:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

Test: https://pagespeed.web.dev/?url=https://litwa.dev

### ✅ Mobile Responsiveness

#### Mobile-Friendly Test
1. Visit: https://search.google.com/test/mobile-friendly
2. Enter: https://litwa.dev
3. Verify: "Page is mobile friendly"

#### Manual Testing
Test on these viewports:
- [ ] iPhone SE (375px)
- [ ] iPhone 12 Pro (390px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1920px)

Chrome DevTools:
```
1. Open DevTools (F12)
2. Click "Toggle device toolbar" (Ctrl+Shift+M)
3. Test each viewport
4. Verify: Skills cards display correctly
5. Verify: Navigation works on mobile
```

### ✅ Cross-Browser Testing

Test in these browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest - macOS/iOS)
- [ ] Edge (latest)

Check:
- Skills section displays properly
- 3D models load (rocket, laptop)
- Contact form works
- Navigation functions
- Hover effects work (desktop)

### ✅ Functionality Testing

#### Skills Section
- [ ] All 6 categories display
- [ ] Icons load properly
- [ ] Hover effects work
- [ ] Grid is responsive
- [ ] No console errors

Categories to verify:
1. Backend Development (4 skills)
2. Frontend Development (4 skills)
3. Cloud & Infrastructure (4 skills)
4. CI/CD & DevOps (4 skills)
5. Databases (4 skills)
6. Development Tools (4 skills)

#### Navigation
- [ ] All nav links work
- [ ] Smooth scrolling
- [ ] Mobile menu toggles
- [ ] Active state updates
- [ ] Language switcher works

#### Forms
- [ ] Contact form submits
- [ ] Email validation works
- [ ] Success message displays
- [ ] Error handling works

### ✅ SEO Submission

#### Google Search Console
1. Add property: https://litwa.dev
2. Verify ownership (HTML tag method)
3. Submit sitemap: https://litwa.dev/sitemap.xml
4. Request indexing for main pages

Steps:
```
1. Go to: https://search.google.com/search-console
2. Add property > URL prefix > https://litwa.dev
3. Verify via HTML tag (copy tag to index.html)
4. Sitemaps > Add new sitemap > sitemap.xml
5. URL Inspection > Request indexing
```

#### Google Analytics (Optional)
1. Create GA4 property
2. Add tracking code to index.html
3. Verify data collection
4. Set up conversion goals

#### Bing Webmaster Tools
1. Add site: https://litwa.dev
2. Verify ownership
3. Submit sitemap
4. Request indexing

### ✅ Social Media Testing

#### LinkedIn Preview
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter: https://litwa.dev
3. Verify: Correct title, description, image appear

#### Twitter Card Validator
1. Go to: https://cards-dev.twitter.com/validator
2. Enter: https://litwa.dev
3. Verify: Card displays correctly

#### Facebook Sharing Debugger
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter: https://litwa.dev
3. Scrape: Click "Scrape Again"
4. Verify: Preview displays correctly

### ✅ Content Verification

#### Skills Section
Verify these technologies are listed:
- [x] .NET Core
- [x] C#
- [x] Angular
- [x] TypeScript
- [x] Azure DevOps
- [x] GitHub Actions
- [x] Docker
- [x] Kubernetes

#### SEO Keywords
Verify these appear in content:
- [x] .NET Developer
- [x] Angular Developer
- [x] Azure DevOps Expert
- [x] CI/CD
- [x] KPMG
- [x] Full Stack Developer

### ✅ Accessibility Testing

#### Automated Testing
Tools to use:
1. Chrome DevTools > Lighthouse > Accessibility
2. WAVE (https://wave.webaim.org/)
3. axe DevTools extension

Run:
```bash
# Install axe-cli
npm install -g @axe-core/cli

# Test accessibility
axe https://litwa.dev --tags wcag2a,wcag2aa
```

#### Manual Testing
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Focus indicators visible
- [ ] Screen reader friendly (NVDA/VoiceOver)
- [ ] Color contrast ratios pass
- [ ] Images have alt text
- [ ] Forms have labels

#### WCAG 2.1 Compliance
Verify:
- [x] Level A compliance
- [x] Level AA compliance
- [ ] Level AAA compliance (optional)

### ✅ Performance Optimization

#### Image Optimization
Check all images:
```bash
# Find large images
find build -name "*.png" -o -name "*.jpg" | xargs ls -lh
```

Actions:
- [ ] Convert to WebP (optional)
- [ ] Compress images
- [ ] Use responsive images
- [ ] Lazy load images

#### Bundle Analysis
```bash
# Analyze bundle size
npm run build
npx source-map-explorer 'build/static/js/*.js'
```

Check:
- [ ] No large unnecessary dependencies
- [ ] Code splitting working
- [ ] Lazy loading configured

### ✅ Security Checks

#### HTTPS
- [x] Site loads over HTTPS
- [x] No mixed content warnings
- [x] Valid SSL certificate

#### Content Security Policy
Add CSP header (if using custom server):
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;
```

#### Headers
Recommended security headers:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

---

## Deployment Steps

### GitHub Pages (Current Setup)

#### Standard Deployment
```bash
# Build and deploy
npm run deploy
```

#### Manual Deployment
```bash
# Build
npm run build

# Push build folder
git add build/
git commit -m "Deploy: Update portfolio"
git subtree push --prefix build origin gh-pages
```

### Vercel (Alternative)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Netlify (Alternative)

```bash
# Build
npm run build

# Deploy (drag & drop build folder)
# Or use Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

---

## Post-Deployment

### Immediate Checks (Within 5 minutes)
- [ ] Site loads at https://litwa.dev
- [ ] No 404 errors
- [ ] Skills section displays correctly
- [ ] All images load
- [ ] Forms work
- [ ] Mobile view works

### Short-term Monitoring (24 hours)
- [ ] Google Analytics tracking (if set up)
- [ ] No console errors in production
- [ ] Core Web Vitals stable
- [ ] Search Console shows no errors

### Long-term Monitoring (Weekly/Monthly)

#### Search Console
- Monitor indexing status
- Check for crawl errors
- Review search queries
- Track impressions/clicks

#### Analytics
- Page views
- Bounce rate
- Time on page
- Conversion rate

#### Performance
- Lighthouse scores
- Core Web Vitals
- Error rates
- Load times

---

## Rollback Plan

If issues occur after deployment:

### Quick Rollback (GitHub Pages)
```bash
# Revert to previous commit
git revert HEAD
npm run deploy
```

### Full Rollback
```bash
# Reset to previous working version
git reset --hard <previous-commit-hash>
npm run deploy
```

---

## Support Contacts

### Technical Issues
- GitHub Issues: https://github.com/BartoszLitwa/bartoszlitwa.github.io/issues
- Email: bartosz.litwa@proton.me

### SEO Questions
- Google Search Console Help
- Stack Overflow (tag: seo)

---

## Success Criteria

Deployment is successful when:
- ✅ Build completes without errors
- ✅ Site loads at production URL
- ✅ Lighthouse scores: 90+ across all metrics
- ✅ Skills section displays all 6 categories correctly
- ✅ Mobile responsive on all devices
- ✅ No console errors
- ✅ Search engines can crawl the site
- ✅ Social media cards display correctly
- ✅ All forms function properly
- ✅ 3D models load (rocket, laptop)

---

## Next Steps After Deployment

1. **Monitor** - Check analytics and Search Console daily for first week
2. **Optimize** - Address any performance issues found
3. **Market** - Share on LinkedIn, Twitter, developer communities
4. **Update** - Keep content fresh (add new projects, certifications)
5. **Maintain** - Regular dependency updates and security patches

---

**Last Updated**: October 27, 2024  
**Version**: 2.0.0 (Skills Redesign + SEO Optimization)



