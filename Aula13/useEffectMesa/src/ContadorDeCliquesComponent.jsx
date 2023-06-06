import { useEffect, useState } from "react";

function ContadordeCliquesComponent() {
    const [cliques, setCliques] = useState(0);
    
    
    useEffect(
        () => {
            console.log("<ContadordeCliquesComponent/> Foi montado");
            
            alert(`Clicou ${cliques} vezes no botão`)
            document.title = `Clicou ${cliques} vezes`
            
            return function limpaComponente(){
                console.log("<ContadordeCliquesComponent/> foi desmontado/limpo");
            }
        }, [cliques]
    )
    return ( 
        <>
            <h2>Clicou {cliques} vezes no botao</h2>
            <button onClick={() => setCliques(cliques +1)}>Clique aqui</button>
        </>
    );
}

export default ContadordeCliquesComponent;