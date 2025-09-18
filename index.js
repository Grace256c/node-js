const express= require('express');

const app = express();

const PORT = 5000;

app.get('/',(reqest,response)=>{
    response.send('Hello World');
})

app.listen(PORT,()=>{
    console.log("Server is running on port" + PORT);
})

//Http methods: GET, POST, PUT, DELETE, PATCH

app.get('/about', (req, res) => {
    res.send('This is my about page');
});

app.get('/about', (req, res) => {
    res.send('This is my contact page');
});

// Route parameters
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send('User ID is: ' + userId);
});

//Querry parameters
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send('You searched for: ' + query);
});

//JSON response
app.get('/products', (req, res) => {
    const products= [
        {id: 1, name: 'Product 1', price: 100},
        {id: 1, name: 'Product 1', price: 200},
        {id: 1, name: 'Product 1', price: 300},
    ];
    res.send(products);
});

let products = []

//Post request
app.post('/products', (req, res) =>{

    const {name, price} = req.body;
    
    const newProduct = {
        id: products.length +1,
        name,
        price,
    }

    products.push(newProduct);

    res.status(201).json({
        message: "Product added",
        product: newProduct
    })
})


app.listen(PORT, () =>{
    console.log("Server is running on port" +PORT);
})