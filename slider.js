
let totalWidth = $('.slider-idol').clientWidth ;

let getListImg = [...$$('.slider-idol__items')]

let slideIndex = 0;

function slider(n) {

    slideIndex += 1;

    var imgLength = $('.slider-idol__items').clientWidth ;
    getListImg.forEach(function(slide, index)
    {
        slide.style.transform = 'translateX('+ -imgLength*slideIndex +'px)'
    })
    
    
    if(imgLength*slideIndex > totalWidth)
    {
        slideIndex  = -1;
    }

}

setInterval(function() {
    slider(1)
}, 4000);

