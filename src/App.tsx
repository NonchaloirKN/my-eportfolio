import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import SocialIcons from "./components/SocialIcons";
import { LoadingProvider } from "./context/LoadingProvider";

const CharacterModel = lazy(() => import("./components/Character"));
const Home = lazy(() => import("./components/Home"));
const PlayWithMe = lazy(() => import("./components/PlayWithMe"));

const isVercel = typeof window !== "undefined" && window.location.hostname.includes("vercel.app");

const AppContent = () => {
  const location = useLocation();
  const isPlayPage = location.pathname.endsWith("/play") || location.pathname === "/play";

  return (
    <LoadingProvider>
      <Cursor />
      {!isPlayPage && <Navbar />}
      {!isPlayPage && <SocialIcons />}
      {!isPlayPage && (
        <Suspense fallback={null}>
          <CharacterModel />
        </Suspense>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={null}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/play"
          element={
            <Suspense fallback={null}>
              <PlayWithMe />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={null}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </LoadingProvider>
  );
};

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppContent />
      {isVercel && <Analytics />}
      {isVercel && <SpeedInsights />}
    </BrowserRouter>
  );
};

export default App;
