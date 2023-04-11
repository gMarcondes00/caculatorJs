function App() {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState(0);

  const display = (symbol) => {
    setInput((prev) => prev + symbol)
    if(input[input.length-1] === '='){
      if(/[0-9]/.test(symbol)){
        setInput(symbol);
      } else {
        setInput(output + symbol);
      }
    }
  }

  const Display = ({input, output}) => (
    <div>
      <span>{output}</span>
      <span id='display'>{input}</span>
    </div>
  )

  const calculate = () => {
    setOutput(eval(input));
    setInput((prev) => prev + '=')
  }

  const clear = () => {
    setInput('');
    setOutput(0);
  }

  return (
    <div className='app'>
      <div className='calculator card'> 
      < div id='display'>{output}</div>
        <input id='count' value={input} placeholder='0' disabled/>
        <button onClick={clear} id='clear' className='btn btn-danger'>AC</button>
        <div className='calculator-keys'>
          

          <button onClick={()=>display('7')} id='seven' className='btn btn-light'>7</button>
          <button onClick={()=>display('8')} id='eight' className='btn btn-light'>8</button>
          <button onClick={()=>display('9')} id='nine' className='btn btn-light'>9</button>
          <button onClick={()=>display('+')} id='add' className='btn btn-info'>+</button>

          <button onClick={()=>display('4')} id='four' className='btn btn-light'>4</button>
          <button onClick={()=>display('5')} id='five' className='btn btn-light'>5</button>
          <button onClick={()=>display('6')} id='six' className='btn btn-light'>6</button>
          <button onClick={()=>display('-')} id='subtract' className='btn btn-info'>-</button>

          <button onClick={()=>display('1')} id='one' className='btn btn-light'>1</button>
          <button onClick={()=>display('2')} id='two' className='btn btn-light'>2</button>
          <button onClick={()=>display('3')} id='three' className='btn btn-light'>3</button>
          <button onClick={()=>display('*')} id='multiply' className='btn btn-info'>&times;</button>

          <button onClick={()=>display('0')} id='zero' className='btn btn-light'>0</button>
          <button onClick={()=>display('.')} id='decimal' className='btn btn-secondary'>.</button>
          <button onClick={calculate} id='equals' className='btn btn-primary'>=</button>
          <button onClick={()=>display('/')} id='divide' className='btn btn-info'>&divide;</button>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))