import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddCounter from "./components/AddCounter";
import Counter from "./components/Counter";

const App = () => {
  const [counter, setCounter] = useState([0]);

  // const handleClickRestore = () => {
  //   const counterLocal = JSON.parse(localStorage.getItem("counter"));
  //   console.log(counterLocal);
  //   setCounter([counterLocal]);
  // };

  return (
    <>
      {/* <button onClick={() => handleClickRestore()}>Restore</button> */}
      <Header />
      <main>
        <AddCounter counter={counter} setCounter={setCounter} />

        <Counter counter={counter} setCounter={setCounter} />
      </main>

      <Footer />
    </>
  );
};

export default App;
