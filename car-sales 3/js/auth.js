document.addEventListener('DOMContentLoaded',function(){
    const form=document.getElementById('loginForm');
    form.addEventListener('submit',function(e){
        e.preventDefault();
        alert('Login Success!');
        window.location.href='add-car.html';
    });
});