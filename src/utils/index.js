const fs = require("fs");
const Movie = require("../models/models");
const mongoose = require("mongoose")


    const addMovie = async (movieObj) => {
    try {
        const newMovie = new Movie(movieObj)
      
        await newMovie.save();
        console.log(`You have successfully added your movie entry!`)
        return

    } catch (error) {
        console.log(error);
        return error
    }
 }
 const listMovies = async() => {
    try {
        console.log(await Movie.find({}))

    } catch (error) {
        console.log(error)
        
    }
  
 }

    const deleteItem = async (movieTitle) => {
        try {
            await Movie.deleteOne(movieTitle)
            console.log(`You have successfully deleted this movie!`)
        
    } catch (error) {
        console.log(error);
    }

 }

const editItem = async (props) => {
            

    try { 
        const movie = await Movie.updateOne(
        {title : props.oldTitle},
        {title : props.newTitle}
        
    )

       
        console.log(`You have successfully edited your movie entry!`)

    } catch (error) {
        console.log(error);
    }

 }

    const listItems = async (collection, movieObj) => {
    try { 
        const result = await collection.find({title: movieObj.title})
        const arr =await result.toArray()
        console.log(arr)




    } catch (error) {
        console.log(error);
    }

 }
    module.exports = {
        addMovie,
        listMovies,
        deleteItem,
        editItem,
        listItems

    }

