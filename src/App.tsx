import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import SocialIcons from "./components/SocialIcons";
import { LoadingProvider } from "./context/LoadingProvider";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Cursor />
        <Navbar />
        <SocialIcons />
        <Suspense fallback={null}>
          <CharacterModel />
        </Suspense>
        <Routes>
          <Route
            path="*"
            element={
              <Suspense fallback={null}>
                <MainContainer />
              </Suspense>
            }
          />
        </Routes>
      </LoadingProvider>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
};

export default App;
