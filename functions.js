var myvalue;

function setInputValue(value){
  myvalue = document.getElementById('inputfield');
  if(myvalue.value == 0 && value != 0){
      myvalue.value = value;
  }else{
      myvalue.value += value;
  }
}

function deleteButton(){
  myvalue.value = myvalue.value.slice(0,-1);
}

function reset(){
  myvalue.value = 0;
}

function equal(){
  myvalue.value = eval(myvalue.value);
}



