# Dragon Ball Character Gallery 🐉

A premium, responsive React application that fetches data from the [Dragon Ball API](https://dragonball-api.com/) and displays character stats in a clean and neat UI.

## ✨ Features

- **Public API Integration**: Fetches character data (Name, Ki, Race, Image, etc.) dynamically.
- **Premium Design**: Modern dark theme with orange/gold accents and smooth animations.
- **Clean & Neat UI**: Optimized spacing, typography, and card layouts for a professional look.
- **Loading & Error States**: Includes skeleton loaders and user-friendly error messages with retry functionality.
- **Fully Responsive**: Optimized for all screen sizes (Mobile, Tablet, Desktop).

## 🚀 Tech Stack

- **React**: Frontend framework.
- **Vite**: Rapid development build tool.
- **Vanilla CSS**: Custom design system for maximum performance and polish.

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Git](https://git-scm.com/) for cloning or pushing code.

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/nani1920/tericsoft-Assignment.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd tericsoft
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:5173/`.

## 📦 Project Structure

```text
tericsoft/
├── src/
│   ├── components/
│   │   ├── CharacterCard.jsx   # Individual character display
│   │   ├── CharacterList.jsx   # Grid of characters
│   │   ├── ErrorMessage.jsx    # Error handling UI
│   │   └── Loader.jsx           # Skeleton loading animation
│   ├── App.jsx                 # Main logic & data fetching
│   ├── index.css               # Global styles & design system
│   └── App.css                 # Component-specific styles
└── package.json
```

## 🌐 API Used

- **Source**: [Dragon Ball API](https://dragonball-api.com/)
- **Endpoint**: `https://dragonball-api.com/api/characters`

---

Built for the **Tericsoft React Assignment**.
