import axios from 'axios'
import { useState } from 'react'
import './styles/Shipping.css'
import InputMask from 'react-input-mask'

export function Shipping() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [isReadOnly, setIsReadOnly] = useState(false)

  function handleCepChange(cepString) {
    const cepNumber = cepString.replace('-', '')
    setCep(cepString)
    if (cepNumber.length === 8) {
      getCepInfo(cepNumber)
    }
  }

  function getCepInfo(cep) {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(res => {
      const addressInfo = res.data
      setStreet(addressInfo.logradouro)
      setNeighborhood(addressInfo.bairro)
      setCity(addressInfo.localidade)
      setState(addressInfo.uf)

      if (!addressInfo.logradouro) {
        setIsReadOnly(false)
      } else {
        setIsReadOnly(true)
      }
    })
  }

  function handleClear() {
    setName('')
    setEmail('')
    setDate('')
    setCep('')
    setNumber('')
    setComplement('')
    setStreet('')
    setNeighborhood('')
    setCity('')
    setState('')
  }

  function beforeMaskedValueChange(newState, oldState, userInput) {
    var { value } = newState
    var selection = newState.selection
    var cursorPosition = selection ? selection.start : null

    // keep minus if entered by user
    if (value.endsWith('-') && userInput !== '-' && !cep.endsWith('-')) {
      if (cursorPosition === value.length) {
        cursorPosition--
        selection = { start: cursorPosition, end: cursorPosition }
      }
      value = value.slice(0, -1)
    }

    return {
      value,
      selection
    }
  }

  return (
    <div className='shipping'>
      <h1>Endereço de Entrega</h1>
      <form className='form'>
        <label>
          Nome Completo:
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Ex.: João da Silva'
          />
        </label>
        <label>
          E-mail:
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Ex.: joao@silva.com'
          />
        </label>
        <label>
          Data Entrega:
          <input
            type='date'
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </label>
        <label>
          CEP:
          <InputMask
            mask='99999-999'
            maskChar={null}
            value={cep}
            onChange={e => handleCepChange(e.target.value)}
            beforeMaskedValueChange={beforeMaskedValueChange}
            placeholder='01001-000'
          />
        </label>
        <label>
          Número de Endereço:
          <input
            type='text'
            value={number}
            onChange={e => setNumber(e.target.value)}
            placeholder='Ex.: 123'
          />
        </label>
        <label>
          Complemento:
          <input
            type='text'
            value={complement}
            onChange={e => setComplement(e.target.value)}
            placeholder='Ex.: ap 01'
          />
        </label>
        <label>
          Logradouro:
          <input
            type='text'
            value={street}
            readOnly={isReadOnly}
            onChange={e => setStreet(e.target.value)}
            placeholder='Ex.: Rua Brasil'
          />
        </label>
        <label>
          Bairro:
          <input
            type='text'
            value={neighborhood}
            readOnly={isReadOnly}
            onChange={e => setNeighborhood(e.target.value)}
            placeholder='Ex.: Centro'
          />
        </label>
        <label>
          Cidade:
          <input
            type='text'
            value={city}
            readOnly
            placeholder='Ex.: São Paulo'
          />
        </label>
        <label>
          Estado:
          <input type='text' value={state} readOnly placeholder='Ex.: SP' />
        </label>
      </form>
      <button onClick={handleClear}>Limpar tudo</button>
    </div>
  )
}
