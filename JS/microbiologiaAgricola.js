let incubadora = [
    {
        ID: "INC001",
        "nombre equipo": "Incubadora Modelo A",
        "fecha calibracion": "2023-10-01",
        "fecha verificacion": "2024-01-15",
        "vencimiento calibracion": "2024-10-01"
    },
    {
        ID: "INC002",
        "nombre equipo": "Incubadora Modelo B",
        "fecha calibracion": "2023-10-01",
        "fecha verificacion": "2024-01-15",
        "vencimiento calibracion": "2024-10-01"
    },
    {
        ID: "INC003",
        "nombre equipo": "Incubadora Modelo C",
        "fecha calibracion": "2023-10-01",
        "fecha verificacion": "2024-01-15",
        "vencimiento calibracion": "2024-10-01"
    }

]

let estufa = [
    {
        ID: "EST002",
        "nombre equipo": "Estufa de Secado A",
        "fecha calibracion": "2023-11-05",
        "fecha verificacion": "2024-02-20",
        "vencimiento calibracion": "2024-11-05"
    },
    {
        ID: "EST002",
        "nombre equipo": "Estufa de Secado B",
        "fecha calibracion": "2023-11-05",
        "fecha verificacion": "2024-02-20",
        "vencimiento calibracion": "2024-11-05"
    },
    {
        ID: "EST002",
        "nombre equipo": "Estufa de Secado C",
        "fecha calibracion": "2023-11-05",
        "fecha verificacion": "2024-02-20",
        "vencimiento calibracion": "2024-11-05"
    }
]
let autoclave = [
    {
        ID: "AUT003",
        "nombre equipo": "Autoclave Vertical A",
        "fecha calibracion": "2023-09-10",
        "fecha verificacion": "2024-03-10",
        "vencimiento calibracion": "2024-09-10"
    },
    {
        ID: "AUT003",
        "nombre equipo": "Autoclave Vertical B",
        "fecha calibracion": "2023-09-10",
        "fecha verificacion": "2024-03-10",
        "vencimiento calibracion": "2024-09-10"
    },
    {
        ID: "AUT003",
        "nombre equipo": "Autoclave Vertical C",
        "fecha calibracion": "2023-09-10",
        "fecha verificacion": "2024-03-10",
        "vencimiento calibracion": "2024-09-10"
    },

]

let pedirEquipoMostrar = prompt("¿Que equipo desea ver?")


if(pedirEquipoMostrar === "incubadora"){
function mostrarIncubadoras(incubadora) {
    confirm("se encontraron 3 incubadoras")
    console.log(incubadora);
    console.log("-------------------------");

}
mostrarIncubadoras(incubadora);}
else if(pedirEquipoMostrar === "estufa"){
function mostrarEstufas(estufa) {
    confirm("se encontraron 3 Estufas")
    console.log(estufa);
    console.log("-------------------------");
}
mostrarEstufas(estufa);
} else if(pedirEquipoMostrar === "autoclave"){
function mostrarAutoclaves(autoclave) {
    confirm("se encontraron 3 Autoclaves")
    console.log(autoclave);
    console.log("-------------------------");
}
mostrarAutoclaves(autoclave);

}






