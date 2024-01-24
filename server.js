const express = require("express");
const connectDB = require("./config/connectDB");
const Persons = require("./model/personsModal");
const app = express();
connectDB();


const createPersonDoc = async()=>{
    try {
        const doc = new Persons({name:"mouadh", age:21, favoriteFoods:['couscous', 'm7amas', 'keftaji']});
        await doc.save();
        console.log("new person :" , doc )
    } catch (error) {
        console.log(error)
    }
}

const findPersons = async ()=>{
    try {
        const personsData = await Persons.find({});
        console.log(personsData)
    } catch (error) {
        console.log(error)
    }
};


const findPerson = async ()=>{
    try {
        const personData = await Persons.findOne({name:"bilel"});
        console.log(personData)
    } catch (error) {
        console.log(error)
    }
}; 


const findPersonById = async ()=>{
    try {
        const personData = await Persons.findById("65a8e41d2f981b804aed471e");
        console.log(personData)
    } catch (error) {
        console.log(error)
    }
}; 


const updatePersonById = async ()=>{
    try {
        const personData = await Persons.findByIdAndUpdate("65a8e41d2f981b804aed471e" ,{favoriteFoods:['couscous', 'm7amas', 'ma9arouna']} );
        console.log(personData)
    } catch (error) {
        console.log(error)
    }
}; 


const removePersonById = async ()=>{
    try {
        const personData = await Persons.findByIdAndDelete("65a8e6988c5973c5684aa946");
        console.log(personData)
    } catch (error) {
        console.log(error)
    }
};


const peopleLikes = async ()=>{
    try {
        const personsData = await Persons.find({favoriteFoods:['couscous', 'm7amas', 'keftaji']});
        console.log(personsData)
    } catch (error) {
        console.log(error)
    }
};

peopleLikes()






const PORT = 5002;

app.listen(PORT,(err)=>
err? console.log(err):
console.log(`server is running on port ${PORT}`));