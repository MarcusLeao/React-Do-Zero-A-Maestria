const Events = ()=>{
    const handleMyEvent =(e)=>{
        console.log(e)
        console.log("Ativou o evento!")
    }

    const renderSomething = (x)=>{
        if (x) {
            return <h1>Renderizando isso aqui</h1>
        }else{
            return <h2>Renderizando isso aqui também!</h2>
        }
    }
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick = {()=>{console.log("Clicou")}}>Clique aqui também!</button>
                <button onClick={()=>{
                    if (true) {
                        console.log("Isso não deveria existir!")
                    }
                }}>Clique aqui por faveor!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;