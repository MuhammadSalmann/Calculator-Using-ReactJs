import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (val) => {
        if (val === '=') {
            if (input) {
                setInput(eval(input).toString());
            } else {
                setInput('0');
            }
        } else if (val === 'AC') {
            setInput('');
        } else if (val === 'DEL') {
            setInput(input.slice(0, -1));
        } else {
            setInput(input + val);
        }
    };

    return (
        <div className="container">
            <div className="calculator">
                <input type="text" value={input} name="display" className="display" readOnly />
                <div className="row">
                    <button className="operator" onClick={() => handleButtonClick('AC')}>AC</button>
                    <button className="operator" onClick={() => handleButtonClick('DEL')}>DEL</button>
                    <button className="operator" onClick={() => handleButtonClick('%')}>%</button>
                    <button className="operator" onClick={() => handleButtonClick('/')}>/</button>
                </div>
                <div className="row">
                    <button onClick={() => handleButtonClick('7')}>7</button>
                    <button onClick={() => handleButtonClick('8')}>8</button>
                    <button onClick={() => handleButtonClick('9')}>9</button>
                    <button className="operator" onClick={() => handleButtonClick('*')}>*</button>
                </div>
                <div className="row">
                    <button onClick={() => handleButtonClick('4')}>4</button>
                    <button onClick={() => handleButtonClick('5')}>5</button>
                    <button onClick={() => handleButtonClick('6')}>6</button>
                    <button className="operator" onClick={() => handleButtonClick('-')}>-</button>
                </div>
                <div className="row">
                    <button onClick={() => handleButtonClick('1')}>1</button>
                    <button onClick={() => handleButtonClick('2')}>2</button>
                    <button onClick={() => handleButtonClick('3')}>3</button>
                    <button className="operator" onClick={() => handleButtonClick('+')}>+</button>
                </div>
                <div className="row">
                    <button onClick={() => handleButtonClick('0')}>0</button>
                    <button onClick={() => handleButtonClick('.')}>.</button>
                    <button className="equal" onClick={() => handleButtonClick('=')}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
