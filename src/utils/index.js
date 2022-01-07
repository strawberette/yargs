const fs = require("fs")

// const addMovie = (movieArray, movieObj) => {
    const addMovie = async (collection, movieObj) => {
    try {
        await collection.insertOne(movieObj)
        console.log(`Successfully added ${movieObj.title}.`)
        // movieArray.push(movieObj);
        // const stringyObj = JSON.stringify(movieArray);
        // fs.writeFileSync("./storage.json", stringyObj);
    } catch (error) {
        console.log(error);
    }
 }
 const listMovies = () => {
     try {
        const movieArray = JSON.parse(fs.readFileSync("./storage.json"))
        console.log(movieArray);
         
     } catch (error) {
         console.log(error)
     }
 }
//  const deleteItem = (movieArray, title) => {
    const deleteItem = async (collection, movieObj) => {
    try {

        await collection.deleteOne({title: movieObj.title})
        console.log(`Successfully deleted ${movieObj}.`)

        // movieArray = movieArray.filter(e => e.title !== title)
        // const stringyObj = JSON.stringify(movieArray);
        // fs.writeFileSync("./storage.json", stringyObj);
    } catch (error) {
        console.log(error);
    }

 }

//  const editItem = (movieArray, title, newTitle) => {
    const editItem = async (collection, movieObj, title) => {
       
    try { 
        // console.log(movieObj)
        // return
       await collection.findOneAndReplace({title: title}, movieObj)
        console.log(`You have successfully edited your movie entry!`)

        // movieArray.map((e, idx, arr) => {
        //     if(e.title == title) {
        //         return arr[idx].title = newTitle
        //     }
        // }) 
        // const stringyObj = JSON.stringify(movieArray);
        // fs.writeFileSync("./storage.json", stringyObj);
    } catch (error) {
        console.log(error);
    }

 }

//  const listItems = (movieArray, title) => {
    const listItems = async (collection, movieObj) => {
    try { 
        const result = await collection.find({title: movieObj.title})
        const arr =await result.toArray()
        console.log(arr)



        // movieArray.map((e) => {
        //     if(e.title == title) {
        //         console.log(e)
        //     }
        // }) 
        // const stringyObj = JSON.stringify(movieArray);
        // fs.writeFileSync("./storage.json", stringyObj);
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

