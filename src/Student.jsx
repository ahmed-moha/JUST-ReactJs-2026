function Student ({name="UNKNOWN", age=0, isStudent}){
    return (
        <div className="student">
            <h2>Name: {name} </h2>
            <h2>Age: {age}</h2>
            <h2>Student: {isStudent? "YES":"NO"}</h2>
        </div>
    );
}

export default Student