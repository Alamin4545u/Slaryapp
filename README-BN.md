# NeonFlix — Movie & Entertainment Website

Premium dark-purple + neon entertainment website for GitHub Pages, Firebase Authentication, Cloud Firestore and Adsterra.

## 1. GitHub Pages / custom domain
1. Extract this ZIP.
2. Upload all files and folders to the root of your GitHub repository (keep `index.html` at the root).
3. GitHub → Settings → Pages → Deploy from branch → `main` / `(root)`.
4. Add your custom domain in Pages settings and configure the DNS records GitHub shows for your domain.
5. Keep the generated `CNAME` file in the repository if GitHub creates it. Do not remove your existing working DNS records without checking them.

## 2. Firebase setup
1. Open https://console.firebase.google.com/ and create a project.
2. Add a Web App and copy its Firebase config.
3. Open `js/firebase-config.js` and replace every `YOUR_...` placeholder.
4. In Firebase Authentication → Sign-in method, enable **Email/Password**.
5. In Firestore Database, create a database.
6. Open Firestore → Rules, paste `firestore.rules`, and Publish.
7. Authentication → Users → Add user. Create your admin email/password.
8. Copy that user's **UID** from Authentication → Users.
9. Firestore → Start collection → collection ID `admins`; document ID must be exactly that UID; add field `active` (boolean) = `true`.
10. Open `admin.html` on your deployed domain and sign in. Only this provisioned UID can administer content and settings.

## 3. Add Adsterra ads
1. Create ad units in your Adsterra publisher dashboard.
2. Copy the exact code supplied for each placement.
3. Admin Studio → Ad management. Paste code into Top banner / In-feed / Detail page / Social Bar as appropriate.
4. Put your SmartLink URL in the SmartLink field and save.
5. The public pages read the updated config from Firestore; no GitHub upload is needed for future ad ID/code changes.

**Important:** Adsterra code is executable JavaScript. Only paste code copied from your own trusted Adsterra publisher dashboard. Do not let visitors submit ad code. Follow Adsterra's current placement, traffic, privacy and content policies. Never encourage accidental or incentivized clicks. SmartLink is shown as a clearly labeled external link, not an automatic redirect.

## 4. Add your first content
Admin Studio → Content manager → Add title. Enter title, category, image URL (HTTPS), synopsis, optional article text, and status Published. Use images you own, have licensed, or are authorized to use. Do not upload or link to pirated movie files.

## 5. Notes
- This is a static front end. Firebase Web App config is public; Firestore Rules enforce authorization.
- Admin account access is granted only by the `admins/{UID}` document. Never make admin writes public.
- The site does not host or stream copyrighted films. It is a discovery, review and entertainment editorial website.
- For SEO, add unique titles/descriptions and original content. Add a custom domain's sitemap/robots configuration after launch.
- For stronger protection, enable Firebase App Check and set Authentication password policies in Firebase Console.
