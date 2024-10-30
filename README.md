# Telugu Ireland Yuvatha Website

This is the official website for Telugu Ireland Yuvatha, a community organization serving Telugu people in Ireland. The website is built using React, Vite, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with Irish flag color theme
- Sections for About, Events, Gallery, Team, and Contact
- WhatsApp group integration
- Donation information
- Sponsor showcase
- Social media integration
- Google Calendar integration for events

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

1. Create a GitHub repository for your project

2. Add the following to your `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Install the gh-pages package:
```bash
npm install gh-pages --save-dev
```

4. Add homepage to `package.json`:
```json
{
  "homepage": "https://[your-username].github.io/[repository-name]"
}
```

5. Initialize Git and push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[your-username]/[repository-name].git
git push -u origin main
```

6. Deploy to GitHub Pages:
```bash
npm run deploy
```

Your site will be available at `https://[your-username].github.io/[repository-name]`

## Project Structure

```
src/
  ├── components/     # Reusable components
  │   ├── Header.tsx
  │   ├── Footer.tsx
  │   ├── EventCard.tsx
  │   └── TeamMember.tsx
  ├── App.tsx        # Main application component
  ├── main.tsx       # Application entry point
  └── index.css      # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is private and proprietary to Telugu Ireland Yuvatha.

## Contact

For any queries, please contact:
- Email: communications@teluguirelandyuvatha.com
- Instagram: @telugu_ireland_yuvatha