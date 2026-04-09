# My Portfolio Website

Note: The current content on this portfolio website was created during my 2nd semester and will be updated soon.

A personal, multi-page portfolio website showcasing my academics, experience, hobbies, startup ideas, and creative work.

## Live Website

- Production URL: https://my-portfolio-ronak.netlify.app/
- Hosting Platform: Netlify (https://app.netlify.com/)

## About The Project

This project is built as a static portfolio website using HTML, CSS, and a small JavaScript utility for shared layout loading. It is organized into dedicated pages for each section of my profile and includes working Contact and Feedback forms.

## Features

- Multi-page navigation with a clean section-wise structure
- Dedicated pages for academics, hobbies, experience, startup ideas, and slogans
- Shared header/footer loading via JavaScript partials
- Contact form and feedback form integrated for Netlify form handling
- Media-rich design with custom images and audio assets

## Netlify Form Integration

The Contact and Feedback pages were updated to work correctly after deployment on Netlify.

- Added Netlify form attributes in both forms
- Included hidden form-name fields for Netlify form detection
- Kept POST method and named forms for server-side submission tracking

This ensures submissions from:

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
