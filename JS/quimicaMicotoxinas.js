let estufasQuimica = [
    {
        ID: "INC001",
        "nombre equipo": "Estufas Modelo A",
        "fecha calibracion": "2023-10-01",
        "fecha verificacion": "2024-01-15",
        "vencimiento calibracion": "2024-10-01"
    },
    {
        ID: "INC002",
        "nombre equipo": "Estufas Modelo B",
        "fecha calibracion": "2023-10-01",
        "fecha verificacion": "2024-01-15",
        "vencimiento calibracion": "2024-10-01"
    },
    {
        ID: "INC003",
        "nombre equipo": "Estufas Modelo C",
        "fecha calibracion": "2023-10-01",
        "fecha verificacion": "2024-01-15",
        "vencimiento calibracion": "2024-10-01"
    }

]

let micropipetasQuimica = [
    {
        ID: "EST002",
        "nombre equipo": "Micropipetas Modelo A",
        "fecha calibracion": "2023-11-05",
        "fecha verificacion": "2024-02-20",
        "vencimiento calibracion": "2024-11-05"
    },
    {
        ID: "EST002",
        "nombre equipo": "Micropipetas Modelo B",
        "fecha calibracion": "2023-11-05",
        "fecha verificacion": "2024-02-20",
        "vencimiento calibracion": "2024-11-05"
    },
    {
        ID: "EST002",
        "nombre equipo": "Micropipetas Modelo C",
        "fecha calibracion": "2023-11-05",
        "fecha verificacion": "2024-02-20",
        "vencimiento calibracion": "2024-11-05"
    }
]
let termometrosQuimica = [
    {
        ID: "AUT003",
        "nombre equipo": "Termometros Modelo A",
        "fecha calibracion": "2023-09-10",
        "fecha verificacion": "2024-03-10",
        "vencimiento calibracion": "2024-09-10"
    },
    {
        ID: "AUT003",
        "nombre equipo": "Termometros Modelo B",
        "fecha calibracion": "2023-09-10",
        "fecha verificacion": "2024-03-10",
        "vencimiento calibracion": "2024-09-10"
    },
    {
        ID: "AUT003",
        "nombre equipo": "Termometros Modelo C",
        "fecha calibracion": "2023-09-10",
        "fecha verificacion": "2024-03-10",
        "vencimiento calibracion": "2024-09-10"
    },

]

let pedirEquipoMostrarQuimica = prompt("¿Que equipo desea ver?")


if(pedirEquipoMostrarQuimica === "estufa"){
function mostrarEstufasQuimica(estufasQuimica) {
    confirm("se encontraron 3 Estufas")
    console.log(estufasQuimica);
    console.log("-------------------------");

}
mostrarEstufasQuimica(estufasQuimica);}
else if(pedirEquipoMostrarQuimica === "micropipeta"){
function mostrarMicropipetasQuimica(micropipetasQuimica) {
    confirm("se encontraron 3 Micropipetas")
    console.log(micropipetasQuimica);
    console.log("-------------------------");
}
mostrarMicropipetasQuimica(micropipetasQuimica);
} else if(pedirEquipoMostrarQuimica === "termometros"){
function mostrarTermometrosQuimica(termometrosQuimica) {
    confirm("se encontraron 3 Termometros")
    console.log(termometrosQuimica);
    console.log("-------------------------");
}
mostrarTermometrosQuimica(termometrosQuimica);

}