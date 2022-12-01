import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Shipping } from '../Shipping'

test('check if all inputs are shown', () => {
  render(<Shipping />)

  const nameInput = screen.getByRole('textbox', { name: /nome completo/i })
  expect(nameInput).toBeInTheDocument()

  const emailInput = screen.getByRole('textbox', { name: /e-mail/i })
  expect(emailInput).toBeInTheDocument()

  const date = screen.getByText(/data entrega/i)
  expect(date).toBeInTheDocument()

  const cepInput = screen.getByRole('textbox', { name: /cep/i })
  expect(cepInput).toBeInTheDocument()

  const numberInput = screen.getByRole('textbox', { name: /número/i })
  expect(numberInput).toBeInTheDocument()

  const complementInput = screen.getByRole('textbox', { name: /complemento/i })
  expect(complementInput).toBeInTheDocument()
})

test('check if clear inputs button wokrs', async () => {
  render(<Shipping />)
  const user = userEvent.setup()

  const nameInput = screen.getByRole('textbox', { name: /nome completo/i })
  await user.type(nameInput, 'Maria Silva')

  expect(nameInput).toHaveValue('Maria Silva')

  const clearButton = screen.getByRole('button', { name: /limpar tudo/i })
  await user.click(clearButton)

  expect(nameInput).toHaveValue('')
})
