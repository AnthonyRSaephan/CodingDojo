const express = require("express")
const app = express()
const port = 8000

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



const { faker } = require('@faker-js/faker');

const createUser = () => {
    return {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    }
}

const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (request, response) => {
    const newUser = createUser()
    response.json(newUser)
})

app.get("/api/companies/new", (request, response) => {
    const newCompany = createCompany()
    response.json(newCompany)
})

app.get("/api/user/company", (request, response) => {
    const newUser = createUser()
    const newCompany = createCompany()
    response.json({
        user: newUser,
        company: newCompany
    })
})

app.listen(port, () => console.log(`Listening to port: ${port}`))