$(document).ready(function () {
    $(`[data-floor=02]`).toggleClass('current-floor');
    const counterUp = $('.counter-up');
    const counterDown = $('.counter-down');
    const allFloorCount = $('.home-image path').length + 1;

    function ModifNum (num){
        if(num<10){
            floor = `0${floor}`;
        }else{
            floor = `${floor}`; 
        }
        return floor;
    }

    let floor = 2;
    $('.home-image path').on('mouseover',function(){
        $('.home-image path').removeClass('current-floor');
        floor = $(this).data('floor');
        $('.counter').text(floor);
    });

    counterUp.on('click',function(){
        if(floor == allFloorCount){return;}
            floor++;
            
            $('.counter').text(ModifNum(floor));
            
            $('.home-image path').removeClass('current-floor');
            $(`[data-floor=${floor}]`).toggleClass('current-floor');
    });

    counterDown.on('click',function(){
        if(floor == 2){return;}
        floor--;
        $('.counter').text(ModifNum(floor));
        $('.home-image path').removeClass('current-floor');
            $(`[data-floor=${floor}]`).toggleClass('current-floor');
        
    });
});