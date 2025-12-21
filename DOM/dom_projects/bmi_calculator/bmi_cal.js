const form=document.querySelector('form');
// when form is submitted it is in the form "post" or "Get" and its values goes to the url or server and that we need to stop 
//  to stop it we get the method "preventDefault()" in the event itself
form.addEventListener('submit',function(e){
  e.preventDefault();

  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results')
  const describe=document.querySelector('#describe')
  //what if a write this two line outside this event -->it will store empty value 

  if(height === '' ||height<0 || isNaN(height)){
    results.innerHTML=`Please give Valid ${height}`;
  }
  else if(weight === '' ||weight<0 || isNaN(weight)){
    results.innerHTML=`Please give Valid ${weight}`;
  }
  else{
    const bmi=weight/((height*height)/10000).toFixed(2);
    //show the result
    results.innerHTML=`<span>${bmi}</span>`
    if(bmi<=18.6){
      describe.innerHTML="Under Weight your bmi is Less than 18.6"
    }else if(18.6<bmi && bmi <=24.9){
      describe.innerHTML="Normal Weight your bmi is in the ranges 18.6 and 24.9"
      
    }
    else{
      describe.innerHTML="Over Weight your bmi is above 24.9..consult doctor"

    }
  }
})
