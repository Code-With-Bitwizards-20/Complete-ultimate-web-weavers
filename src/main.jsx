import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Routes/index.css";
import App from "./Routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUS from "./Routes/AboutUs.jsx";
import Home from "./Routes/Home.jsx";
import Services from "./Routes/Services.jsx";
import Pricing from "./Routes/Pricing.jsx";
import ContactUs from "./Routes/ContactUs.jsx";
import OurWork from "./Routes/OurWork.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About-Us", element: <AboutUS /> },
      { path: "/Services", element: <Services /> },
      { path: "/Pricing", element: <Pricing /> },
      { path: "/Contact-Us", element: <ContactUs /> },
      { path: "/Our-Work", element: <OurWork /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
