// import style from './Button.module.css';
function Button() {

let style ={

    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px",
}


  return (
    <button style={style}>Click me</button>
  )
}

export default Button;
