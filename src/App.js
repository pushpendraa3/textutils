import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Utilities"/>
      
      <div className="container">
        <TextForm heading="Enter the text to analyse"/>
      </div>
    </>
  );
}

export default App;
