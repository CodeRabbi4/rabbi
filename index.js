let openmenu = document.getElementById("openmenu");
let menu = document.getElementById("menu");
let closemenu = document.getElementById("closemenu");
let msg = document.getElementById("form-msg");
let navLink = document.getElementsByClassName("nav-link");
let navbar = document.getElementById("navbar")

window.addEventListener("scroll",()=>{
  if(window.scrollY > 300){
      navbar.classList.add("nav-shadow")
  }
  else{
    navbar.classList.remove("nav-shadow")
  }
})

for (const nav of navLink) {
    nav.addEventListener('click', function onClick() {
        menu.style.cssText="right:-200%;"
    });
  }

openmenu.addEventListener("click",()=>{
    menu.style.cssText="right:0; "
});
closemenu.addEventListener("click",()=>{
    menu.style.cssText="right:-200%;"
});



let app = document.getElementById('animateText');

let typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Web Developer')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Web Designer')
    .pauseFor(1000)
    .deleteAll()
    .typeString('<strong>FrontEnd Developer</strong>')
    .pauseFor(1000)
    .start();



  const scriptURL = 'https://script.google.com/macros/s/AKfycbwxYsEQyFD1f_B2iXkjxdyiAt1lmWuO9Yze9iaRv3boyBt5eA3yaD_EhEdsbfULNF0/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})

      .then(response => {
        msg.innerHTML="Message sent successfully";
        setTimeout(()=>{
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
