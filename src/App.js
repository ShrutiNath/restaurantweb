import React from 'react';
import "./App.css";
import { LoginContextProvider } from "./context/LoginContextProvider";
import { Home } from "./components/Home";

function App() {
    return (
        <div className='Home'>
        <LoginContextProvider>
            <Home />
        </LoginContextProvider>
        </div>
    );
}

export default App;
