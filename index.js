function changeButton() {
    const hamburgerButton = document.getElementById('hamburger-btn');
    if (hamburgerButton.getAttribute('src') === 'assets/hamburger.svg') {
      hamburgerButton.setAttribute('src', 'assets/cancel.svg');
    } else {
      hamburgerButton.setAttribute('src', 'assets/hamburger.svg');
    }
  }
  
  function toggle() {
    const mobileMenu = document.getElementById('mobile-nav-list');
    mobileMenu.classList.toggle('toggle-navbar');
    changeButton();
  }
  
  const navLinks = Array.from(document.getElementsByClassName('mobile-nav-link'));
  navLinks.forEach((element) => element.addEventListener('click', toggle));

  
const emailinput=document.querySelector('#email')
const form=document.querySelector('form')
const msgerror=document.querySelector('.message-error')
form.addEventListener('submit', (event) =>{
  console.log(event)
  event.preventDefault();
  
  if(emailinput.value===((emailinput.value).toLowerCase())){
   console.log(emailinput.value)
   msgerror.classList.remove('active')
  }else{
    msgerror.classList.add('active')
  }
  
})
