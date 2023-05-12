const Challenge =()=> {
const firstNumber = 63;
const secondNumber = 94;
const handleSoma = ()=>{
    const soma = firstNumber+secondNumber
    return console.log(soma)
}
    return(
    <div>
        <h1>{firstNumber}</h1>
        <h2>+</h2>
        <h1>{secondNumber}</h1>
        <button onClick={handleSoma}>Veja o resultado da soma</button>
    </div>
)
}
export default Challenge;