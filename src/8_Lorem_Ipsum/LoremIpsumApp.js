import React, {useState} from 'react';
import data from "./data";
import "./loremStyle.css";

function LoremIpsumApp() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let amount = parseInt(count);
      if(count >= data.length) {
        amount = data.length;
      }
      if(count <= 0) {
        amount = 1;
      }
      setText(data.slice(0, amount));
    }
  
    return (
      <section className="section-center">
        <h3>tored of boring loren ipsum?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs</label>
          <input 
            type="number" 
            id="amount" 
            className="amount" 
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit" className="btn">generate</button>
        </form>
        <div className="lorem-text">
          {text.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>
          })}
        </div>
      </section>
    )
}

export default LoremIpsumApp;