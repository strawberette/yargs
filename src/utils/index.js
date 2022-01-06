const fs = require("fs")

const addMovie = (movieArray, movieObj) => {
    try {
        movieArray.push(movieObj);
        const stringyObj = JSON.stringify(movieArray);
        fs.writeFileSync("./storage.json", stringyObj);
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
 const deleteItem = (movieArray, title) => {
    try {
        movieArray = movieArray.filter(e => e.title !== title)
        const stringyObj = JSON.stringify(movieArray);
        fs.writeFileSync("./storage.json", stringyObj);
    } catch (error) {
        console.log(error);
    }

 }

 const editItem = (movieArray, title, newTitle) => {
    try { 
        movieArray.map((e, idx, arr) => {
            if(e.title == title) {
                return arr[idx].title = newTitle
            }
        }) 
        const stringyObj = JSON.stringify(movieArray);
        fs.writeFileSync("./storage.json", stringyObj);
    } catch (error) {
        console.log(error);
    }

 }

 const listItems = (movieArray, title) => {
    try { 
        movieArray.map((e) => {
            if(e.title == title) {
                console.log(e)
            }
        }) 
        const stringyObj = JSON.stringify(movieArray);
        fs.writeFileSync("./storage.json", stringyObj);
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
