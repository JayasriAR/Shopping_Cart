function getlocalstorage(){
    var price=localStorage.getItem('price');
  // document.getElementById('get_price').innerHTML=price;
  document.getElementById('get_price1').innerHTML=1;

var price_symbol=localStorage.getItem('price_symbol');
document.getElementById('get_price_sym').innerHTML=price_symbol+price;

  let protitle=localStorage.getItem('prodname');
  var titlesplit=protitle.split(' ');
  console.log('slpit---',titlesplit)
  var prod_name='';
  for(var i=0;i<titlesplit.length;i++){
     prod_name=prod_name+' '+titlesplit[i].charAt(0).toUpperCase()+titlesplit[i].slice(1).toLowerCase()+' ';
  console.log('i---',i)

  }
  document.getElementById('get_prod_name').innerHTML=prod_name.trim();
  
  document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the image data URL from localStorage
    var selectedImageSrc = localStorage.getItem('select_image');

    if (selectedImageSrc) {
        // Get the img element by its ID
        var imgElement = document.getElementById('get_img'); 
        // Set the source of the img element to display the image
        imgElement.src = selectedImageSrc;
    }
});

  var prod_des=localStorage.getItem('proddescription');
  var max_limit=30;
  
  if(prod_des.length>max_limit){
    prod_des=prod_des.substring(0,max_limit)+'...';
    document.getElementById('get_description').innerHTML=prod_des
  }
  else{
    document.getElementById('get_description').innerHTML=prod_des
  }
 
}
getlocalstorage()

function add(){
  var price_per_item=localStorage.getItem('price')
  var countelement=document.getElementById('get_price1')
  count=parseInt(countelement.textContent)
  var max_pro_lim=parseInt(localStorage.getItem('prod_limit'));
  if(count<max_pro_lim &&count>=0){
  count++;
  countelement.textContent=count;
  var current_price = count*price_per_item;
  localStorage.setItem('curr_price',current_price)
  localStorage.setItem('count',count)

  document.getElementById('max_count_err').style='display:none';
  document.getElementById('min_count_err').style='display:none';


  }
  else{
    document.getElementById('max_count_err').style='display:block';
  document.getElementById('min_count_err').style='display:none';

  }
}

function sub(){
  var price_per_item=localStorage.getItem('price')
  var countelement=document.getElementById('get_price1')
  count=parseInt(countelement.textContent)
  if(count>1){
  count--;
  countelement.textContent=count;
  var current_price = count*price_per_item;
  localStorage.setItem('curr_price',current_price)
  localStorage.setItem('count',count)
  
  document.getElementById('min_count_err').style='display:none';
  document.getElementById('max_count_err').style='display:none';
  }
  else{
  document.getElementById('min_count_err').style='display:block';
  document.getElementById('max_count_err').style='display:none';
  }

  }

