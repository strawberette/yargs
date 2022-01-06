const yargs = require("yargs");
const fs = require("fs");
const {addMovie, listMovies, deleteItem, editItem, listItems} = require("./utils/index.js");
const { title } = require("process");

const app = () => {
    try {
        let movieArray;
        try {
             movieArray = JSON.parse(fs.readFileSync("./storage.json"))
        } catch (error) {
            movieArray = []
        }
        try {
           if (process.argv[2] === "add") {
               addMovie(movieArray, {title: yargs.argv.title, actor: yargs.argv.actor })
                
           } else if (process.argv[2] === "list") {
               listMovies()
           }

        } catch (error) {
            console.log(error)
            
        }
        try {
            if (process.argv[2] === "delete") {
                deleteItem(movieArray, yargs.argv.title)
            }
            
        } catch (error) {
            console.log(error)
            
        }
        try {
            if (process.argv[2] === "edit") {
                editItem(movieArray, yargs.argv.title, yargs.argv.newTitle)
            }
        } catch (error) {
            console.log(error)
        }

        try {
            if (process.argv[2] === "show") {
               listItems(movieArray, yargs.argv.title)
            }
        } catch (error) {
            console.log(error)
        }

    
    } catch (error) {
        console.log(error)
    }
}
app()