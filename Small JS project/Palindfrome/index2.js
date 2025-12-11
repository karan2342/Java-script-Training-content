const inputs = document.getElementById('input-box');

const reverseString =  (str) =>{
   return str.split("").reverse().join("");
}

const check = () =>{
  const valu = inputs.value;
  const reverse = reverseString(valu)
 
  if(valu  === reverse){
    alert("It is palindrome")
  }
  else{
    alert("It is not palindrome")
  }
  inputs.value = "";
}