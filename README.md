# Lensivo website

Minimal macOS app marketing website and privacy policy. Static HTML, CSS and JavaScript with no build step or third-party runtime dependencies.

## Files and preview

- `index.html`: concise marketing page, illustrative product scene, animated capture/camera/equalizer feature visuals, quality panel, supported languages, privacy summary and email contact.
- `privacy.html`: local processing, recovery, permissions, retention, diagnostics, voluntary support data and website hosting.
- `translations.js`: full English, French, German, Italian and Turkish dictionaries for both pages.
- `site.js`: language selection, local preference and policy print action.
- `style.css`: responsive light design, subtle motion, reduced-motion support and print styles.
- `assets/`: actual Lensivo logo and favicon.

Run `python3 -m http.server 4173 --bind 127.0.0.1` from this folder. Open `http://127.0.0.1:4173/`. Optional `?lang=en`, `?lang=fr`, `?lang=de`, `?lang=it` or `?lang=tr` overrides the initial locale. Otherwise a saved preference or supported browser language is used. Selecting a language persists it between pages. English content remains readable if JavaScript is unavailable.

The product scene is illustrative and never accesses camera, microphone or screen. Email links open the user's email app; the user chooses whether to send. Contact: **emiryalcinkaya.dev@gmail.com**. The only browser storage is the `lensivo-language` localStorage preference. No analytics, advertising, external fonts or CDN dependencies.

## GitHub Pages and App Store Connect

The project retains its GitHub Pages structure. Publish through the repository's existing Pages branch/folder. For the standard project deployment, the expected privacy URL is `https://emiryalcinkaya.github.io/FaceViewPreview/privacy.html`. Confirm the actual public HTTPS URL after publishing, including any configured custom domain, before entering it in App Store Connect and the macOS app. This redesign has not been pushed or publicly deployed.

The CTA retains app ID `6757967733` from the original site. Verify it is the intended listing before publication. Lensivo 2.0 is described as an upcoming FaceView Preview update. Change that announcement when released. macOS 15+, recording features and policy statements reflect the inspected Lensivo 2.0 source. Review all language versions whenever behavior or data processing changes.

## Verification

JavaScript syntax, local links/assets/anchors, duplicate IDs and full translation-key coverage checked. Both pages verified in five languages in the browser. Desktop and mobile layouts checked for overflow and missing images. Language preference persists between pages. All active email links use the new developer address. No browser warnings or errors observed.

Animated feature illustrations and privacy lock support reduced motion. Monochrome App Store buttons are provided in the hero and navigation. Recording resolutions verified against the app source: 720p, 1080p and 4K (2160p).

After confirming public GitHub Pages deployment, replace the policy hosting sentence in all five languages with a present-tense statement (Turkish: “Bu web sitesi GitHub Pages üzerinde barındırılır.”). The current policy does not claim that deployment has already occurred. Support correspondence and attachments must be deleted once no longer needed for request follow-up, issue investigation or applicable legal obligations, as stated in the policy.
