# Lensivo website

Lensivo (formerly FaceView Preview) macOS app marketing website and privacy policy. Static HTML, CSS and JavaScript; no build tools or third-party runtime dependencies.

## Files

- `index.html`: product page, interactive visual demonstration, FAQ and support email draft form.
- `privacy.html`: English/Turkish policy covering local media processing, recovery, permissions, retention, diagnostics, voluntary support messages and website hosting.
- `style.css`: responsive design and reduced-motion support.
- `site.js`: language preference, visual demo, reveal animations and email draft preparation.
- `assets/`: actual Lensivo brand logo and app icon favicon from the macOS project.

## Preview

From this folder, run `python3 -m http.server 4173 --bind 127.0.0.1`, then open `http://127.0.0.1:4173/`.

The demonstration never accesses the camera, microphone or screen. Support prepares a mail draft; it does not send mail or submit information to a server. The only website storage is the `lensivo-language` preference in localStorage. No analytics, advertising, external fonts or CDN dependencies are included.

## GitHub Pages / App Store Connect

This repository retains its static GitHub Pages architecture. Publish these files using the repository's Pages configuration. If the repository uses the standard project URL, the expected policy URL is:

`https://emiryalcinkaya.github.io/FaceViewPreview/privacy.html`

This is the expected deployment URL, not confirmation that the new files are currently published. Verify the HTTPS URL publicly after deployment before entering it in App Store Connect or linking it in the macOS app. Check Pages settings for the actual branch/folder or any custom domain.

The App Store CTA retains app ID `6757967733` from the previous website. Verify that it resolves to the intended listing before publishing. The page labels Lensivo 2.0 as an upcoming update; update the announcement after release. macOS 15+, recording features and policy statements reflect the inspected Lensivo 2.0 source. Review policy text whenever data handling changes. Do not add analytics or form services without updating the policy.

## Validation performed

- JavaScript syntax check passed.
- Both HTML pages: local asset/link/anchor checks passed; no duplicate IDs.
- Browser desktop (1440 px) and mobile (390 px): no horizontal overflow or missing images.
- Demo start/stop and capture target selection verified.
- English/Turkish language switch and persistence between pages verified.
- Privacy policy and mobile layout verified; browser console had no warnings/errors.
- Keyboard focus styles, skip links, semantic labels and reduced-motion fallback included.

No GitHub push or public deployment was performed during the local redesign.
