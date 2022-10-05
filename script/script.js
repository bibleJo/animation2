$(document).ready(function(){
    let car_left_1 = 100;
    let car_left_2 = 500;
    let car_left_3 = 1100;
    setInterval(function(){
        car_left_1 = car_left_1 + 10 //값이 증가하면 left는 오른쪽으로 간다
        //#car_left_1가 넘어가면(1920이상)다시 왼쪽에서 시작
        if(car_left_1 > 2020){car_left_1 = -1200}
        $('#car_left_1').css({'left':car_left_1})
        car_left_2 = car_left_2 +  10
        if(car_left_2 > 2420){car_left_2 = -800}
        $('#car_left_2').css({'left':car_left_2})
        car_left_3 = car_left_3 + 10
        if(car_left_3 > 3020){car_left_3 = -200}
        $('#car_left_3').css({'right':car_left_3})
    },33) //1000분의 1초로 자연스럽게 움직임을 주려면 fps 1초에 30fps정도가 자연스럽다.

    $('#cloud').animate({'top':'120px'},999,function(){
        $('#cloud').animate({'top':'100px'},999)
    })
    setInterval(function(){
        $('#cloud1').animate({'left':'1920px'},4000,function(){
            $('#cloud1').animate({'left':'-200px'},4000)
        })
    },4200)
    setInterval(function(){
        $('#cloud2').animate({'left':'1920px'},4000,function(){
            $('#cloud2').animate({'left':'-600px'},3000)
        })
    },4100)
    setInterval(function(){
        $('#cloud3').animate({'left':'1920px'},3700,function(){
            $('#cloud3').animate({'left':'-400px'},3700)
        })
    },4500)
})