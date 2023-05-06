import { useState } from "react";
import { Rating, ThankYou } from "./components";

function App() {
  const [value, setValue] = useState("");
  const [display, setDisplay] = useState(false);

  const handleClick = (event) => {
    setValue(event.target.textContent);
  };
  const handleSubmit = () => {
    if (value !== "") {
      setDisplay(true);
    }
  };
  return (
    <main className="App">
      {!display && (
        <Rating
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          value={value}
        />
      )}
      {display && <ThankYou value={value} />}
    </main>
  );
}

export default App;
