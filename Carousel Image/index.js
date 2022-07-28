const titles = document.querySelectorAll('.titles a');//getting all the titles
const imgs = document.querySelectorAll('.imgs a');//getting all the image
let curIndex = 0; timer = null;//current banner pointer, timer

//remove the active class
function removeActive(){
    titles.forEach( item => {
        item.classList.remove('active');
    })
    imgs.forEach( item => {
        item.classList.remove('active');
    })
}
//change banner
function changeBanner(index){
    removeActive();
    titles[index].classList.add('active');
    imgs[index].classList.add('active');
}
//auto play the banner
function autoBanner(){
    timer = setInterval(function(){
        curIndex++;
        if(curIndex > titles.length -1 ){
            curIndex = 0;
        }
        changeBanner(curIndex);
    }, 3000)
}
//iterate the title by mouse
titles.forEach((item, index) =>{
    //move along with the mouse
    item.addEventListener('mouseenter', function(){
        curIndex = index;
        changeBanner(index);
        clearInterval(timer);
    })
    //if the mouse leave, set back to the auto
    item.addEventListener('mouseleave', function(){
        autoBanner();
    })
})
//initalization auto play
autoBanner();