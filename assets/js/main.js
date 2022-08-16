/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")


    /*=============== MENU SHOW===============*/
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}
    /*=============== MENU SHOW===============*/

if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}

navLink.forEach(e => e.addEventListener("click", linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("bg-header") : header.classList.remove("bg-header")
}

window.addEventListener("scroll", scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute("id"),
              sectionClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]")

            
         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add("active-link")
         }else{
            sectionClass.classList.remove("active-link")
         }
    })
}

window.addEventListener("scroll", scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = ()=>{

        const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height,add the show-scroll class to theatag with the scrollup
        this.scrollY >= 550 ?  scrollUp.classList.add('show-scroll')  :  scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById("calculate-form"),
      calculateCm = document.getElementById("calculate-cm"),
      calculateKg = document.getElementById("calculate-kg"),
      calculateMessage = document.getElementById("calculate-message")

const calculateIMC = (e) => {
    e.preventDefault()
    //Check if the value is empty 

    if(calculateCm.value === "" || calculateKg.value === ""){
        // Add and remove color
        calculateMessage.classList.remove("color-green")
        calculateMessage.classList.add("color-red")
        // Show message
        calculateMessage.textContent = "Agrega tu peso y estatura 👨‍💻"

        //Remove message in 3 seconds
        setTimeout(() =>{
            calculateMessage.textContent = ""
        }, 3000)
    }else{
        //IMC FORMULA
        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              imc = (kg / (cm * cm)).toFixed(2)

        // SHOW HEALTH STATUS

        if(imc < 18.5){
            calculateMessage.classList.add("color-red")
            calculateMessage.textContent = `Tu IMC es ${imc} y estas muy delgado 😔`
        }

        if(imc > 18.5 && imc < 25){
            calculateMessage.classList.add("color-green")
            calculateMessage.textContent = `Tu IMC es ${imc} y estas saludable 😀`
        }

        if(imc >= 25){
            calculateMessage.classList.add("color-red")
            calculateMessage.textContent = `Tu IMC es ${imc} y estas pasadito de peso 😬`
        }

        calculateCm.value = ""
        calculateKg.value = ""

        setTimeout(() => {
            calculateMessage.textContent = ""
        }, 6000)

        
    }
}

calculateForm.addEventListener("submit", calculateIMC)

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById("contact-form"),
      contactMessage = document.getElementById("contact-message"),
      contactUser = document.getElementById("contact-user")


const sendEmail = (e) => {
    e.preventDefault()

    if(contactUser.value === ""){
        contactMessage.classList.add("color-red")
        contactMessage.textContent = "Deberias agregar tu Email 👆"
    } else{
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm("service_w1590xb", "template_rb7uzpp", "#contact-form", "e5dRGANEU2g9s3WVZ")
        .then(() => {
            contactMessage.classList.add("color-green")
            contactMessage.textContent = "Te has registrado exitosamente ✔✔"

            setTimeout(() => {
                contactMessage.textContent = ""
            }, 4000)
        }, (error) => {
            alert("Oops! algo ha fallado...", error)
        });

    }

    contactUser.value = ""

    setTimeout(() => {
        contactMessage.textContent = ""
    }, 6000)
}

contactForm.addEventListener("submit", sendEmail)