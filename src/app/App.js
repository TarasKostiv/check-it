import Navigation from "../components/Navigation/Navigation"
import MainSidebar from "../components/MainSidebar/MainSidebar"
import SidebarNavigation from "../components/SidebarNavigation";
import {AppContextProvider} from "../context/AppContext";
import {BrowserRouter as Router} from "react-router-dom";
import React from "react";

function App() {
  return (
      <AppContextProvider>
          <Router>
              <div className="app">
                  <header className="upper-container">
                      <Navigation />
                  </header>
                  <main className="main-container">
                      <MainSidebar />
                      <SidebarNavigation />
                  </main>
              </div>
          </Router>
      </AppContextProvider>
  )
}

export default App
