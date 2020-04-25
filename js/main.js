let obj ={
    nav:document.querySelector('nav'),
    ul:document.querySelector('ul'),
    li:document.querySelectorAll('li'),
    bar:document.getElementById('bar')
}

obj.bar.addEventListener('click',()=>{
    let value = obj.nav.classList.contains('navClass')
    if(value){
        obj.nav.classList.remove('navClass')
    }else{
        obj.nav.classList.add('navClass')
    }
})