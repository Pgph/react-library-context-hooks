import React from "react";
import Booklist from "./components/BookList";
import ThemeToggle from "./components/ThemeToggle";
import SongList from "./components/SongList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <Booklist />
          <ThemeToggle />
          <SongList />
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
