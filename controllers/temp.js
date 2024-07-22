// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Temp = require('../models/tempSchema');

// CRUD operations for temp
// Create Controller 
const createTemp = async (req, res) => { 
    const { Field1 } = req.body;
    try {
        const temp = await Temp.create({ Field1 }) 
        await temp.save();
        res.status(201).json(temp);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateTemp = async (req, res) => { 
    const _id=req.params.id;
    const { Field1 } = req.body;
    try {
        const temp = await Temp.findByIdAndUpdate( _id, { Field1 },{new:true}) 
        if (!temp) {
            return res.status(404).send('temp not found');
        }
        await temp.save();
        res.status(201).json(temp);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteTemp = async (req, res) => { 
    const _id=req.params.id;
    try {
        const temp = await Temp.findById(_id)
        if (!temp) {
            return res.status(404).send('temp not found');
        }
        await Temp.deleteOne({_id: _id})
        await temp.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getTemp = async (req, res) => { 
    const _id=req.params.id;
    try {
        const temp = await Temp.findById(_id)
        if (!temp) {
            return res.status(404).send('temp not found');
        }
        res.status(201).json(temp);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllTemp = async (req, res) => { 
    try {
        const temp = await Temp.find({})
        if (!temp) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(temp);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createTemp,
    updateTemp,
    deleteTemp,
    getTemp,
    getAllTemp
}