# ITK Official - Upgraded Portfolio Package

This upgraded package includes:

- Premium hero sections
- Smooth scroll reveal animations
- Loading screen
- Custom cursor glow effect
- Glassmorphism cards
- Profile image-style hero avatar without needing an image file
- GitHub button added
- CV download button added
- Upgraded thank you pages with a different color design
- Fixed responsive navigation
- Fixed broker link format for Neex (`https://neex.com`)
- Cleaner contact forms

## Files included

- `index.html` - main portfolio page
- `index1.html` - more about me page
- `stylesheet.css` - main styles
- `style1.css` - second page styles
- `script.js` - interactions and animations
- `script1.js` - duplicate script for second page
- `sript1.js` - kept for compatibility if an old reference exists
- `thankyou.html` - upgraded thank-you page for main page form
- `ty.html` - upgraded thank-you page for second page form

## Important setup notes

### 1) CV download button
The site uses this link:

`cv.pdf`

To make it work, place your actual CV PDF in the same folder and name it:

`cv.pdf`

### 2) FormSubmit redirect
Current redirects are set as:

- main page -> `thankyou.html`
- about page -> `ty.html`

If you deploy on GitHub Pages and want absolute links, change `_next` to your full live URL.

Example:

`https://yourusername.github.io/your-repo-name/thankyou.html`

### 3) Replace the hero avatar with your real photo later
Right now the site uses a styled "ITK" avatar so it looks complete without missing files.
If you want, you can later replace the `.profile-avatar` area with an actual image.

### 4) GitHub button
Current GitHub link used:

`https://github.com/itkofficial7716`

Change it if needed.

## Recommended next upgrade

If you want an even stronger version later, add:

- your real profile photo
- a real `cv.pdf`
- more project screenshots
- project demo links
- a testimonials section
- a WhatsApp floating button
