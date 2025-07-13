# Jerico EduPlay 🎮

**Jerico EduPlay** is an interactive educational web game designed to teach basic math concepts to children aged 4-6. This application was developed as a full-stack portfolio project to demonstrate the implementation of modern pedagogical methodologies **(CPA & Story-Based Learning)** into a functional and fun tech product.

-----

## Table of Contents 📖

1.  [Overview](https://www.google.com/search?q=%23overview-)
2.  [Tech Stack](https://www.google.com/search?q=%23tech-stack-)
3.  [Prerequisites & Installation](https://www.google.com/search?q=%23prerequisites--installation-%EF%B8%8F)
4.  [Usage](https://www.google.com/search?q=%23usage-)
5.  [Code Structure & Explanation](https://www.google.com/search?q=%23code-structure--explanation-%EF%B8%8F)
6.  [Common Troubleshooting](https://www.google.com/search?q=%23common-troubleshooting-)
7.  [Development Roadmap](https://www.google.com/search?q=%23development-roadmap-)
8.  [Contributing](https://www.google.com/search?q=%23contributing-)
9.  [License](https://www.google.com/search?q=%23license-)

-----

## Overview 🎯

This project aims to bridge the gap between early childhood education and technology. With an engaging storyline and gameplay based on the **CPA (Concrete, Pictorial, Abstract)** method, the application helps children understand mathematics—from concrete concepts (moving objects) to abstract ones (solving equations).

**Key Features:**

  * **Story-Based Learning:** A narrative intro before gameplay to increase engagement.
  * **CPA Gameplay Flow:** Three learning stages in one level (Concrete, Pictorial, Abstract).
  * **Dynamic Questions:** The back-end generates random math problems each session for endless replayability.
  * **Kid-Friendly Design:** A cheerful, intuitive, and responsive interface.

-----

## Tech Stack 💻

  * **Front-End:** [React.js](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
  * **Back-End:** [Laravel](https://laravel.com/), [PostgreSQL](https://www.postgresql.org/)/[MySQL](https://www.mysql.com/)
  * **Deployment:** [Vercel](https://vercel.com/) (Frontend), [Heroku](https://www.heroku.com/)/[DigitalOcean](https://www.digitalocean.com/) (Backend)

-----

## Prerequisites & Installation 🛠️

Before you begin, ensure you have the following software installed:

  * [Node.js](https://nodejs.org/en/) (v18 or newer)
  * [Composer](https://getcomposer.org/) (v2 or newer)
  * [PHP](https://www.php.net/downloads.php) (v8.1 or newer)
  * A database (PostgreSQL or MySQL)

### **Back-End Installation (Laravel)**

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/jerico-c/eduplay.git
    cd eduplay
    ```

2.  **Install PHP dependencies:**

    ```bash
    composer install
    ```

3.  **Copy the environment configuration file:**

    ```bash
    cp .env.example .env
    ```

4.  **Generate a unique application key:**

    ```bash
    php artisan key:generate
    ```

5.  **Configure your database in the `.env` file:**

    ```ini
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=jerico_eduplay
    DB_USERNAME=root
    DB_PASSWORD=
    ```

6.  **Run the database migrations:**

    ```bash
    php artisan migrate
    ```

7.  **Run the back-end server:**

    ```bash
    php artisan serve
    ```

    The server will run at `http://127.0.0.1:8000`.

### **Front-End Installation (React)**

1.  **Open a new terminal and navigate to the frontend folder:**

    ```bash
    cd ../frontend
    ```

2.  **Install JavaScript dependencies:**

    ```bash
    npm install
    ```

3.  **Run the front-end development server:**

    ```bash
    npm run dev
    ```

    The application will run at `http://localhost:5173`.

-----

## Usage 🚀

Once both the back-end and front-end servers are running, open `http://localhost:5173` in your browser.

1.  **Homepage:** You will be greeted by the homepage introducing Jero.

2.  **Story Introduction:** Click "Start Playing" to follow a short storyline that sets the stage for the adventure.

3.  **Gameplay:** After the story, the game will begin. Follow the on-screen instructions to complete the CPA challenges.

-----

## Code Structure & Explanation 🏗️

This project is separated into two main folders: `/backend` and `/frontend`.

```
jerico-eduplay/
├── backend/
│   ├── app/Http/Controllers/Api/GameController.php  # 🧠 The brain of the game logic
│   ├── database/migrations/                       # Database table schemas
│   └── routes/api.php                             # API endpoint definitions
│
└── frontend/
    ├── public/                                    # Static assets (images, icons)
    └── src/
        ├── components/                            # Reusable UI components
        │   ├── StoryIntroduction.tsx              # Component for the story flow
        │   └── Game.tsx                           # Main component for gameplay
        └── App.tsx                                # Main application component
```

-----

## Common Troubleshooting 🤔

  * **500 Error when accessing the Laravel API:**

      * **Cause:** The `.env` file is likely not configured correctly.
      * **Solution:** Make sure you have run `cp .env.example .env` and `php artisan key:generate`.

  * **Database Connection Error:**

      * **Cause:** Incorrect database credentials in the `.env` file.
      * **Solution:** Double-check your `DB_HOST`, `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD`.

  * **CORS Error in the browser console:**

      * **Cause:** The browser blocks requests from the front-end (e.g., `localhost:5173`) to the back-end (`localhost:8000`) due to security policies.
      * **Solution:** The default Laravel CORS configuration (`config/cors.php`) should allow this, but ensure there are no typos in the allowed origins.

  * **`npm` dependency issues:**

      * **Solution:** Delete the `node_modules` folder and the `package-lock.json` file, then run `npm install` again.

-----

## Development Roadmap 🗺️

Here are some features planned for future development:

  - [ ]  Parent Dashboard to monitor a child's progress.
  - [ ]  More Cultural Modules from different regions of Indonesia.
  - [ ]  Leaderboard System.
  - [ ]  Simple Level Editor/CMS to add new questions without coding.
  - [ ]  Enhanced animations and sound effects for a more immersive experience.

-----

## Contributing 🤝

This project is currently maintained as an individual portfolio, but feedback and ideas are always welcome. If you find a bug or have a suggestion, please create a new *Issue*.

-----

## License 📄

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.
