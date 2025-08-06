const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

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

module.exports = router;import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    
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

    // ...rest of your component code...
};