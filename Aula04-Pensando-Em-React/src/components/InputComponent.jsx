function InputComponent(label, type) {
    return (
        <>
            <label htmlFor={label}>{label ?? "Indefinido"} </label> 
            <br />
            <input type={type}></input>
        </> 
    )
}

export default InputComponent;