import logo from './logo.svg';
// import  './App.css';
import styles from './App.module.css';
import { useState } from 'react';

function PageHeader({ title = "Default Title", batch = "Default Batch" }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{batch}</h2>
      <hr />
    </div>
  );
}

function PageBody() {
  let a = 0;
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  function handlerClick() {
    setCount(count + 1);
    a = a + 1;
    console.log("count", count, " - a: ", a);
  }
  return (
    <div>
      <p>This is the body of the page.</p>
      <p>Count: {count}</p>
      <p>a: {a}</p>
      <button onClick={handlerClick}>Increase</button>
    </div>
  );
}
function FormList(props) {
  const { data } = props;
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles["item-card"]}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
          </div>
        );
      })}
    </>
  );
}
function PageForm() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Name: ", name, " - Age: ", age);
    setData([ { name, age }, ...data]);
    setName("");
    setAge("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Name' onChange={(e) => { setName(e.target.value) }} />
        <input type="text" placeholder='Enter Age' onChange={(e) => { setAge(e.target.value) }} />
        <button type='submit'>Submit</button>
      </form>
      <hr />
      {data.length > 0 ? <FormList data={data} /> : <p>No data available</p>}
    </div>
  );
}
const ParentComponent = () => {
  const data = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" },
    { id: 3, name: "Doe" }
  ];
  return (
    <ChildComponent data={data} />
  );
};
const ChildComponent = (props) => {
  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <div key={index} className={styles["item-card"]}>
            <p>Index: {index}</p>
            <p>Id: {item.id}</p>
            <p>Name: {item.name}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        );
      })}

    </div>
    // <div>The numbers are: {numbers.join(" | ")}</div> 
  );
};

function App() {
  return (
    <>
      {/* <ParentComponent /> */}
      {/* <PageBody /> */}
      <PageForm />
    </>
  );
}

export default App;
