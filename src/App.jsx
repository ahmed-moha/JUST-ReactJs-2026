import UserGreeting from "./UserGreeting.jsx"
function App() {


  return (
    <div>

<h1>{2+2}</h1>
      {/* <Student name="Ahmed mohamed" age={30} isStudent={false} />
      <Student name="Aisha" age={18} isStudent={false}/>
      <Student name="Ali" age={40} isStudent={true}/>
      <Student/> */}

      <UserGreeting isLoggedin={true} username="Maryama"/>
    </div>
  )
}

export default App
