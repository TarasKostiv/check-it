import Navigation from "../components/Navigation/Navigation"
import MainSidebar from "../components/MainSidebar/MainSidebar"
import Todo from "../components/Todo/Todo"
import AdditionalSidebar from "../components/AdditionalSidebar/AdditionalSidebar"

function App() {
  return (
    <div className="app">
        <header className="upper-container">
            <Navigation />
        </header>
       <main className="main-container">
            <MainSidebar />
            <Todo />
            <AdditionalSidebar />
        </main>
    </div>
  )
}

export default App
