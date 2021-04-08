import Navigation from "../components/Navigation/Navigation"
import MainSidebar from "../components/MainSidebar/MainSidebar"
import Todo from "../components/Todo/Todo"
import {AppContextProvider} from "../context/AppContext";

function App() {
  return (
      <AppContextProvider>
          <div className="app">
              <header className="upper-container">
                  <Navigation />
              </header>
              <main className="main-container">
                  <MainSidebar />
                  <Todo />
              </main>
          </div>
      </AppContextProvider>
  )
}

export default App
