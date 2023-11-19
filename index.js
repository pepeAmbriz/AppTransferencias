import {
  Datos,
  Metodo,
  Transferencia,
  Cantidad,
  TransCompletada,
} from "./Procesos.js";
const btnCambios = document.getElementById("btnCambios");
const ProcesosData = document.getElementById("Data");
const Principal = document.getElementById("Principal");
const btnTransferir = document.getElementById("btnTransferir");
ProcesosData.innerHTML = Cantidad();

let transf = {
  Cantidad: "",
  Receptor: "",
  Correo: "",
  metodoPago: "",
};
const funciones = [Cantidad(), Datos(), Metodo(), Transferencia(transf)];
const ids = ["spCantidad", "spDatos", "spMetodo", "spTransferencia"];
let btnsig = 0;
const btnSiguiente = document.getElementById("btnSiguiente");
btnSiguiente.addEventListener("click", (e) => {
  const position = parseInt(e.target.getAttribute("position"));
  console.log(position);
  position == 0 ? ProcesoCantidad(e.target) : "";
  position == 1 ? ProcesoDato(e.target) : "";
  position == 2 ? Metodo() : "";
  if (position == 3) {
    ProcesosData.innerHTML = Transferencia(transf);
    btnTransferir.classList.remove("btnNoActive");
    btnSiguiente.classList.add("btnNoActive");
    CambioProceso("add", 3);
    
    setTimeout(() => {
      btnTransferir.removeAttribute("disabled", "");
    }, 2000);
    return;
  }
});

//Linea Procesos
document.getElementById("LineaProcesos").addEventListener("click", (e) => {
  let ListaProcesos = [
    "PasoCantidad",
    "PasoDatos",
    "PasoMetodo",
    "PasoTransferencia",
    "spCantidad",
    "spDatos",
    "spMetodo",
    "spTransferencia",
  ];
  const btnPosition = btnSiguiente.getAttribute("position");
  const position = parseInt(e.target.getAttribute("position"));
  //console.log(btnPosition, position);
  if (position > btnPosition || position == btnPosition) {
    return;
  }
  if (ListaProcesos.includes(e.target.id)) {
    document.getElementById("Data").innerHTML = funciones[position];
    btnsig = position;
    btnTransferir.classList.add("btnNoActive");
    btnSiguiente.classList.remove("btnNoActive");
    btnSiguiente.setAttribute("position", position);
    CambioProceso("remove", btnsig);
  }
});

Data.addEventListener("click", (e) => {
  const procesos = e.target.id;
  if (procesos == "Tarjeta" || procesos == "Cuenta") {
    ProcesoMetodo(e.target);
  }
});

function ProcesoCantidad(btn) {
  const inpCantidad = document.getElementById("inpCantidad");
  const lblError = document.getElementById("lblError");
  if (inpCantidad.value.length == 0) {
    inpCantidad.classList.add("inputError");
    lblError.classList.replace("lblError", "lblErrorActive");
    setTimeout(() => {
      lblError.classList.replace("lblErrorActive", "lblError");
      inpCantidad.classList.remove("inputError");
    }, 3000);
    return;
  }
  transf.Cantidad = inpCantidad.value;
  ProcesosData.innerHTML = funciones[1];
  btn.setAttribute("position", 1);
  CambioProceso("add", 1);
}

function ProcesoDato(btn) {
  const Correo = document.getElementById("Correo");
  const lblErrorN = document.getElementById("lblErrorN");
  const lblErrorC = document.getElementById("lblErrorC");
  if (Nombre.value.length == 0 || Correo.value.length == 0) {
    Nombre.classList.add("inputError");
    Correo.classList.add("inputError");
    lblErrorN.classList.replace("lblError", "lblErrorActive");
    lblErrorC.classList.replace("lblError", "lblErrorActive");
    setTimeout(() => {
      Nombre.classList.remove("inputError");
      Correo.classList.remove("inputError");
      lblErrorN.classList.replace("lblErrorActive", "lblError");
      lblErrorC.classList.replace("lblErrorActive", "lblError");
    }, 3000);
    return;
  }
  transf.Receptor = Nombre.value;
  transf.Correo = Correo.value;
  ProcesosData.innerHTML = funciones[2];
  btn.setAttribute("position", 2);
  CambioProceso("add", 2);
}

function ProcesoMetodo(element) {
  let metodos = ["Tarjeta", "Cuenta"];
  metodos.map((m) => {
    if (m != element.id) {
      document.getElementById(`sp${m}`).classList.remove("radioActive");
      return;
    }
    document.getElementById(`sp${m}`).classList.add("radioActive");
    transf.metodoPago = element.childNodes[2].nodeValue;
  });
  // ProcesosData.innerHTML = funciones[3];
  btnSiguiente.setAttribute("position", 3);
  btnTransferir.setAttribute("disabled","")
}

function CambioProceso(name, posicion) {
  if (name == "add") {
    document.getElementById(ids[posicion]).classList.remove("circularNoActive");
    document.getElementById(ids[posicion - 1]).classList.remove("circular");
    document.getElementById(ids[posicion - 1]).classList.add("checklist");
    document.getElementById(ids[posicion - 1]).innerHTML = "✓";
    return;
  }
  document.getElementById(ids[posicion + 1]).classList.add("circularNoActive");
  document.getElementById(ids[posicion]).classList.remove("checklist");
  document.getElementById(ids[posicion]).innerHTML = "";
  document.getElementById(ids[posicion]).classList.add("circular");
}
document.getElementById("btnCambios").addEventListener("click", (e) => {
  if (e.target.id == "btnTransferir") {
    Principal.innerHTML = TransCompletada();
  }
});
