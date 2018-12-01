//define functions here

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();

});

function getIt () {
  //The function should bind a click event to the p tag.
  //When the paragraph is clicked, the function should alert "Hey!".
  $('p').on("click", e => {
    alert("Hey!")
  });
}

function frameIt () {
// The function should bind the load event that adds the class
// tasty to the image to add a red frame to the image.

  const img = window.$('img')

  $(img).on('load', e => {
    $(img).addClass("tasty");
    $(img).css("border", "3px solid red");
  });
}

function pressIt  () {
  // The function should bind a keydown event to the input field
  //of the form that alerts a user when they have pressed the G key.
  $('input').on("keydown", e => {
    var key = e.which;
    console.log("Key pressed: " + key);
    if (key === 71) {
      alert("G pressed");
    }
  })
}


function submitIt () {
//The function should bind a submit event to the form
//that alerts "Your form is going to be submitted now.".
  $('form').submit(function() {
    alert('Your form is going to be submitted now.');
      // DO STUFF...
      return true; // return false to cancel form action
  });
}
