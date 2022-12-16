const Challenge = () => {
    const num1 = 20;
    const num2 = 30;
    return (
        <div>
            <p>Primeiro numero: {num1}</p>
            <p>Segundo Numero: {num2}</p>
            <button onClick= {() => {console.log(num1 + num2); }}>Clique para somar</button>
        </div>
    );
};

export default Challenge;