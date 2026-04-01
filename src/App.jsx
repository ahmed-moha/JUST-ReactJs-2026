import './style.css';
import UserCard from './UserCard.jsx';
function App() {


  return (
    <div style={{
      display:'flex',
      gap:'20px'
    }}>
      {/* <Button />
       */}

       <UserCard/>
       <UserCard/>
       <UserCard/>
    </div>
  )
}

export default App
