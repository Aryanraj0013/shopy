const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/product.router");

const app = express();

// CORS configuration
app.use(cors({
    origin: [
        'https://shopy-frontend-jvrq.onrender.com',
        'http://localhost:3000'  // Keep this during development
    ],
    credentials: true
}));

app.use(express.json());

// Routes
app.use("/products", productRouter);

// ...existing code...

router.post("/add", async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({
            success: true,
            message: "Product added successfully",
            product: product,
            redirectUrl: "/products"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// ...existing code...

module.exports = app;
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://shopy-frontend-jvrq.onrender.com/products/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            
            if (data.success) {
                alert('Product added successfully!');
                navigate(data.redirectUrl); // This will handle the redirect
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    module.exports = app;