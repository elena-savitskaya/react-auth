// import { StrictMode } from "react"; // убираем, т.к. юзеффект будет отрабатывать 2 раза
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
