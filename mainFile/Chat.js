const span = document.querySelector('.hover')
const faqs = document.querySelectorAll('.faq')
const fixed = document.getElementById('fixed')
const button1 = document.getElementById('talkToSalesBtn')
const popupRemove = document.getElementById('popup-remove')
const salesbtn = document.getElementById('supportBtn')
const submitBtn = document.getElementById('submitBtn')
const code = document.getElementById('code')
const captchaText = document.getElementById('captchaText')

const guideToggle = () => {
const togglers = document.querySelector('.togglers')
const subMenu = document.querySelector('.sub-menu')
togglers.addEventListener('click' , () => {
  subMenu.classList.toggle('visible')
})
}

const captchavalue = () => {
  let alphaNums = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
let arr = []

for(let a = 1; a <= 4; a++){
  arr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)])
}
captchaText.innerHTML = arr.join("")
}
code.addEventListener("click", captchavalue)

const formValidation = () => {
    let user = document.getElementById('name').value
    let number = document.getElementById('number').value
    let email = document.getElementById('email').value
    
    if(user === ""){
     let name =  document.getElementById('nameError')
     name.innerHTML = "** please fill the username field"
     return false
    } 
    
  if((user.length <= 2 ) || (user.length > 20)){
      let name =  document.getElementById('nameError')
     name.innerHTML = "** please fill the user 2 and 20 length"
  
  
     return false
    }
    if(!isNaN(user)){
      let name =  document.getElementById('nameError')
     name.innerHTML = "** only charector are allowed"

     return false
   
    }
     if(number === ""){
      let name =  document.getElementById('numberError')
      name.innerHTML = "** please fill the username field"
      name.style.color = "pink"
      name.style.fontSize = "12px"
      return false
     }
     if(isNaN(number)){
      let name =  document.getElementById('numberError')
      name.innerHTML = "** user number pick up"
      name.style.fontSize = "12px"
      return false
     }
     if(number.length != 10){
      let name =  document.getElementById('numberError')
      name.innerHTML = "** mobile number 10 only"
      return false
     }
     if(email === ""){
      let name =  document.getElementById('emailError')
      console.log(name)
      name.innerHTML = "** please fill the username field"
      return false
     }
     if(email.indexOf('@') <= 0){
      let name =  document.getElementById('emailError')
      name.innerHTML = "** @Invalid position"
  
      return false
     }
     if((email.charAt(email.length-4)!= '.') && (email.charAt(email.length-3) != '. ')){
      let name =  document.getElementById('emailError')
      name.innerHTML = "** .Invalid position"
      return false
     }
     if((email.charAt(0) !== "9") && (email.charAt(0) !== "8") && (email.charAt(0) !== "7") && (email.charAt(0) !== "6")){
      let name = document.getElementById('numberError')
      name.innerHTML = "** pls fill the start 9,8,7 and 6"
      return false

     }
}
submitBtn.addEventListener("click", formValidation)
document.addEventListener("DOMContentLoaded", function() {
  const tabLinks = document.querySelectorAll('.nav-link.nav-link-big');
  tabLinks.forEach(tabLink => {
    tabLink.addEventListener('click', function(event) {
      event.preventDefault();
      tabLinks.forEach(link => {
        link.classList.remove('active');
      });

       this.classList.add('active');
      const tabId = this.getAttribute('href');
      const tabContent = document.querySelector(tabId);
      document.querySelectorAll('.tab-content > div').forEach(tab => {
        tab.classList.remove('active');
        console.log(tab)
      });

       tabContent.classList.add('active');
    });
  });
});


function clickBtn(){
salesbtn.addEventListener('click' , () => {
const whatsAppBtnContainer = document.querySelectorAll('.positionval')
whatsAppBtnContainer.forEach(item => {
  item.style.display === "block" ? item.style.display = "none" : item.style.display = "block"

})
})
}
clickBtn()
function showModal(){
button1.addEventListener('click', () => {
  if(fixed){
    fixed.classList.add('modalActive')
  }
})
popupRemove.addEventListener('click', () => {
  if(fixed){
    fixed.classList.remove('modalActive')
  }
})
}
showModal()

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.faq',{ origin: 'right' });


// window.addEventListener("scroll" , () =>{
//     document.querySelector(".header").classList.toggle
//     ("window-scroll", window.scrollY > 0)
    
// })

faqs.forEach(faq=>{
    faq.addEventListener("click",() => {
        faq.classList.toggle('open')
        const icon = faq.querySelector(".faq_icon i");
        if(icon.className === 'fa fa-plus'){
            icon.className = 'fa fa-minus'
        }else{
            icon.className = 'fa fa-plus'
        }
    })
})

fetch("header.html")
  .then((response) => {
     if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((content) => {
     document.querySelector(".header-container").innerHTML = content;
     const position = document.querySelector(".position")
     const searchval = document.getElementById("toggle")
     searchval.addEventListener("click", () => {
        if(position){
            position.classList.toggle('active')
        }
        searchval.classList.toggle("fa-remove")
     })
 })
  .catch((error) => {
    console.error("Error fetching header:", error);
     document.querySelector(".header-container").innerHTML =
      "Error loading header";
  });

fetch("footer.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((content) => {
    document.querySelector(".footer-container").innerHTML = content;

  })




// const change = document.getElementById("pricing_input");
// change?.addEventListener("click", (e) => {
//   var i = e.target.checked;
//   if (i == true) {
//     getPricingDataFromLocalStorage(365);
//   } else {
//     getPricingDataFromLocalStorage(31);
//   }
// });
// const mainPricingContainerv = document.getElementById('mainPricingContainer')
// const pricinginner = document.querySelector('.pricing-inner')
// async function pricingCard(){
// pricinginner.innerHTML = '<p>Loading...</p>'
// const res = await fetch('https://chatsense.in/MyApp/All_plan')
// const showval = await res.json()
// return showData(showval)
// }
// pricingCard()
// function showData(){
//  mainPricingContainerv.innerHTML = `<h1>lorem saspskc </h1>`
// }
// pricingCard()


var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    slidesPerView: 2,
    centeredSlides:true,
    autoplay:{
        delay:1500,
        disableOnInteraction:false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
     
     loop:true,
     breakpoints: {
        0: {
            slidesPerView:1,
        },
        640:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
     },
  });


 