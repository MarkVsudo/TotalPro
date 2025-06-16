import { RouterProvider } from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";

import router from "./routes/AppRoutes";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
