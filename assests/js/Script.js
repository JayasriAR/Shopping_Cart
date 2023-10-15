//    function checklen(){
//     var textarea=document.getElementById('text_area').value;
//     const maxlen= parseInt(document.getElementById('Maxlimit').value);
//     var currentlen = textarea.value.length;
//      if(currentlen > maxlen){
//       textarea.value=textarea.value.substring(0, maxlen)+'...';
//      }
// }

function validate(event){
  var tit=false;
  var des=false;
  var pri=false;
  var max=false;
  var sym=false;
  var fil=false;
  var prodtitle= document.getElementById('pro_title').value;
  var price_symbol=document.getElementById('price_symbol').value;


  if(price_symbol!='select'){
  localStorage.setItem('price_symbol',price_symbol)
  document.getElementById('price_sym_err').style='display:none;'
  sym=true;
}
  else{
    document.getElementById('price_sym_err').style='display:block;'
    sym=false;
  }

  if(prodtitle){
        if(prodtitle.length<=3){
        document.getElementById('prodtitle_format_error').style="display: block"
        document.getElementById('prodtitle_error').style="display: none"
        tit=false;
  }
else if(prodtitle.length>3){
  document.getElementById('prodtitle_format_error').style="display: none"
  document.getElementById('prodtitle_error').style="display: none"
  localStorage.setItem('prodname',prodtitle)
  tit=true;
}}
  else{
    document.getElementById('prodtitle_format_error').style="display: none"
    document.getElementById('prodtitle_error').style="display: block"
    tit=false;
  }

  var proddes=document.getElementById('text_area').value;
  if(proddes){
    if(proddes.length<=10)
  {
    document.getElementById('description_format_err').style="display: block"
        document.getElementById('description_err').style="display: none"
        des=false;
  }
  else if(proddes.length>=11){
    document.getElementById('description_format_err').style="display:none"
    document.getElementById('description_err').style="display: none"
    localStorage.setItem('proddescription',proddes)
    des=true;

  }
  }
  else{
    document.getElementById('description_format_err').style="display: none"
    document.getElementById('description_err').style="display: block"
    des=false;
  }


const numberPattern = /^[0-9]+$/;
var price=document.getElementById('pro_price').value;

if(price){
  if ((!numberPattern.test(price))||(price==0) ){
    document.getElementById('price_format_err').style="display: block"
          document.getElementById('price_err').style="display: none"
          pri=false;
  }
  else{
    document.getElementById('price_format_err').style="display: none"
          document.getElementById('price_err').style="display: none"
      localStorage.setItem('price',price)
      pri=true;
  
  }
  }
  else{
    document.getElementById('price_format_err').style="display: none"
          document.getElementById('price_err').style="display: block"
          pri=false;
  }
  
  
var maxlimit=document.getElementById('Maxlimit').value;
if(maxlimit){
if (!numberPattern.test(maxlimit)) {
  document.getElementById('maxlimit_format_err').style="display: block"
        document.getElementById('maxlimit_err').style="display: none"
        max=false;
}
else{
  document.getElementById('maxlimit_format_err').style="display: none"
        document.getElementById('maxlimit_err').style="display: none"
    localStorage.setItem('prod_limit',maxlimit)
    max=true;
}
}
else{
  document.getElementById('maxlimit_format_err').style="display: none"
        document.getElementById('maxlimit_err').style="display: block"
        max=false;
}

var inputElement = document.getElementById("input_image");
if (inputElement.files.length > 0) {
  fil=true;
  document.getElementById('validimg_err2').style="display: none"
} else {
  fil=false;
  document.getElementById('validimg_err2').style="display: block"
}

const redirectButton = document.getElementById('redirect');

    redirectButton.addEventListener('click', function () {
            if (tit==true && fil==true && des==true && pri==true && max==true && sym==true) {
                // If the condition is satisfied, redirect to a specific page
                window.location.href = './assests/files/product.html'; // Replace with your desired URL
            }
          
        });

}

function preview_image(event){
  
let extension=event.target.files[0].type.split('/');
var exten=extension[1];
if(exten=='jpg' || exten=='png' ||exten=='jpeg'){
var output = document.getElementById('preview_img');
file_name = event.target.files[0];

var reader= new FileReader();
reader.onload = function() {
  var dataURL = reader.result;
  output.src = dataURL;
  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
    document.getElementById('preview_img').style="display: block"
    localStorage.setItem('select_image', dataURL);
  }
};
reader.readAsDataURL(file_name);
}

else{
    document.getElementById('validimg_err').style="display:block"
}

}

