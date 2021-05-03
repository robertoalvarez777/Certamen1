
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
      let tr = document.createElement("tr");

      let tdNombre = document.createElement("td");
      let tdGravedad = document.createElement("td");
      let tdCiudad = document.createElement("td");
      let tdDetalle = document.createElement("td");

      //Debe de haber una forma mas eficaz de hacer esto pero esto fue lo unico que me funciono
      let ccrimen = document.createElement("i");
      if(r.ccrimen == "1" || r.ccrimen == "2"|| r.ccrimen == "3"){
        ccrimen.classList.add("fas","fa-exclamation","text-success","fa-3x")//Gravedad Leve
      }else if(r.ccrimen == "4" || r.ccrimen == "5" || r.ccrimen == "6"){
        ccrimen.classList.add("fas","fa-exclamation-circle","text-primary","fa-3x")//Gravedad Grave
      }else if(r.ccrimen == "7"|| r.ccrimen == "8"|| r.ccrimen == "9"|| r.ccrimen == "10"|| r.ccrimen == "11"|| r.ccrimen == "12"|| r.ccrimen == "13"|| r.ccrimen == "14"){
        ccrimen.classList.add("fas","fa-exclamation-triangle","text-warning","fa-3x")//Gravedad Peligroso
      }else if(r.ccrimen >="15"){
        ccrimen.classList.add("fas","fa-skull-crossbones","text-danger","fa-3x")//Gravedad Enemigo Social
      }
      tdGravedad.classList.add("text-center");
      tdGravedad.appendChild(ccrimen); 

      tdNombre.innerText = r.nombre + " "+ r.apellido;
      tdCiudad.innerText = r.ciudad;
      tdDetalle.innerHTML = r.detalle;

      tr.appendChild(tdNombre);
      tr.appendChild(tdGravedad);
      tr.appendChild(tdDetalle);
      tr.appendChild(tdCiudad);

      tbody.appendChild(tr);
    }

  };

  document.querySelector("#registrar-btn").addEventListener("click", ()=>{
      let nombre = document.querySelector("#nombre-txt").value;
      let apellido = document.querySelector("#apellido-txt").value;
      let ccrimen = document.querySelector("#cantcrimen-txt").value;
      let ciudad = document.querySelector("#ciudad-txt").value;
      let detalle = tinymce.get("detalle-txt").getContent();
      
   
      let reo = {};
      
      reo.nombre = nombre;
      reo.apellido = apellido;
      reo.ccrimen = ccrimen;
      reo.detalle = detalle;
      reo.ciudad = ciudad;

      reos.push(reo)
      cargarTabla();
      Swal.fire("Registro de Criminal Exitoso!", "Criminal ha sido ingresado", "info")


  });