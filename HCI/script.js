let flag = 0;

function controller(x){
    flag = flag +x;
    slideshow(flag);
    console.log(flag);
}

slideshow(flag);
    setInterval(()=>{
        controller(1)
    },1000)


function slideshow(n)
{
    let slides = document.getElementsByClassName('slide');
    console.log(slides.length);
    if(n == slides.length){
        flag =0;
        n=0;
    }
    if(n < 0){
        flag = slides.length-1;
        n = slides.length-1;
    }
    for(let y of slides)
    {
        y.style.display ="none";
    }
    slides[n].style.display = "block";
}
