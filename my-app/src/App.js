import logo from './logo.svg';
import './App.css';
import { useState} from "react";
function App() {
  // const items = ["iteam 1", "iteam 2", "iteam 3", "iteam 4","iteam 5"]
  const [items, setItems] = useState(["iteam 1", "iteam 2", "iteam 3", "iteam 4","iteam 5"])
  const[value, setValue] = useState("");
  function onValueChange(e){
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function onAdd(){
    console.log(value);
    const newItems = [...items, value]
    setItems(newItems)
    setValue("")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>to-do List</h1>
        <label>
           to-do
        </label>
        <input type="text" placeholder="enter to-do item:" onChange={onValueChange}></input>
        <button onClick={onAdd}>Add</button>

<ol>
  {items.map((item, i) =>(
<li key={i} style={{color: "red"}}>{item}</li>))}
</ol>


        <p>hello world</p>
      </header>
    </div>
  );
}

export default App;
