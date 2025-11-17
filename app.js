const fs = require('fs').promises
const path = require('path')
const express = require('express')
const api = require('./api')
const middleware = require('./middleware')
const bodyParser = require('body-parser')



// Set the port
const port = process.env.PORT || 3000
@@ -11,6 +16,12 @@ app.use(express.static(__dirname + '/public'));
// register the routes
app.get('/products', listProducts)
app.get('/', handleRoot);
app.get('/products/:id', api.getProduct)
app.post('/products', api.createProduct)
app.delete('/products/:id', api.deleteProduct);
app.put('/products/:id', api.updateProduct);
app.use(middleware.handleError)
app.use(middleware.notFound)
// Boot the server
app.listen(port, () => console.log(Server listening on port ${port}))