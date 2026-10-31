NEXORA TOOLS — GITHUB PAGES DEPLOYMENT
1. Create a GitHub repository, e.g. nexora-tools.
2. Upload all files in this folder to the repository root. Keep assets/ and tools/.
3. Open repository Settings > Pages.
4. Choose Deploy from a branch, select main and /(root), then Save.
5. Enter nexoraworldonline.online in the Custom domain field and save.
6. At your DNS provider add apex A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
7. Add a www CNAME pointing to YOUR-GITHUB-USERNAME.github.io (replace with your actual GitHub Pages hostname).
8. Wait for DNS propagation, then enable Enforce HTTPS in Settings > Pages.
9. Test every tool and inspect the browser console after deployment.

Static HTML/CSS/vanilla JavaScript; no backend, database, npm or build step. PDF tools load pdf-lib from jsDelivr and QR generation loads qrcode from jsDelivr, so those features need internet access to fetch the libraries. File processing is local in the browser. Add advertising or analytics only after reviewing provider policies and applicable consent requirements.


AD NETWORK INTEGRATION
----------------------
The supplied ad snippets are included: bauval.org/14 and abscloud.org/1 global scripts;
a 160x300 bauval.org/22 iframe in tool-page sidebars; bauval.org/21 responsive banners
on the homepage and tool pages; and the araplhn.org sponsored direct link on the homepage
and tool pages. Third-party scripts, redirects, content and availability are controlled by
the providers and may change. Review provider terms and applicable advertising/privacy rules.
