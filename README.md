# Personal Portfolio Website

[![Language](https://img.shields.io/badge/language-Korean-blue.svg)](./README.ko.md)

## 📌 Project Overview
- A personal portfolio website developed as a React-based SPA and deployed as a static site using AWS S3.
- Implemented a professional web hosting structure including CloudFront and Route 53 to gain hands-on experience with production-level deployment and custom domain integration.

## ✨ Key Features

### 1. Page Composition
* **Sections**: Personal Profile, Work Experience, and Project Showcases.
* **Navigation**: Intuitive page transitions via a fixed right-hand sidebar.

### 2. Multi-language Support (Localization)
* **i18n Implementation**: Integrated `react-i18next` to provide seamless English and Korean translations.
* **UX Optimization**: Managed manual translation data for a more natural feel compared to auto-translation tools. Built a language switcher at the bottom right for real-time switching.

## 🛠 Tech Stack

### Frontend
* **Framework**: React (JavaScript)
* **Routing**: Designed an SPA routing structure using `BrowserRouter`, allowing the client to handle navigation since the project is hosted as a static site without a separate backend.
* **UI/UX**: Responsive design optimized for both Web and Mobile environments.

### Deployment & Infrastructure
* **AWS S3**: Used for static website hosting.
* **AWS CloudFront**: Applied as a CDN for content caching and securing the site with HTTPS (SSL/TLS).
* **AWS Route 53**: Integrated a custom domain and linked it to the CloudFront distribution.

## 🔍Troubleshooting

### SPA Routing Path Recognition Issue (404/403 Error)
* **Issue**: Encountered 404/403 errors when refreshing the page or accessing specific paths (e.g., `/profile`) directly on S3 or CloudFront.
* **Root Cause**: Static file servers attempt to locate physical files/folders matching the URL path. In an SPA, these paths exist only on the client side, causing the server to return an error when it cannot find a corresponding file.
* **Resolution**: Configured **CloudFront Error Pages** to redirect all 403 and 404 errors to `index.html` (Fallback) and set the response code to 200, allowing the client-side router to take over.


## 📈 Project Achievements
- Gained a deep understanding of AWS-based static website deployment architectures.
- Experience in optimizing web performance through CDN (CloudFront) caching.
- Successfully managed custom domain mapping and HTTPS certificate (SSL) implementation.
- Mastered the end-to-end lifecycle of a real-world web service deployment.