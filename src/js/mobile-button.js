(() => {
const btnMobileRef = document.querySelector("[data-button]")
const mobileMenuRef= document.querySelector("[data-mobile-menu]")

btnMobileRef.addEventListener("click",() => {
 const expanded = btnMobileRef.getAttribute("aria-expended") 
console.log(btnMobileRef)
 btnMobileRef.classList.toggle("is-open")
btnMobileRef.setAttribute("aria-expanded", !expanded)

mobileMenuRef.classList.toggle("is-open")

} )

})()