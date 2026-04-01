import image from "./assets/1.jpeg";

function UserCard(){
    return (

        <div className="card">
            <img src={image} alt="" />
            <h2>Web Development</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    );
}

export default UserCard