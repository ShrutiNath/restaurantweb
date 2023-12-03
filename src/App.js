import "./App.css";
import { LoginContextProvider } from "./context/LoginContextProvider";
import { Home } from "./components/Home";

function App() {
    return (
        <LoginContextProvider>
            <Home />
        </LoginContextProvider>
    );
}

export default App;
