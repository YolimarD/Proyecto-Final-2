
    
    //Este el Switch

const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("actives");
})