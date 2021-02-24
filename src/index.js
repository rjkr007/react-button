import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// ========================================

// const sum = document.getElementById("sum1");
// let n = 0;
// sum.addEventListener("click", increment);

// function increment() {
//  //   n++;
//   let insert = n;
//   sum.innerHTML = `Add ${insert}`;
// }

// class H1 extends React.Component {
//   // let n = 0;
// increment() {
//   let n = 0;
//   const sum = document.getElementById("sum");
//   n++;
//   // let insert = n;

//   sum.innerHTML = `Add ${n}`;
// }

//   render() {
//     return <button id="sum" onClick={this.increment}>{'Add 0'}</button>;
//   }
// }

// ReactDOM.render(<H1 />, document.getElementById("root"));

// ==========================================================================

//  working code for increment counter using classes component

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//     increment() {
//       const sum = document.getElementById("sum");
//        sum.innerHTML = `Add ${this.state.count}`;
//     this.setState({
//       count: this.state.count + 1
//     });
//   };

//    render() {
//     return (
//    <div>
//    <button id='sum' onClick={(e) => this.increment(e)}>Add 0</button>
//          </div>
//     );
//   }
// };

// ReactDOM.render(<Counter />, document.getElementById("root"));

// ====================================================================================

// working code for increment counter using function component

const Increment = () => {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount((currentCount) => currentCount + 1);
  };

  return (
    <div>
      <Button handleClick={counter} />
      <p
        style={{
          display: "inline-block",
          padding: 10,
          color: "red",
          marginLeft: 50,
        }}
      >
        {count}
      </p>
    </div>
  );
};

const Button = ({ handleClick }) => (
  <button
    style={{
      display: "inline-block",
      padding: 5,
      color: "red",
      marginLeft: 500,
      borderRadius: 5,
      backgroundColor: "yellow",
    }}
    type="button"
    onClick={handleClick}
  >
    Add
  </button>
);

ReactDOM.render(<Increment />, document.getElementById("root"));

