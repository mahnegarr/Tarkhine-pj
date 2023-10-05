const profileName = document.querySelector(".profile-name");
const profileNumber = document.querySelector(".profile-number")


profileName.innerHTML = localStorage.getItem("profileName")
profileNumber.innerHTML=localStorage.getItem("phoneNumber")

