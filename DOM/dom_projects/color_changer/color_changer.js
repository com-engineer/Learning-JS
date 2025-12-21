const btn=document.querySelectorAll('.button');
const bdy=document.querySelector('body');

btn.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    switch(e.target.id){
      case "white":
        bdy.style.backgroundColor=e.target.id;
        break;
        // body.style.backgroundColor='white'
        case "grey":
        bdy.style.backgroundColor=e.target.id;
        break;
        case "blue":
        bdy.style.backgroundColor=e.target.id;
        break;
        case "yellow":
        bdy.style.backgroundColor=e.target.id;
        break;
        case "purple":
        bdy.style.backgroundColor=e.target.id;
        break;

    }

  })
})