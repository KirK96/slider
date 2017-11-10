    var wrapper = document.querySelector('.wrapper');
    var koef;
    var width;
    var difference;
    var temp = 0;

   // var box1 = document.getElementById('box1')
    //var statusdiv = document.getElementById('statusdiv')


    var startx = 0
    var dist = 0
  
    wrapper.addEventListener('touchstart', function(event){
        document.querySelector('.slider').style.transition = "0.5s all";
        var touchobj = event.changedTouches[0] // первая точка прикосновения
        startx = parseInt(touchobj.clientX) // положение точки касания по x, относительно левого края браузера
        //statusdiv.innerHTML = 'Status: touchstart ClientX: ' + startx + 'px'
        event.preventDefault();
        
    }, false)
  
    wrapper.addEventListener('touchmove', function(event){
        var touchobj = event.changedTouches[0] // первая точка прикосновения для данного события
        var moveCoords = startx - parseInt(touchobj.clientX);
        difference = -moveCoords + temp; 
        width = wrapper.clientWidth;

        CheckAndTranslate();    

        //statusdiv.innerHTML = 'Событие: touchmove Гориз. перемещение: ' + moveCoords + 'px'
        event.preventDefault()
    }, false)
  
    wrapper.addEventListener('touchend', function(event){
        var touchobj = event.changedTouches[0] // первая точка прикосновения для данного события
        newCoords();
        temp = difference;
        translate();
       // statusdiv.innerHTML = 'Событие: touchend Координаты точки x: ' + touchobj.clientX + 'px'
        event.preventDefault()
    }, false)


    function newCoords() {          
            koef = difference/width;
            difference = Math.round(koef) * width;
    };

    function criterion() {
        if (difference > 0 || difference < -width*9) {
            if (difference > 0) {
                difference = 0;
            }
            if (difference < -width*9) {
                difference = -width*9;
            }
        } 
    };

    function moving() {
        //console.log('temp ' + width);
        temp -= width;
        if (temp < -width*9) {
            temp = 0;
        }
       // console.log('temp ' + temp);
        document.querySelector('.slider').style.transform = 'translateX(' + temp + 'px)';   
    };


    function translate() {
        document.querySelector('.slider').style.transform = 'translateX(' + difference + 'px)';  
    };

    function CheckAndTranslate() {
        criterion();
        translate();
    };