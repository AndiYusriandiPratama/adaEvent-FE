import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
