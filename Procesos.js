const Cantidad = () => {
  return `
    <section class="Cantidad">
        <h3>Ingresa la cantidad a transferir</h3>
        <label for="cantidad"> Cantidad a transferir </label>
        <input type="text" class="iptCantidad" placeholder="Cantidad" id="inpCantidad"  />
        <label for="cantidad" class="lblError" id="lblError"> Campo Vacio</label>
    </section>
  `;
};
const Datos = () => {
  return `
  <section class="Datos" id="Datos">
    <h3>Ingresa los datos del receptor</h3>
    <div class="formDatos">
      <div class="inputLbl">
        <label for="Nombre">Nombre del receptor</label>
        <input type="text" class="inputDatos" placeholder="Nombre" id="Nombre"/>
        <label for="cantidad" class="lblError" id="lblErrorN"> Campo Vacio</label>
      </div>
      <div class="inputLbl">
        <label for="">Correo electronico</label>
        <input type="text" class="inputDatos" placeholder="correo@correo.com" id="Correo"/>
        <label for="cantidad" class="lblError" id="lblErrorC"> Campo Vacio</label>
      </div>
      </div>
  </section>

  `;
};

const Metodo = () => {
  return `
  <section class="Metodo">
        <h3>Selecciona el metodo</h3>
        <div class="btnRadios" id="btnRadios">
          <label for="" class="radio" id="Tarjeta" >
            <span class="check" ><div class="" id="spTarjeta"></div></span> Tarjeta de credito
          </label>
          <label for="" class="radio" id="Cuenta" >
            <span class="check" ><div class="" id="spCuenta"></div></span> Cuenta de cheques
          </label>
        </div>
      </section> 
  
  `;
};
const Transferencia = (transf) => {
  /*  {Cantidad, Receptor, Correo, metodoPago } */
  /*  console.log("canti",transf.Cantidad); */
  return `
  <section class="Transferencia" id="Transferencia">
    <h3>Datos de la transferencia</h3>
    <p>Cantidad: <span>${transf.Cantidad}</span></p>
    <p>Receptor: <span>${transf.Receptor}</span></p>
    <p>Correo del receptor: <span>${transf.Correo}</span></p>
    <p>Metodo de pago: <span>${transf.metodoPago}</span></p>      
  </section>
  
  `;
};



const TransCompletada = () => { 
  return`
  <h1>Transferencia Completada</h1>
  `
 }
/*  <button class="btnSiguiente">
transferir <i class="fa-solid fa-arrow-right"></i>
</button>  */
export { Datos, Metodo, Transferencia, Cantidad,TransCompletada };
