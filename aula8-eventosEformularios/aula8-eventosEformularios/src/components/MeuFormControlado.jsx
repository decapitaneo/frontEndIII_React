import { useState } from "react";

export function MeuFormControlado(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
     event.preventDefault();   ///para que nao ocorra o submit, impede o comportamento padrao
     
     alert(`Bem vindo ${userName}`)
     console.log(password);
     setUserName ('');
     setPassword ('');
     
    }
    
    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    } 
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="userName" id="userName" value={userName}
            ///onChange={() => setUserName(event.target.value)}
            onChange={handleUserNameChange}
            />
            
            <input type="password" name="password" id="password" value={password}
            onChange={handlePasswordChange}
            />
            
            <button type="submit">Clique aqui</button>
        </form>
    )
}