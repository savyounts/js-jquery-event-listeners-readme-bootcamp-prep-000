function getIt(){
  $('p').on('click', function(){
    alert ("Hey!")
  })
  }
  
  function frameIt(){
    $('img').on('load', function(){
    img.addClassName('tasty')
  })
}

function pressIt(){
  $('input').on('keydown', function(key){
    if (key.which === 17) {
      alert ("you have pressed G")
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert ("Your for is going to be submitted now.")
  })
}

$(document).ready(function(){

getIt()

frameIt()

pressIt()

submitIt()

});
