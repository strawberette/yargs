const yargs = require("yargs");
const fs = require("fs");
const {addMovie, listMovies, deleteItem, editItem, listItems} = require("./utils/index.js");
const { title } = require("process");
const connection = require("./db/connection.js");
const command = yargs.argv._[0];

const app = async (args) => {
    
   
        try {
     
          if (command === "add") {
              await addMovie({title: args.title, actor: args.actor})
              
           }
           else if (command === "delete") {
                await deleteItem({title: args.title})

           } else if (command === "edit") {
               await editItem({oldTitle: args.title, newTitle: args.newTitle})
           } else if (command === "show") {
               await listMovies()
           }
           
           process.exit(0)
          

         } catch (error) {
            console.log(error)
            process.exit(1)
            
        }
        
    }


app(yargs.argv)