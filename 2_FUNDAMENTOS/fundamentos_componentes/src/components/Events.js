const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou meu evento!")
    };

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else{
            return <h1>Tambem posso renderizar isso!</h1>
        }
    };

    return ( 
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
            <button onClick={() => console.log("Clicou!")}>Clique aqui tambem!</button>   
            <button onClick={() => {
                    if(true) {
                        console.log("Isso nao deveria existir! codigo grande em function no html")
                    }
                }
            }>Clica aqui, por favor</button>         
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;