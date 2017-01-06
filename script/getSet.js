function ChangeWidth(property) {
    var element = document.getElementById(property.id);
    this.getSetWidth = function (value) {
        if(value == undefined){
            return getComputedStyle(element).width;
        }else{
            element.style.width = value;
            console.log(element.style.width);
        }
    }
}

var ford = new ChangeWidth({
    id:"car"
});