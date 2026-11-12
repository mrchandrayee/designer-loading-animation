# Designer Loading Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/designer-loading-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A standalone, runnable reconstruction of the “Designer Loading Animation” shown in the uploaded video.

## What the video reveals

The source panels visibly show a Sass/Compass implementation with:
- `@import "compass";`
- `make($multiplier)` generating 250 trigonometric offsets using `sin()` and `cos()`
- `@mixin pattern($multiplier)` applying the generated values as `box-shadow`
- A centred `.loader` with `width: 1em`, `height: 1em`, `border-radius: 50%`
- `rotate` animation (5 seconds, linear, infinite)
- `morph` animation (2.5 seconds, alternate, infinite)
- `colorama` background animation (20 seconds, linear, infinite)
- A separate HTML panel containing `<div class="loader"></div>`

## Implementation

The original technique depends on Sass and Compass. To make this project run immediately without a build pipeline, `script.js` generates the 250 sine/cosine particle shadows in the browser. `style.scss` is included as a readable reconstruction of the source approach, while `style.css` is the runnable browser stylesheet.

## Run

No dependencies or installation are required:

```bash
python -m http.server 8000
```

Open http://localhost:8000

You can also open `index.html` directly in a modern browser.

## Structure

```text
designer-loading-animation/
├── index.html
├── style.css
├── script.js
├── style.scss
└── README.md
```

## Accuracy note

The code panels are visible enough to identify the key Sass function, mixin, loader declarations, and keyframe names/timings. The browser version recreates that technique and the visible changing-color particle effect. It is a reconstruction, not a byte-for-byte copy of the creator's original CodePen.
