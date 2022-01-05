document.write("<p>Estadisticas centro medico ñuñoa</p>");

const consultasMedicas = [
  {
    // sector: ["radiologia"],
    hora: ["11:00", "11:30", "15:00", "15:30", "16:00"],
    especialista: [
      "IGNACIO SCHULZ",
      "FEDERICO SUBERCASEAUX",
      "FERNANDO WURTHZ",
      "ANA MARIA GODOY",
      "PATRICIA SUAZO",
    ],
    paciente: [
      "FRANCISCA ROJAS",
      "PAMELA ESTRADA",
      "ARMANDO LUNA",
      "MANUEL GODOY",
      "RAMON ULLOA",
    ],
    rut: ["9878782-1", "15345241-3", "16445345-9", "17666419-0", "14989389-K"],
    prevision: ["FONASA", "ISAPRE", "ISAPRE", "FONASA", "FONASA"],
  },

  {
    // sector: ["traumatologia"],
    hora: ["08:00", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"],
    especialista: [
      "MARIA PAZ ALTUZARRA",
      "RAUL ARAYA",
      "MARIA ARRIAGADA",
      "ALEJANDRO BADILLA",
      "CECILIA BUDNIK",
      "ARTURO CAVAGNARO",
      "ANDRES KANACRI",
    ],
    paciente: [
      "PAULA SANCHEZ",
      "ANGÉLICA NAVAS",
      "ANA KLAPP",
      "FELIPE MARDONES",
      "DIEGO MARRE",
      "CECILIA MENDEZ",
      "MARCIAL SUAZO",
    ],
    rut: [
      "15554774-5",
      "15444147-9",
      "17879423-9",
      "1547423-6",
      "16554741-K",
      "9747535-8",
      "11254785-5",
    ],
    prevision: [
      "FONASA",
      "ISAPRE",
      "ISAPRE",
      "ISAPRE",
      "FONASA",
      "ISAPRE",
      "ISAPRE",
    ],
  },

  {
    // sector: ["dental"],
    hora: ["8:30", "11:00", "11:30", "13:00", "13:30", "14:00"],
    especialista: [
      "ANDREA ZUÑIGA",
      "MARIA PIA ZAÑARTU",
      "SCARLETT WITTING",
      "FRANCISCO VON TEUBER",
      "EDUARDO VIÑUELA",
      "RAQUEL VILLASECA",
    ],
    paciente: [
      "MARCELA RETAMAL",
      "ANGEL MUÑOZ",
      "MARIO KAST",
      "KARIN FERNANDEZ",
      "HUGO SANCHEZ",
      "ANA SEPULVEDA",
    ],
    rut: [
      "11123425-6",
      "9878789-2",
      "7998789-5",
      "18887662-K",
      "17665461-4",
      "14441281-0",
    ],
    prevision: ["ISAPRE", "ISAPRE", "FONASA", "FONASA", "FONASA", "ISAPRE"],
  },
];

const sectores = ["radiologia", "traumatologia", "dental"];

console.log(
  `Primera atencion:\nSector: ${consultasMedicas[0].sector}\nHora: ${consultasMedicas[0].hora[0]}\nEspecialista: ${consultasMedicas[0].especialista[0]}\nPaciente: ${consultasMedicas[0].paciente[0]}\nRut: ${consultasMedicas[0].rut[0]}\nPrevision: ${consultasMedicas[0].prevision[0]}`
);

// FUNCIONES

// obtengo el sector a consultar
function consultaSector() {
  let i = 0;
  while (i == 0) {
    let consultaSector = Number(
      prompt(
        "Ingresa el Sector de tu consulta:\nRadiologia = 0\nTraumatologia = 1\nDental = 2"
      )
    );
    if (consultaSector < 0 || consultaSector > 2) {
      alert("Informacion erronea, intentalo nuevamente.");
    } else if (isNaN(consultaSector)) {
      alert("Datos alfabeticos no aceptados, ingresa valores numericos.");
    } else {
      alert("Datos correctos");
      return consultaSector;
    }
  }
}

// crea elementos para mostrar informacion posteriormente
function creator() {
  let body = document.body;
  let div = document.createElement("div");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  let p5 = document.createElement("p");
  let p6 = document.createElement("p");

  // agrega los elementos con su id al DOM
  body.append(p1);
  p1.id = "parr1";
  body.append(p2);
  p2.id = "parr2";
  body.append(p3);
  p3.id = "parr3";
  body.append(p4);
  p4.id = "parr4";
  body.append(p5);
  p5.id = "parr5";
  body.append(p6);
  p6.id = "parr6";
}

// tratamiento de datos
function procesoDatos(sector) {
  creator();
  let parraf1 = document.getElementById("parr1");
  let parraf2 = document.getElementById("parr2");
  let parraf3 = document.getElementById("parr3");
  let parraf4 = document.getElementById("parr4");
  let parraf5 = document.getElementById("parr5");
  let parraf6 = document.getElementById("parr6");

  if (sector == 0) {
    parraf1.innerText = `Sector: ${sectores[0]}\n\nPrimera atencion:\nHora: ${consultasMedicas[0].hora[0]}\nEspecialista: ${consultasMedicas[0].especialista[0]}\nPaciente: ${consultasMedicas[0].paciente[0]}\nRut: ${consultasMedicas[0].rut[0]}\nPrevision: ${consultasMedicas[0].prevision[0]}`;

    parraf2.innerText = `Ultima Atencion\n Hora: ${consultasMedicas[0].hora[4]}\nEspecialista: ${consultasMedicas[0].especialista[4]}\nPaciente: ${consultasMedicas[0].paciente[4]}\nRut: ${consultasMedicas[0].rut[4]}\nPrevision: ${consultasMedicas[0].prevision[4]}`;
  } else if (sector == 1) {
    parraf1.innerText = `Sector: ${sectores[1]}\n\nPrimera atencion:\nHora: ${consultasMedicas[1].hora[0]}\nEspecialista: ${consultasMedicas[1].especialista[0]}\nPaciente: ${consultasMedicas[1].paciente[0]}\nRut: ${consultasMedicas[1].rut[0]}\nPrevision: ${consultasMedicas[1].prevision[0]}`;

    parraf2.innerText = `Ultima Atencion\n Hora: ${consultasMedicas[1].hora[6]}\nEspecialista: ${consultasMedicas[1].especialista[6]}\nPaciente: ${consultasMedicas[1].paciente[6]}\nRut: ${consultasMedicas[1].rut[6]}\nPrevision: ${consultasMedicas[1].prevision[6]}`;
  } else if (sector == 2) {
    parraf1.innerText = `Sector: ${sectores[2]}\n\nPrimera atencion:\nHora: ${consultasMedicas[2].hora[0]}\nEspecialista: ${consultasMedicas[2].especialista[0]}\nPaciente: ${consultasMedicas[2].paciente[0]}\nRut: ${consultasMedicas[2].rut[0]}\nPrevision: ${consultasMedicas[2].prevision[0]}`;

    parraf2.innerText = `Ultima Atencion\n Hora: ${consultasMedicas[2].hora[5]}\nEspecialista: ${consultasMedicas[2].especialista[5]}\nPaciente: ${consultasMedicas[2].paciente[5]}\nRut: ${consultasMedicas[2].rut[5]}\nPrevision: ${consultasMedicas[2].prevision[5]}`;
  }
}

// programa
let sector = consultaSector();
procesoDatos(sector);
