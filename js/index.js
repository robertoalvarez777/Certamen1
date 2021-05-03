
tinymce.init({
    selector: '#detalle-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

  const reos = [];
  const cargarTabla = ()=>{
  
    let tbody = document.querySelector("#tbody-tabla");
    tbody.innerHTML = "";
    for(let i=0; i< reos.length; ++i){
      let r = reos[i];
      //3. Por cada pokemon generar una fila de la tabla (tr)
      let tr = document.createElement("tr");
      //4. Por cada atributo generar un td de la tabla
      let tdNombre = document.createElement("td");
      let tdDetalle = document.createElement("td");
      let tdCiudad = document.createElement("td");
      let tdGravedad = document.createElement("td");

      //Definir lo que va en la tabla
      tdNombre.innerText = r.nombre;
      //To Do: El tipo tiene que ser un icono
      let gravedad = document.createElement("i");
      if(r.gravedad <= "3"){
        //Tipo planta <i class="fas fa-leaf"></i>
        gravedad.classList.add("fas","fa-leaf","text-success","fa-3x")
      }else if(r.ciudad >="4"){
        //Tipo agua <i class="fas fa-tint"></i>
        gravedad.classList.add("fas","fa-tint","text-primary","fa-3x")
      }else if(r.ciudad >="7"){
        //Tipo fuego <i class="fas fa-fire"></i>
        gravedad.classList.add("fas","fa-fire","text-danger","fa-3x")
      }else if(r.ciudad >="15"){
        //Tipo electrico <i class="fas fa-bolt"></i>
        gravedad.classList.add("fas","fa-bolt","text-warning","fa-3x")
      }
      tdGravedad.classList.add("text-center");
      tdGravedad.appendChild(gravedad); 
      //Para agregar un elemente dentro de otro se usa appendChild
      //Cuando quiero definir txto se usa innerText

      tdDetalle.innerHTML = r.detalle;
      //5. Agregar los td al tr
      tr.appendChild(tdNombre);
      tr.appendChild(tdDetalle);
      tr.appendChild(tdCiudad);
      tr.appendChild(tdGravedad);
      //6. Agregar el tr a la tabla
      tbody.appendChild(tr);
    }

  };

  document.querySelector("#registrar-btn").addEventListener("click", ()=>{
      let nombre = document.querySelector("#nombre-txt").value;
      let ciudad = document.querySelector("#ciudad-select").value;
      //let detalle = tinymce.get("#detalle-txt").getContent;
      //let gravedad = tinymce.get("gravedad-txt").getContent();
      
      //Crea un objeto
      let reo = {};
      //Crea un atributo
      reo.nombre = nombre;
      //reo.detalle = detalle;
      reo.ciudad = ciudad;
      //reo.gravedad = gravedad;

      reos.push(reo)
      cargarTabla();
      Swal.fire("Registro de Criminal Exitoso!", "Criminal ha sido ingresado", "info")


  });