const yargs = require("yargs");
const fs = require("fs");
const {addMovie, listMovies, deleteItem, editItem, listItems} = require("./utils/index.js");
const { title } = require("process");
const connection = require("./db/connection.js");

// const command = process.argv[2]
const command = yargs.argv._[0];

const app = async (args) => {
    
    // try {
        // let movieArray;
        // try {
            //  movieArray = JSON.parse(fs.readFileSync("./storage.json"))
        // } catch (error) {
        //     movieArray = []
        // }
        try {
        //    if (process.argv[2] === "add") {
              //    addMovie(movieArray, {title: yargs.argv.title, actor: yargs.argv.actor })
            // if (command == "add") {
            //     const movieObj = {title: args.title, actor: args.actor}
            //     await connection(addMovie, movieObj)
          if (command === "add") {
              await addMovie({title: args.title, actor: args.actor})
           }
        //  else if (command ==="list") {
        //           await connection(listMovies)
        //       }
        //   }
                
        //    } else if (process.argv[2] === "list") {
        //        listMovies()
        //    }

         } catch (error) {
            console.log(error)
            
        }
        // try {
        //     if (command == "delete") {
        //        const movieObj = {title: args.title, actor: args.actor}
        //         await connection(deleteItem, movieObj.title)

        //     // if (process.argv[2] === "delete") {
        //         // deleteItem(movieArray, yargs.argv.title)
        //     }
            
        // } catch (error) {
        //     console.log(error)
            
        // }
        // try {
        //     if (command === "edit") {
        //         const movieObj = {title: args.newTitle, actor: args.actor}    
                           
        //         await connection(editItem, movieObj, args.title)
        //         // editItem(movieArray, yargs.argv.title, yargs.argv.newTitle)
        //     }
        // } catch (error) {
        //     console.log(error)
        // }

        // try {
        //     if (command == "show") {
        //         const movieObj = {title: args.title, actor: args.actor}
        //          await connection(listItems, movieObj)

        //     // if (process.argv[2] === "show") {
        //     //    listItems(movieArray, yargs.argv.title)
        //     }
        // } catch (error) {
        //     console.log(error)
        // }

    
    // } catch (error) {
    //     console.log(error)
    }

//     try {
//         if (command == "add") {
//             const movieObj = {title: args.title, actor: args.actor}
//             await connection(addMovie, movieObj)
//         }
//     } catch (error) {
//         console.log(error)
//     }

//  }
app(yargs.argv)