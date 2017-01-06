function Slider(settings) {
    var slider = document.getElementById(settings.sliderId);
    var sliderContent = slider.getElementsByClassName("slider-content")[0];
    var sliderItems = slider.getElementsByClassName("slider-item");
    var sliderWidth = parseFloat(getComputedStyle(sliderContent).width);
    var singleSlideWidth = 0;

    function move(item,i) {
       /* var dataAction = e.target.getAttribute("data-action");
        if(dataAction == "left"){
            sliderItems[i].style.left = (singleSlideWidth * i) - singleSlideWidth + 'px';
        }
        if(dataAction == "right"){
            sliderItems[i].style.left = (singleSlideWidth * i) + singleSlideWidth + 'px';
        }*/
console.log(item.style.left =  (item.style.left - singleSlideWidth) + "px");
    }

    var init = function () {
        if (!settings.slidesToShow || isNaN(+settings.slidesToShow)) {
            settings.slidesToShow = 1;
        }
        singleSlideWidth = sliderWidth / settings.slidesToShow;

        for (var i = 0; i < sliderItems.length; i++) {
            sliderItems[i].style.width = singleSlideWidth + 'px';
            sliderItems[i].style.left = (singleSlideWidth * i) + 'px';
            var buttons = document.getElementsByClassName("slider-button");
            for (var j = 0; j < buttons.length; j++) {
                buttons[j].addEventListener("click", move(sliderItems[i], i));
            }
        }
    };

    var buttons = document.getElementsByClassName("slider-button");
    for (var j = 0; j < buttons.length; j++) {
        buttons[j].addEventListener("click", move);
    }

    init();
}


var mySlider = new Slider({
    sliderId: "slider1",
    slidesToShow: 2,
    infinite: false
});