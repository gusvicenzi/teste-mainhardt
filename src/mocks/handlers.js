import { rest } from 'msw'

export const handlers = [
  rest.get('https://viacep.com.br/ws/01001000/json/', (req, res, ctx) => {
    return res(
      ctx.json({
        cep: '01001-000',
        logradouro: 'Praça da Sé',
        complemento: 'lado ímpar',
        bairro: 'Sé',
        localidade: 'São Paulo',
        uf: 'SP',
        ibge: '3550308',
        gia: '1004',
        ddd: '11',
        siafi: '7107'
      })
    )
  })
]
