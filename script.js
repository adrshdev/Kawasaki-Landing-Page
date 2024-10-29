window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.navbar');
    const brandName = document.getElementById('brand-name')
    const scrollPoint = 600;
    if(window.scrollY >= scrollPoint){
        navbar.style.backgroundColor = 'black';
        brandName.style.color = 'green'
    }else{
        navbar.style.backgroundColor = 'transparent';
        brandName.style.color = 'white'
    }
});

function show(){
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('show');
}
