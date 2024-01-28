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

        console.log(res.body);
        expect(res.statusCode).toBe(201)
    })
})

/* @body {string} username, password */
describe('POST /login', () => {
    it('responds with json', async () => {
        const res = await request(route)
            .post('/login')
            .send({username: 'john', password: '123'})
            .set('Accept', 'application/json')

        console.log(res.body);
        expect(res.statusCode).toBe(200)
    })
})

/* @param {string} accesstoken */
const accesstoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJwYXNzd29yZCI6IjEyMyIsImlhdCI6MTcwNjQ0MjczOCwiZXhwIjoxNzA2NDQ2MzM4fQ.K5eFlFI_oZm_7DHkGAjGt1tWxQoTv25RBcnd6ArbTJg'

describe('GET /data', () => {
    it('responds with json', async () => {
        const res = await request(route)
            .get(`/data?accesstoken=${accesstoken}`)
            .set('Accept', 'application/json')

        console.log(res.body);
        expect(res.statusCode).toBe(200)
    })
})