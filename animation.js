const boxes = document.querySelectorAll('.animate');
window.addEventListener("scroll",check)
check();
function check(){
    const trigger = window.innerHeight /5*4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop<trigger)
        {
            box.classList.add('slide')
        }
        else{
            box.classList.remove('slide');
        }
    })
}