const TemplateExpressions = () =>{
    const name = "Marcus";
    const data = {
        job:"Programmer",
        age: 23

    }

    return(
        <div>
            <h1>Olá {name}, seja bem vindo!</h1>
            <p>Você atua como {data.job}</p>
            <p>Você tem {data.age}  anos</p>
        </div>
    )
}

export default TemplateExpressions;