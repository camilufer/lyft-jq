$(document).ready(function(){

var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


  $('#celular').keyup(function(){
    if($(this).val().length ===10){
      $('#next').removeClass('disabled');
    }if($(this).val().length > 10){
      $('#next').addClass('disabled');
    }if($(this).val().length < 10){
      $('#next').addClass('disabled');
    }if (isNaN($(this).val())){
      $('#alert').text('Favor ingresar sólo números');
      $('#next').addClass('disabled');
    }else{
      $('#alert').text('');
    }
    return false;
  });
  /*
  * código aleatoreo
  */
  function code() {
  var code = "";
  var str = "123456789";
  for (var i = 0; i < 3; i++) {
    code += str.charAt(Math.floor(Math.random() * str.length));
  }
  return code;
  };
  
 


}); 