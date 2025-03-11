# React + TypeScript + Vite

This project demonstrates how to implement **Google Authentication** in a React app using **Firebase**, **TypeScript**, and **Vite**. It allows users to sign in with their Google account and access protected content.

🚀 [**View Demo**](https://elena-savitskaya.github.io/react-auth/)

## Project Structure

- **React** — Library for building user interfaces.
- **TypeScript** — Strictly typed JavaScript for reliable code.
- **Vite** — Fast build and development tool.
- **Firebase** — Firebase Authentication used for Google login.
Follow the steps below to get the project running on your local machine.

## Installation & Setup

Follow the steps below to get the project running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/elena-savitskaya/react-auth.git
```
cd react-auth

### 2. Install Dependencies
Run the following command to install all the required dependencies:

```bash
npm install
```

### 3. Run in Development Mode
To start the development server with Hot Module Replacement (HMR), run:

```bash
npm run dev
```

### 4. Build the Project
To build the project for production, use:

```bash
npm run build
```

### 5. Preview the Build
You can preview the production build by running:

```bash
npm run preview
```

### Environment Variables

Make sure to set up your Firebase configuration in the .env file. You can get these values from your Firebase project settings.

Create a .env file at the root of the project and add your Firebase configuration like so:
```
VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
```
