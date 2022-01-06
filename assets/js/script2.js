const consultasMedicas = [
  [
    "radiologia",
    [
      {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA",
      },
      {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE",
      },
      {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE",
      },
      {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA",
      },
      {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA",
      },
    ],
  ],
  [
    "traumatologia",
    [
      {
        hora: "8:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA",
      },
      {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE",
      },
      {
        hora: "10:30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE",
      },
      {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE",
      },
      {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA",
      },
      {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE",
      },
      {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE",
      },
    ],
  ],
  [
    "dental",
    [
      {
        hora: "8:30",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE",
      },
      {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE",
      },
      {
        hora: "11:30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA",
      },
      {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA",
      },
      {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA",
      },
      {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE",
      },
    ],
  ],
];

// Consulta por el sector requerido
function consultaSector() {
  let i = 0;
  while (i == 0) {
    let deptoConsulta = Number(
      prompt(
        "Ingresa el Sector de tu consulta:\nRadiologia = 1\nTraumatologia = 2\nDental = 3"
      )
    );
    if (deptoConsulta < 1 || deptoConsulta > 3) {
      alert("Informacion erronea, intentalo nuevamente.");
    } else if (isNaN(deptoConsulta)) {
      alert("Datos alfabeticos no aceptados, ingresa valores numericos.");
    } else {
      alert("Datos correctos");
      return deptoConsulta;
    }
  }
}
// crea element dentro del DOM
function creator() {
  let body = document.body;
  let div = document.createElement("div");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");

  // agrega los elementos con su id al DOM
  body.append(p1);
  p1.id = "parr1";
  body.append(p2);
  p2.id = "parr2";
}

function procesoDatos(lugar, index = 1) {
  creator();
  let parraf1 = document.getElementById("parr1");
  let parraf2 = document.getElementById("parr2");

  if (lugar == 1) {
    let primerAtencionRadiologia = consultasMedicas[lugar - 1][index].shift();
    let ultimaAtencionRadiologia = consultasMedicas[lugar - 1][index].pop();
    let sector = consultasMedicas[lugar - 1].shift();

    parraf1.innerText = `Sector: ${sector}\nPrimera atencion Medica:\nHora: ${primerAtencionRadiologia.hora}\nEspecialista: ${primerAtencionRadiologia.especialista}\nPaciente: ${primerAtencionRadiologia.paciente}\nRut: ${primerAtencionRadiologia.rut}\nPrevision: ${primerAtencionRadiologia.prevision}`;
    parraf2.innerText = `Ultima atencion Medica:\nHora: ${ultimaAtencionRadiologia.hora}\nEspecialista: ${ultimaAtencionRadiologia.especialista}\nPaciente: ${ultimaAtencionRadiologia.paciente}\nRut: ${ultimaAtencionRadiologia.rut}\nPrevision: ${ultimaAtencionRadiologia.prevision}`;
  } else if (lugar == 2) {
    let primerAtencionRadiologia = consultasMedicas[lugar - 1][index].shift();
    let ultimaAtencionRadiologia = consultasMedicas[lugar - 1][index].pop();
    let sector = consultasMedicas[lugar - 1].shift();

    parraf1.innerText = `Sector: ${sector}\nPrimera atencion Medica:\nHora: ${primerAtencionRadiologia.hora}\nEspecialista: ${primerAtencionRadiologia.especialista}\nPaciente: ${primerAtencionRadiologia.paciente}\nRut: ${primerAtencionRadiologia.rut}\nPrevision: ${primerAtencionRadiologia.prevision}`;
    parraf2.innerText = `Ultima atencion Medica:\nHora: ${ultimaAtencionRadiologia.hora}\nEspecialista: ${ultimaAtencionRadiologia.especialista}\nPaciente: ${ultimaAtencionRadiologia.paciente}\nRut: ${ultimaAtencionRadiologia.rut}\nPrevision: ${ultimaAtencionRadiologia.prevision}`;
  } else if (lugar == 3) {
    let primerAtencionRadiologia = consultasMedicas[lugar - 1][index].shift();
    let ultimaAtencionRadiologia = consultasMedicas[lugar - 1][index].pop();
    let sector = consultasMedicas[lugar - 1].shift();

    parraf1.innerText = `Sector: ${sector}\nPrimera atencion Medica:\nHora: ${primerAtencionRadiologia.hora}\nEspecialista: ${primerAtencionRadiologia.especialista}\nPaciente: ${primerAtencionRadiologia.paciente}\nRut: ${primerAtencionRadiologia.rut}\nPrevision: ${primerAtencionRadiologia.prevision}`;
    parraf2.innerText = `Ultima atencion Medica:\nHora: ${ultimaAtencionRadiologia.hora}\nEspecialista: ${ultimaAtencionRadiologia.especialista}\nPaciente: ${ultimaAtencionRadiologia.paciente}\nRut: ${ultimaAtencionRadiologia.rut}\nPrevision: ${ultimaAtencionRadiologia.prevision}`;
  }
}

// programa
let lugarConsultado = consultaSector();
procesoDatos(lugarConsultado);
