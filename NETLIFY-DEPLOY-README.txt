DEVIGN WEBSITE — NETLIFY DEPLOY PACKAGE

This ZIP is flattened so index.html is at the project root (there is no extra devign-website/devign-website nesting).

BEFORE DEPLOYING
1. Extract this ZIP into a folder.
2. Confirm index.html and netlify.toml are in the extracted folder root.
3. The index.html has already been generated. Optional local rebuild: open PowerShell in this folder and run: node build.js

NETLIFY — GITHUB CONNECTED
- Set the Base directory to blank / repository root (if this project is the repository root).
- Build command: node build.js
- Publish directory: .
- These values are also stored in netlify.toml.

NETLIFY — MANUAL DEPLOY
- Extract the ZIP first.
- Drag the extracted DEVIGN-Netlify-Fixed folder (or its contents, depending on the Netlify Drop prompt) to Netlify's manual deploy area. Do not upload the ZIP itself if the screen asks for a folder.
- Make sure the deployed folder has index.html at its top level.

The files pass local structural checks, but only a successful deployment to your Netlify site can confirm that its live URL is fixed.
