// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const Hearts = document.querySelectorAll(".like-glyph");
let modal = document.querySelector("#modal");

function like(e){
  const heart = e.target;
  mimicServerCall()
  .then(function(serverMessage){
    if(heart.innerText === EMPTY_HEART){
      alert("You successfully liked the post!");
      heart.innerText = FULL_HEART
      heart.classList.add('activated-heart');
    } else{
      alert("You unliked the post!")
      heart.innerText = EMPTY_HEART
      heart.classList.remove('activated-heart')
    }
    })
    .catch( (error) => {
      modal.classList.remove('hidden');
        setTimeout( function(){
          modal.classList.add('hidden');
        },3);
    });
}

for (const click of Hearts) {
  click.addEventListener("click", like);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
