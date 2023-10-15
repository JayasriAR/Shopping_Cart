//    function checklen(){
//     var textarea=document.getElementById('text_area').value;
//     const maxlen= parseInt(document.getElementById('Maxlimit').value);
//     var currentlen = textarea.value.length;
//      if(currentlen > maxlen){
//       textarea.value=textarea.value.substring(0, maxlen)+'...';
//      }
// }

function validate(){
  var prodtitle= document.getElementById('pro_title').value;
  var price_symbol=document.getElementById('price_symbol').value;
  if(price_symbol!='select'){
  localStorage.setItem('price_symbol',price_symbol)
  document.getElementById('price_sym_err').style='display:none;'

}
  else{
    document.getElementById('price_sym_err').style='display:block;'
  }

  if(prodtitle){
        if(prodtitle.length<=3){
        document.getElementById('prodtitle_format_error').style="display: block"
        document.getElementById('prodtitle_error').style="display: none"
  }
else if(prodtitle.length>3){
  document.getElementById('prodtitle_format_error').style="display: none"
  document.getElementById('prodtitle_error').style="display: none"
  localStorage.setItem('prodname',prodtitle)
}}
  else{
    document.getElementById('prodtitle_format_error').style="display: none"
    document.getElementById('prodtitle_error').style="display: block"
  }

  var proddes=document.getElementById('text_area').value;
  if(proddes){
    if(proddes.length<=10)
  {
    document.getElementById('description_format_err').style="display: block"
        document.getElementById('description_err').style="display: none"
  }
  else if(proddes.length>=11){
    document.getElementById('description_format_err').style="display:none"
    document.getElementById('description_err').style="display: none"
    localStorage.setItem('proddescription',proddes)

  }
  }
  else{
    document.getElementById('description_format_err').style="display: none"
    document.getElementById('description_err').style="display: block"
  }


const numberPattern = /^[0-9]+$/;
var price=document.getElementById('pro_price').value;

if(price){
  if ((!numberPattern.test(price))||(price==0) ){
    document.getElementById('price_format_err').style="display: block"
          document.getElementById('price_err').style="display: none"
  }
  else{
    document.getElementById('price_format_err').style="display: none"
          document.getElementById('price_err').style="display: none"
      localStorage.setItem('price',price)
  
  }
  }
  else{
    document.getElementById('price_format_err').style="display: none"
          document.getElementById('price_err').style="display: block"
  }
  
  
var maxlimit=document.getElementById('Maxlimit').value;
if(maxlimit){
if (!numberPattern.test(maxlimit)) {
  document.getElementById('maxlimit_format_err').style="display: block"
        document.getElementById('maxlimit_err').style="display: none"
}
else{
  document.getElementById('maxlimit_format_err').style="display: none"
        document.getElementById('maxlimit_err').style="display: none"
    localStorage.setItem('prod_limit',maxlimit)

}
}
else{
  document.getElementById('maxlimit_format_err').style="display: none"
        document.getElementById('maxlimit_err').style="display: block"
}
}



function preview_image(event){
console.log('------event------',event);
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


