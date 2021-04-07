import Navigation from "../components/Navigation/Navigation"
import MainSidebar from "../components/MainSidebar/MainSidebar"
import Todo from "../components/Todo/Todo"

function App() {
  return (
    <div className="app">
        <header className="upper-container">
            <Navigation />
        </header>
       <main className="main-container">
            <MainSidebar />
            <Todo />
        </main>
    </div>
  )
}

export default App
