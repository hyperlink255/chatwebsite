const span = document.querySelector('.hover')
const position = document.querySelector(".position")
const searchval = document.getElementById("toggle")
const faqs = document.querySelectorAll('.faq')
const fixed = document.getElementById('fixed')
const button1 = document.getElementById('talkToSalesBtn')
const popupRemove = document.getElementById('popup-remove')
const salesbtn = document.getElementById('supportBtn')
const code = document.getElementById('code')
const captchaData = document.getElementById('captchaText')
const submitBtn = document.getElementById('submitBtn')
const captchaValue = document.getElementById('captcha')
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

// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });
// ScrollReveal().reveal('.home-content', { origin: 'top' });
// ScrollReveal().reveal('.home-img', { origin: 'bottom' });
// ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
// ScrollReveal().reveal('.faq',{ origin: 'right' });
// ScrollReveal().reveal('.card-bar',{ origin: 'bottom' });




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
      position.classList.toggle('active')
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

function captchaText(){
let emptyArr = []
for(let a = 1; a <= 4; a++){
  emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)])
}
captchaData.innerHTML = emptyArr.join('')
 return emptyArr
}

formValidation(alphaNums)
 function formValidation(val){
  console.log(val)
 document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
      event.preventDefault();
      let arr = []
      for(let a = 1; a <= 4; a++){
      arr.push(val[Math.floor(Math.random() * val.length)])
      }
      if(captchaValue.value !== captchaData.innerHTML){
        document.getElementById("captchal").innerHTML = "Invalid captcha"
      }
      captchaValue.value = "";
      document.getElementById('name').value = ""
      document.getElementById("number").value = ""
      document.getElementById('email').value = ""

      captchaData.innerHTML = arr.join("")
      submitBtn.innerHTML = "please wait...."
      var formData = new FormData(form);
      fetch("http://127.0.0.1:5500/index.html", {
          method: "GET",
          headers: formData
      })
          .then(response => response.text())
          .then(result => {
              if (result === "Success") {
                  showNotification("Message sent successfully", "success");
              } else {
                  showNotification("Message sent successfully", "success");
              }
          })
          .catch(error => {
              console.error("Error:", error);
              showNotification("Message sent successfully", "success");
          });
  });
  function showNotification(message, type) {
      toastr.options = {
          closeButton: false,
          progressBar: true,
          positionClass: "toast-bottom-right",
          showDuration: 300,
          hideDuration: 1000,
          timeOut: 5000,
          extendedTimeOut: 1000,
      };
      toastr.clear(); 
      if (type === "success") {
          toastr.success(message, "", { className: "toast-success" });
      } else {
          toastr.success(message, "", { className: "toast-success" });
      }
  }
});

 }
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



code.addEventListener('click', captchaText)
const parallax = document.querySelector(".hero-section");
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});


function toggleTheme() {
const themeToggle = document.querySelector(".theme-toggle")
console.log('vikram')
document.body.classList.toggle('dark-theme-variables');
themeToggle.querySelector('i:nth-child(1)').classList.toggle('active')
themeToggle.querySelector('i:nth-child(2)').classList.toggle('active')
}

