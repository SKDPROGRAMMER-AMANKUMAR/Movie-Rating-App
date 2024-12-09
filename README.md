# Movie Search App 🎬

A modern, responsive React application for searching and exploring movies using TMDB API. Built with React 18, Vite, and styled with Tailwind CSS.

## 🚀 Features

- Real-time movie search functionality
- Responsive grid layout for movie cards
- Detailed movie information display
- Modern and intuitive user interface
- Context-based state management

## 🛠️ Technologies Used

- **React.js** (v18.3.1) - Frontend library
- **Vite** (v6.0.1) - Build tool and development server
- **Tailwind CSS** (v3.4.15) - Utility-first CSS framework
- **React Icons** (v5.3.0) - Icon components
- **ESLint** (v9.15.0) - Code linting and formatting

## 📦 Project Structure

```
movie-search-app/
├── src/
│   ├── components/
│   │   ├── Context/       # Context API related files
│   │   ├── GetMovieData/  # Movie data fetching logic
│   │   ├── Parent.jsx     # Main parent component
│   │   └── Search.jsx     # Search functionality component
│   ├── assets/           # Static assets
│   ├── App.jsx           # Root component
│   └── main.jsx          # Application entry point
├── public/              # Public assets
└── package.json        # Project dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <https://github.com/SKDPROGRAMMER-AMANKUMAR/Movie-Rating-App>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code linting

## 🎯 Core Components

### Parent Component
- Main container component
- Handles movie data management
- Implements grid layout for movie cards

### Search Component
- Manages search functionality
- Real-time search updates
- User input handling

## 🔧 Configuration

The project uses several configuration files:

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.js` - ESLint rules and settings
- `postcss.config.js` - PostCSS configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details

## 🙏 Acknowledgments

- TMDB API for providing movie data
- React.js community for excellent documentation
- Tailwind CSS for the utility-first CSS framework
