

var getData =function(){
    var name = document.getElementById("nombre").value;
    var lastname = document.getElementById("apellido").value;
    var tipo_documento = document.querySelector('#formulario1 [name=documento]:checked').value;
    var num_doc = document.getElementById("num_doc").value;
    var email = document.getElementById("email").value;
    var observation = document.getElementById("observacion").value;
    console.log("Nombre completo: "+name+" "+lastname);
    console.log("Tipo de documento: "+tipo_documento+" Número: " +num_doc);
    console.log("Email: "+email);
    console.log("Obervaciones: "+observation);

     /*  function validarRadio(){
        var valid = 1;
        for (var i=0;i<document.formulario.documento.length;i++)
        {
            if (document.formulario.documento[i].checked){
                if (i=0){
                    var tipo_documento = "C_C";
                }
                if (i=1){
                    var tipo_documento = "T.I";
                }
                if (i=2){
                    var tipo_documento = "Pasaporte";
                }
                if (i=3){
                    var tipo_documento = "PEP";
                }
            }
            
        }
    }*/
    
}
