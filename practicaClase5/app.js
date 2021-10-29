const fs = require("fs");
const tareas = fs.readFileSync("./tareas.json", {encoding: "utf-8"});

let tareasParseadas = JSON.parse (tareas)
var args = process.argv[2] ;



switch(args){
    case "listar":
for(let i = 0; i < tareasParseadas.length; i++){
    console.log("Tarea ", i+1);
    console.log("Titulo ", tareasParseadas[i].titulo)
    console.log("Estado", tareasParseadas[i].estado)
    console.log ("___________________")
} break;
case undefined:
    console.log ("atencion - tienes que pasar una accion");
    break;
    case "progreso":
for(let i = 0; i < tareasParseadas.length; i++){
    if (tareasParseadas[i].estado == "En proceso"){
    console.log("Tarea ", i+1);
    console.log("Titulo ", tareasParseadas[i].titulo)
    console.log("Estado", tareasParseadas[i].estado)
    console.log ("___________________")
}
}
    break;
    case "terminada":
for(let i = 0; i < tareasParseadas.length; i++){
    if (tareasParseadas[i].estado == "Terminada"){
    console.log("Tarea ", i+1);
    console.log("Titulo ", tareasParseadas[i].titulo)
    console.log("Estado", tareasParseadas[i].estado)
    console.log ("___________________")
}
}
    break;
    case "pendiente":
    for(let i = 0; i < tareasParseadas.length; i++){
    if (tareasParseadas[i].estado == "pendiente"){
    console.log("Tarea ", i+1);
    console.log("Titulo ", tareasParseadas[i].titulo)
    console.log("Estado", tareasParseadas[i].estado)
    console.log ("___________________")
    }
}
    break;
    default:
        console.log("no entiendo que queres hacer")
    }

    