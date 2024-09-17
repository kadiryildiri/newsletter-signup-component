const emailForm = document.querySelector("#emailForm")
const emailInput = document.querySelector("#emailInput")
const emailError = document.querySelector("#emailError")
const mobileSubs = document.querySelector("#mobileSubs")
const mobileSuccess = document.querySelector("#mobileSuccess")
const dismissBtn = document.querySelector("#dismissBtn")

emailForm.addEventListener("submit", (e) => {
    e.preventDefault()
    checkInput()
})

const checkInput = () => {
    const emailValue = emailInput.value.trim()

    if (emailValue == "") {
        emailError.style.display = "inline-block"
        emailInput.classList.add("border-tomato")
        emailInput.classList.add("bg-tomato/20")
    } else {
        mobileSubs.classList.toggle("hidden")
        mobileSuccess.classList.toggle("hidden")
        mobileSubs.classList.toggle("md:hidden")
        mobileSuccess.classList.toggle("md:hidden")
    }
}

dismissBtn.addEventListener("click", () => {
    mobileSubs.classList.toggle("hidden")
    mobileSuccess.classList.toggle("hidden")
    mobileSubs.classList.toggle("md:hidden")
    mobileSuccess.classList.toggle("md:hidden")
    emailInput.value = ""
    emailError.style.display = "none"
    emailInput.classList.remove("bg-tomato/20")
    emailInput.classList.remove("border-tomato")
})
