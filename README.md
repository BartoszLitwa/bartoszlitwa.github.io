# 🚀 Bartosz Litwa - Personal Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Three.js, showcasing my skills, experience, and projects with impressive 3D elements and smooth animations.

**Live Preview:** [https://www.litwa.dev](https://www.litwa.dev)

![Portfolio Preview](src/assets/portfolio/introduction.png)

## ✨ Features

- **🎨 Modern Design**: Dark theme with smooth animations and transitions
- **🌐 3D Interactive Elements**: Rocket and laptop models using Three.js
- **📱 Fully Responsive**: Optimized for all device sizes
- **⚡ Performance Optimized**: Lazy loading, code splitting, and image optimization
- **🔒 Secure**: Environment variables for sensitive data
- **♿ Accessible**: ARIA labels and keyboard navigation support
- **🛡️ Error Boundaries**: Graceful error handling throughout the app
- **📧 Contact Form**: Integrated with EmailJS for direct communication

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Three.js + React Three Fiber** - 3D graphics and animations
- **React Bootstrap** - Responsive UI components
- **EmailJS** - Contact form functionality

### Build Tools & Development
- **Create React App** - Build toolchain
- **ESLint & TypeScript** - Code quality and type checking
- **GitHub Pages** - Deployment platform

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BartoszLitwa/bartoszlitwa.github.io.git
   cd bartoszlitwa.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your EmailJS credentials:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Banner/          # Hero section with 3D rocket
│   ├── Contact/         # Contact form with 3D laptop
│   ├── Experience/      # Work experience timeline
│   ├── Projects/        # Project showcase with filtering
│   ├── Skills/          # Skills with circular progress bars
│   ├── NavBar/          # Navigation component
│   ├── Footer/          # Footer component
│   └── ErrorBoundary/   # Error handling component
├── data/                # JSON data files
│   ├── projects.json    # Project information
│   ├── experience.json  # Work experience data
│   └── skills.json      # Skills and technologies
├── types/               # TypeScript type definitions
├── assets/              # Images and static files
└── App.tsx             # Main application component
```

## 🎯 Key Components

### 3D Models
- **Rocket Scene**: Interactive space-themed 3D model in the hero section
- **Laptop Model**: Floating laptop with embedded HTML content in contact section

### Data Management
- All content is externalized to JSON files for easy updates
- TypeScript interfaces ensure type safety
- Dynamic image loading with proper error handling

### Performance Features
- **Lazy Loading**: Components load on demand
- **Code Splitting**: Automatic bundle optimization
- **Image Optimization**: Lazy loading for images
- **Error Boundaries**: Prevent crashes from component errors

## 🚀 Deployment

### GitHub Pages (Current)
```bash
npm run deploy
```

### Manual Build
```bash
npm run build
# Deploy the 'build' folder to your hosting provider
```

## 🔧 Configuration

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add your credentials to `.env` file

### Customization
- **Projects**: Edit `src/data/projects.json`
- **Experience**: Edit `src/data/experience.json`
- **Skills**: Edit `src/data/skills.json`
- **Styling**: Modify CSS files in component directories

## 🐛 Troubleshooting

### Common Issues

1. **Dependency conflicts**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **3D models not loading**
   - Ensure GLTF files are in the public directory
   - Check browser console for loading errors

3. **Contact form not working**
   - Verify EmailJS environment variables
   - Check network tab for API calls

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Bartosz Litwa**
- Website: [litwa.dev](https://litwa.dev)
- LinkedIn: [bartoszlitwa](https://www.linkedin.com/in/bartoszlitwa/)
- GitHub: [BartoszLitwa](https://github.com/BartoszLitwa)
- Email: bartosz.litwa@proton.me

---

⭐ **If you found this project helpful, please give it a star!**