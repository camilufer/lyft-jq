$(document).ready(function(){

var modal = document.getElementById('id01');
// si el usuario clickea fuera del modal, éste se cierra.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


  $('#phone').keyup(function(){
    if($(this).val().length ===10){
      $('#next').removeClass('disabled');
    }if($(this).val().length > 10){
      $('#next').addClass('disabled');
    }if($(this).val().length < 10){
      $('#next').addClass('disabled');
    }if (isNaN($(this).val())){
      $('#alert').text('Ingresa los 10 dígitos de tu celular');
      $('#next').addClass('disabled');
      $()
    }else{
      $('#alert').text('');
    }
    return false;
  });

 $('#phone').keyup(function(){
  if($(this).val().length===10){
    var code = '';
    var num = '123456789';
    for(var i = 0; i < 3; i++){
    code+=num.charAt(Math.floor(Math.random()*num.length));
    }
    alert('Tu código LAB: '+code);
  }
});



}); 