let protitle=localStorage.getItem('prodname'); curr_price
var titlesplit=protitle.split(' ');
  console.log('slpit---',titlesplit)
  var prod_name='';
  for(var i=0;i<titlesplit.length;i++){
     prod_name=prod_name+' '+titlesplit[i].charAt(0).toUpperCase()+titlesplit[i].slice(1).toLowerCase()+' ';
  console.log('i---',i)}
document.getElementById('get_prod_name1').innerHTML=prod_name.trim();
var price_sym=localStorage.getItem('price_symbol');
let proprice=localStorage.getItem('curr_price'); 
document.getElementById('curr_price').innerHTML=price_sym+proprice;
let procount=localStorage.getItem('count'); 
document.getElementById('count').innerHTML=procount;
var prod_des=localStorage.getItem('proddescription');
document.getElementById('full_pro_des').innerHTML=prod_des;
function onLoad1(){
    document.addEventListener('DOMContentLoaded', function() {
        // Retrieve the image data URL from localStorage
        var selectedImageSrc = localStorage.getItem('select_image');
    
        if (selectedImageSrc) {
            // Get the img element by its ID
            var imgElement = document.getElementById('get_img1'); 
            // Set the source of the img element to display the image
            imgElement.src = selectedImageSrc;
        }
    });
}
onLoad1()
function place_order(){
    document.getElementById('Order_Placed').style='display:block;'
    document.getElementById('order_button').style='display:none;'

}

