const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');

const app = express();

const DUMMY_PRODUCTS = []; // not a database, just some in-memory storage for now

app.use(bodyParser.json());

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

//Get Products api
app.get('/products', (req, res, next) => {
  res.status(200).json({ products: DUMMY_PRODUCTS });
});

// updating the products
app.put('/products/update' , async (req,res,next) =>{
  let fetchedProduct = await prodcuts.findById(req.body.id);
  if(fetchedProduct){
    fetchedProduct.update(req.body);
    res.status(200).send({
      status:"true",
      message:"product is updated successfully",
      data:{
        fetchedProduct
      }
    })
  }
})

app.delete('/products/delete' , async (req,res,next) =>{
  let fetchedProduct = await prodcuts.findById(req.body.id);
  if(fetchedProduct){
    fetchedProduct.remove(req.body);
    res.status(200).send({
      status:"true",
      message:"product deleted successfully",
      data:{
        fetchedProduct
      }
    })
  }
})

//Get All Products Api
app.get('/allProducts', (req, res, next) => {
  res.status(200).json({ products: DUMMY_PRODUCTS });
});

//post products api
app.post('/product', (req, res, next) => {
  const { title, price } = req.body;

  if (!title || title.trim().length === 0 || !price || price <= 0) {
    return res.status(422).json({
      message: 'Invalid input, please enter a valid title and price.'
    });
  }

  const createdProduct = {
    id: uuid(),
    title,
    price
  };

  DUMMY_PRODUCTS.push(createdProduct);

  res
    .status(201)
    .json({ message: 'Created new product.', product: createdProduct });
});

app.listen(5000); // start Node + Express server on port 5000
