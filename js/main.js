


function cambiarex(){
    var cambiarestu = document.getElementById("estu");
    var cambiarPort = document.getElementById("port");
    var experiencia = document.getElementById("expe");

    var cambiarestu1 = document.getElementById("estu1");
    var cambiarPort1 = document.getElementById("port1");
    var experiencia1 = document.getElementById("expe1");
    
    experiencia.classList.add('add');
    experiencia.classList.remove('remove');

    cambiarPort.classList.remove('add');
    cambiarPort.classList.add('remove');

     cambiarestu.classList.remove('add');
    cambiarestu.classList.add('remove');
 // !botones

 cambiarPort1.classList.add('remove1');
    cambiarPort1.classList.remove('add1');

    experiencia1.classList.remove('remove1');
    experiencia1.classList.add('add1');

     cambiarestu1.classList.remove('add1');
    cambiarestu1.classList.add('remove1');

    cambiarestu1.classList.remove('estu1');
}

function cambiarestu(){
    var cambiarestu = document.getElementById("estu");
    var cambiarPort = document.getElementById("port");
    var experiencia = document.getElementById("expe");

    var cambiarestu1 = document.getElementById("estu1");
    var cambiarPort1 = document.getElementById("port1");
    var experiencia1 = document.getElementById("expe1");
    
    experiencia.classList.add('remove');
    experiencia.classList.remove('add');

    cambiarPort.classList.remove('add');
    cambiarPort.classList.add('remove');

     cambiarestu.classList.remove('remove');
    cambiarestu.classList.add('add');
 
    // !botones

 cambiarPort1.classList.remove('add1');
 cambiarPort1.classList.add('remove1');

 experiencia1.classList.remove('add1');
 experiencia1.classList.add('remove1');

  cambiarestu1.classList.remove('remove1');
 cambiarestu1.classList.add('add1');

 cambiarestu1.classList.remove('estu1');


}

function cambiarport(){
    var cambiarestu = document.getElementById("estu");
    var cambiarPort = document.getElementById("port");
    var experiencia = document.getElementById("expe");

    var cambiarestu1 = document.getElementById("estu1");
    var cambiarPort1 = document.getElementById("port1");
    var experiencia1 = document.getElementById("expe1");
    
    experiencia.classList.add('remove');
    experiencia.classList.remove('add');

    cambiarPort.classList.remove('remove');
    cambiarPort.classList.add('add');

     cambiarestu.classList.remove('add');
    cambiarestu.classList.add('remove');

    // !botones
    cambiarPort1.classList.add('add1');
    cambiarPort1.classList.remove('remove1');

    experiencia1.classList.remove('add1');
    experiencia1.classList.add('remove1');

     cambiarestu1.classList.remove('add1');
    cambiarestu1.classList.add('remove1');

    cambiarestu1.classList.remove('estu1');

 
}



  window.addEventListener('load', function() {
    const checkbox = document.getElementById('dn');
    const body = document.getElementById('page-body');

    if (checkbox.checked) {
      body.classList.remove('dark-mode');
    } else {
      body.classList.add('dark-mode');
    }
  });

  const checkbox = document.getElementById('dn');
  const body = document.getElementById('page-body');

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'false');
    } else {
      body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'true');
    }
  });

  const isDarkMode = localStorage.getItem('dark-mode') === 'false';
  checkbox.checked = isDarkMode;
  if (isDarkMode) {
    body.classList.remove('dark-mode');
  } else {
    body.classList.add('dark-mode');
  }


const miDiv = document.getElementById('miDiv');

miDiv.addEventListener('click', () => {
  miDiv.classList.toggle('oculto');
});















    //!Funcion que cambia el color de los enlaces a naranja al pasar por encima

    // !document.getElementById("enlace").addEventListener("mouseover", porencima);
    //! document.getElementById("enlace").addEventListener("mouseout", alquitar);
    
    
    
    // !function porencima() {
    
    // !    document.getElementById("enlace").style.color = "orange";
    
    // !}
    
    // !function alquitar() {
    
    // !    document.getElementById("enlace").style.color = "brown";
    
    // !}