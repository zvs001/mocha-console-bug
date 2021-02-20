import agent from '../../../test/testServer'

describe('/app/create [POST]', () => {
  it('works', async () => {
    const { body, status } = await agent.post('/brand/create')
  })
})
