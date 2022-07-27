const loginBtn = document.getElementById('login-button');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');

loginBtn.addEventListener('click', ()=> {
    loginEmail.value !== "" && loginPassword.value !== "" ? (
        location.href = "/pages/calendiary.html"
    ) : (Swal.fire({
        title: "Ingrese un email y contraseña",
        icon: "error",
        toast: true,
        position: "top-end",
        timer: "3000"
    }))
})