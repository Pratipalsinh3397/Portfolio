// ------------------------------for navigation sticky effect--------------------------------
window.addEventListener("scroll",function(){
  const header = document.querySelector("header")

  header.classList.toggle("sticky",window.scrollY>0)
})

// --------------------------------for side menu------------------------------------------
const menu = document.getElementById('menu')
const close = document.getElementById('close')

menu.addEventListener('click',function(){
document.querySelector('ul').classList.add('add');

})

close.addEventListener('click',function(){
document.querySelector('ul').classList.remove('add');
})



// ----------------------------for home page text animation-------------------------------------
const typed = new Typed('.multiple-text',{
  strings: ["Frontend Devloper","Web Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true
});

//--------------------------for contact form to google sheet-----------------------------------
// const scriptURL = 'https://script.google.com/macros/s/AKfycbztG1i6JW8MIdTGRDrBLRYH-8snKzTSB7og0oYvJkMPjQDy8WuYOmyiwcTHHuMj7pwi/exec'
// const form = document.forms['submit-to-google-sheet']
// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const message = document.getElementById('message');
// const msg = document.getElementById('confirm-msg')

// form.addEventListener('submit', function(e) {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//         msg.innerHTML="Message sent successfully🎉🎉"
//         setTimeout(function(){
//           msg.innerHTML=""
//         },4000)
//         form.reset();
//     })
//     .catch(error => console.error('Error!', error.message))
// })


const form = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const msg = document.getElementById('confirm-msg')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    Email.send({
      // SecureToken: "267dea42-0f49-42cc-b013-cd402bd8c676",
      Host : "smtp.elasticemail.com",
      Username : "ranapratipalsinh01@gmail.com",
      Password : "74C49233714E6776F63E098A7F8595B30505",
      To : 'pratipalsinhrana02@gmail.com',
      From : email.value,
      Subject : "New Project Enquiry",
      Body : "Name: "+ name.value + "<br> Email: " + email.value + "<br> Message: " +message.value
  }).then(
    message => {
      msg.innerHTML="Message sent successfully🎉🎉"
        setTimeout(function(){
          msg.innerHTML=""
        },4000)
        form.reset();
    }
  );
})

// ----------------------for scroll to top-----------------------------
const scrolltopbtn = document.getElementById('scroll-top');

window.addEventListener('scroll',function(){
scrolltopbtn.classList.toggle("active",this.window.scrollY>500)
})

scrolltopbtn.addEventListener("click",function(){
document.body.scrollTop = 0
document.documentElement.scrollTop = 0
})

// ----------------------for active navigation-------------------------
window.addEventListener("scroll",function(){
const sections = document.querySelectorAll('section')
const scroll_Y = window.scrollY;

sections.forEach(function(current){
  let sectionHeight = current.offsetHeight
  let sectionTop = current.offsetTop - 50
  let id = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
    document.querySelector("nav a[href*=" + id + "]").classList.add("active")
  }
  else{
    document.querySelector("nav a[href*=" + id + "]").classList.remove("active")
  }
})
})




