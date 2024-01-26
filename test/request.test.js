const request = require('supertest')
const express = require('express')
const bodyparser = require('body-parser')
const route = express()

route.use(bodyparser.json())
route.use('/', require('../routers/index'))

/* @body {string} username, password */
describe('POST /registration', () => {
    it('responds with json', async () => {
        const res = await request(route)
            .post('/registration')
            .send({username: 'john', password: '123'})
            .set('Accept', 'application/json')
        expect(res.statusCode).toBe(201)
    })
})