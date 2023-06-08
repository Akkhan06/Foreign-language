import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider.jsx";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <AuthProvider>
      <HelmetProvider> 
      {/* <QueryClientProvider client={queryClient}> */}
         <div className='md:max-w-screen-xl mx-auto'>
            <RouterProvider router={route} />
          </div> 
       {/* </QueryClientProvider> */}
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
