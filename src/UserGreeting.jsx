function UserGreeting({ username, isLoggedin }) {

    let message = <h1 className="welcome">Welcom {username}</h1>
    let logginrequired = <h1 className="login">Please login first</h1>

    if (isLoggedin) {
        return message
    } else {
        return logginrequired
    }
    // return (<>
    //   {isLoggedin?message:logginrequired }
    // </>)




}

export default UserGreeting