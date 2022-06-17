
const P =(props)=>{
    console.log("Props is",props)
    return(
        <div>
            <h1>Hello, I am {props.name}, I am a {props.work}</h1>
            {props.children}
        </div>
    )
}

export default P;