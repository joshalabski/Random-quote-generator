Random Quote Generator

A simple, responsive web app that displays a random inspirational quote at the click of a button — with copy-to-clipboard and favorite (heart) functionality.

Built with HTML5, CSS3, and Vanilla JavaScript.


✨ Features


Random Quote Generation — Click "Generate Quote" to display a random quote from a curated collection, with logic to prevent the same quote from appearing twice in a row.
Copy to Clipboard — One click copies the current quote and author to your clipboard, with a visual checkmark confirmation.
Favorite Toggle — Click the heart icon to mark a quote as a favorite; it fills in red and stays toggled until clicked again.
Responsive Design — Clean, card-based layout that adapts smoothly to smaller screen sizes.


🛠️ Built With


HTML5 — Semantic structure
CSS3 — Flexbox/Grid layout, gradients, transitions, custom card design
Vanilla JavaScript — DOM manipulation, event delegation, Clipboard API
Font Awesome — Icons (sync, copy, heart)
Google Fonts — Inter typeface


🧠 What I Learned


Using Math.random() combined with a tracking variable and a while loop to prevent the same random item from repeating consecutively.
Event delegation — attaching a single listener to a parent container and using classList.contains() to determine which child element triggered the event.
Working with the Promise-based Clipboard API (navigator.clipboard.writeText().then().catch()).
Toggling between Font Awesome's outline (far) and solid (fas) icon styles to reflect UI state changes.
Debugging real-world issues with CDN-hosted assets — SRI hash mismatches, wrong CDN versions, and network-level font corruption.

🙋 Author

Jbee
Computer Engineering Student