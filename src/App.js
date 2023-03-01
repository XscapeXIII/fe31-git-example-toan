import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const content = "hello";
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
