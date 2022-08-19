// Code Keypad Component Here
function Keypad(){
    function handleChange(){
        console.log("Entering password...")
    }
    return (
    <input 
        type = "password"
        name = "search"
        onChange = {handleChange}
        placeholder = "Enter password"
    
    />

    )
}

export default Keypad;