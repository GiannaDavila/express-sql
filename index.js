import express from "express"
import { getAllCustomers , getAllCustomerById, addNewCustomer} from "./src/customers.js"

const app = express ()
app.use(express.json())

app.get('/customers', getAllCustomers)
app.get('/customers/:customerId', getAllCustomerById)
app.post(`/customers`, addNewCustomer)

app.listen(3030, () => console.log ('listening on http://localhost:3030....'))
