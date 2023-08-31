/* CONSULTORIO */

let nombre = prompt("Ingrese su nombre por favor")
alert("Bienvenido/a " + nombre + ". Para ponerlo/a en contexto, usted es un recepcionista en un consultorio médico. Deberá ingresar el nombre y año de nacimiento de los pacientes para poder asignarles un turno y derivarlos al sector que corresponda a medida que van llegando para su pronta atención.")

const cardiologo = "cardiologo";
const oculista = "oculista";
const dentista = "dentista";
let valorConsulta = 2500;


alert("Vale, aquí viene el primero. Recuerda ser cordial.");

for (let pacientes = 1 ; pacientes <= 5; pacientes++){
  let nombrePacientes = prompt("Indiquenos el nombre del paciente que acaba de llegar.");

  let anioNacimiento = parseInt(prompt("Ingrese el año de nacimiento del paciente."));
  let anioActual = 2023;
  let edad = anioActual - anioNacimiento;

  let requerimiento = prompt("Ingrese su especialidad entre cardiologo, dentista y/o oculista:");

  if (edad >= 70){
      alert("El paciente " + nombrePacientes + " ha sido asignado con el número " + pacientes + ". En la sala del " + requerimiento + ". Con PRIORIDAD.");
    }else{
     alert("El paciente " + nombrePacientes + " ha sido asignado con el número " + pacientes + ". En la sala del " + requerimiento + ".");
  }

  alert("El valor de la visita es de $2500, deberás cobrarle al paciente y darle el vuelto que corresponda");
  let dineroPaciente = parseInt(prompt("Indiquenos el monto que trajo el paciente. ATENCIÓN, si el paciente no llega al monto de la sesión. Quedará a cuenta de la próxima consulta. En ese caso coloque el valor de la sesión exacta."));
  function calcularVuelto(valorConsulta, dineroPaciente){
    const vuelto = dineroPaciente - valorConsulta;
    return vuelto;
  }
  const vuelto = calcularVuelto(valorConsulta, dineroPaciente);
  alert("El vuelto que le debes dar al paciente es de $" + vuelto);

  alert("Indiquele a " + nombrePacientes + " cómo llegar a la sala de espera. El doctor le estará esperando.")
}

alert("Parece que hoy ha sido un día largo. Toca descansar, " + nombre + ". Mañana será otro día.");

