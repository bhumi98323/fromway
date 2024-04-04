import "./style.css";
import css from "./style.module.css";

const App = () => {
  const divstyle = {
    width: "80vw",
    height :"50vh",
    backgroundColor : '#e8e8e8',
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
  }
  return (
    <div>
      <div style={divstyle}>
        <h1 style={{fontSize: "65px", color: "tomato"}}>
          This is a react/vite Homepage
        </h1>
        <p className={css.paracolor}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio totam, fugit unde nostrum tempora doloremque architecto saepe. Iste ratione recusandae temporibus placeat dolore, totam, explicabo ullam, nesciunt delectus tenetur culpa?
        </p>
      </div>
    </div>
  )
}

export default App
