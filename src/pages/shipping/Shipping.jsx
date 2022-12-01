import { useState } from 'react'
import './styles/Shipping.css'

export function Shipping() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [cep, setCep] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')

  function handleClear() {
    setName('')
    setEmail('')
    setDate('')
    setCep('')
    setNumber('')
    setComplement('')
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
          <input
            type='text'
            value={cep}
            onChange={e => setCep(e.target.value)}
            placeholder='01001000'
          />
        </label>
        <label>
          Número de Endereço:
          <input
            type='text'
            value={number}
            onChange={e => setNumber(e.target.value)}
            placeholder='Ex.: Rua Brasil'
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
      </form>
      <button onClick={handleClear}>Limpar tudo</button>
    </div>
  )
}
