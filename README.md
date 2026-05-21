# Employee Management Application (Emp-App)

A full-stack web application for managing employees, built with a modern JavaScript stack. The project is organized as a monorepo containing a React frontend and a Node.js/Express backend, designed to be deployed seamlessly on Render.

 Tech Stack

### Frontend
- **React 19** with **Vite** for fast development and building.
- **Tailwind CSS v4** for utility-first styling.
- **React Router v7** for declarative routing.
- **React Hook Form** for efficient form handling and validation.
- **Axios** for API communication.

### Backend
- **Node.js** with **Express 5** for handling API requests.
- **MongoDB** with **Mongoose** for NoSQL database modeling and storage.
- **dotenv** for environment variable management.
- **CORS** enabled for cross-origin requests.

 Project Structure

```text
emp-app-main/
├── backend/                # Express backend application
│   ├── server.js           # Main application entry point
│   ├── package.json        # Backend dependencies
│   └── ...                 # Models, routes, controllers, etc.
├── frontend/               # React frontend application
│   ├── src/                # Frontend source code
│   ├── vite.config.js      # Vite configuration
│   ├── package.json        # Frontend dependencies
│   └── ...                 # Components, pages, styles, etc.
├── package.json            # Root package.json for monorepo script execution
└── render.yaml             # Render Blueprint for automated deployment
```

 Local Development Setup

### Prerequisites
- Node.js installed on your machine.
- A MongoDB cluster/database URI (e.g., MongoDB Atlas).

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd emp-app-main
   ```

2. **Install all dependencies:**
   The root `package.json` allows you to install both frontend and backend dependencies using a single command:
   ```bash
   npm run build
   ```
   *(Note: This custom script installs dependencies in both folders and builds the frontend.)*
   Alternatively, you can manually navigate to each directory and run `npm install`.

### Configuration

1. **Backend Environment Variables:**
   Create a `.env` file in the `backend/` directory:
   ```env
   PORT=5000
   DB_URL=your_mongodb_connection_string
   FRONTEND_URL=http://localhost:5173
   ```

2. **Frontend Environment Variables:**
   Create a `.env` file in the `frontend/` directory (if needed):
   ```env
   VITE_API_URL=http://localhost:5000
   ```

### Running the Application Locally

You will need two terminal windows to run both the frontend and backend servers simultaneously.

**Terminal 1 (Backend):**
```bash
cd backend
npm start
```
The backend will run on `http://localhost:5000` (or your configured PORT).

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```
The frontend will be available at `http://localhost:5173`.

 Deployment

This project includes a `render.yaml` Blueprint file for automated deployment on [Render](https://render.com).

### Deployment Steps:
1. Push your code to a GitHub repository.
2. Log in to Render and create a new **Blueprint Instance**.
3. Connect your GitHub repository.
4. Render will automatically detect the `render.yaml` file and create two services:
   - **emp-app-backend** (Web Service)
   - **emp-app-frontend** (Static Site)
5. **Important:** In your Render dashboard, navigate to the `emp-app-backend` service settings and manually add your `DB_URL` environment variable containing your production MongoDB connection string. The other necessary environment variables (`FRONTEND_URL` and `VITE_API_URL`) are automatically synced between the services via the Blueprint.
