import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#9EC9f9").all(9));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(9);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              index={index}
              {...color}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
