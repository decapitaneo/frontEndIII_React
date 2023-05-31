export function MeuForm(){
    const handleSubmit = (event) => {
     event.preventDefault();   ///para que nao ocorra o submit, impede o comportamento padrao
     
     const formData = new FormData(event.target);
     const data = Object.fromEntries(formData);
     alert(`Bem vindo ${data.userName}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="userName" id="userName" />
            <input type="password" name="password" id="password" />
            <button type="submit">Clique aqui</button>
        </form>
    )
}