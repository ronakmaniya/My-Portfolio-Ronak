# My Portfolio Website

Personal, multi-page portfolio showcasing academics, experience, hobbies, startup ideas, and creative work.

## Status

This version contains content written during my 2nd semester and uses a plain HTML/CSS/JavaScript stack; it will be refreshed. For the latest refactor, see the 2.0 repo: https://github.com/ronakmaniya/My-Portfolio-Ronak-2.0

## Live Website

- Production URL: https://my-portfolio-ronak.netlify.app/
- Hosting Platform: Netlify (https://app.netlify.com/)

## About the Project

This is a static site built with HTML, CSS, and a small JavaScript utility for shared layout loading. It is organized into dedicated pages for each section of my profile and includes working Contact and Feedback forms.

## Features

- Multi-page navigation with clear sectioning
- Dedicated pages for academics, hobbies, experience, startup ideas, and slogans
- Shared header/footer loading via JavaScript partials
- Contact and feedback forms integrated for Netlify form handling
- Media-rich design with custom images and audio assets

## Netlify Form Integration

The Contact and Feedback pages are configured for Netlify form handling.

- Added Netlify form attributes in both forms
- Included hidden form-name fields for Netlify form detection
- Kept POST method and named forms for server-side submission tracking

Submissions from:

- contact.html
- feedback_form.html

are captured in the Netlify dashboard.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

```text
My_Portfolio_Ronak/
|-- index.html
|-- academics.html
|-- hobbies.html
|-- experience.html
|-- startup_ideas.html
|-- slogan_Spectrum.html
|-- contact.html
|-- feedback_form.html
|-- css/
|   |-- style.css
|-- js/
|   |-- layout-loader.js
|-- partials/
|-- static/
|   |-- images and audio assets
```

## Run Locally

1. Clone this repository.
2. Open the project folder.
3. Open index.html in your browser.

## Author

Ronak Maniya
