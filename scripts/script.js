// global variable for the project


// YOUR NAME HERE
//   Oussama Elwazani
// YOUR CODE BELOW






$(document).ready(function(){   
		
    function makeDiv() { //random position
        var divsize = 100;

        var width = $('#terrain').width();
        var height = $('#terrain').height();

        var posx = (Math.random() * (width - divsize)).toFixed();
        var posy = (Math.random() * (height - divsize)).toFixed();

        $newdiv = $("<div class='target'></div>").css({
        'left': posx + 'px',
        'top': posy + 'px'
        });
        return $newdiv

    };

    //timer

    var intervalID ;
    var minutes = $('#minutes');
    var seconds = $('#seconds');
    var milliseconds = $('#tenth');
    var minute = 0;
    var second = 0;
    var millisecond = 0;
    var time = 100;

    function timer(){ 

        intervalID = setInterval(function(){
            millisecond += 1;
            milliseconds.text(millisecond);
            if(millisecond == 10){
                millisecond = 0
                second += 1
            }
            if (second == 60){
                second = 0;
                minute += 1;
            }
            seconds.text(second);
            minutes.text(minute);
            
        },time)
    }

    // rest everthing:
    function reset() {
        minute = 0;
        second = 0;
        millisecond = 0;
        milliseconds.text('00');
        seconds.text('00');
        minutes.text('00');

        $(".target").css('opacity', '0');
    }
    
    

    
    $("#button").click(function() { 
        
        reset();

        var nbtargets = $('#nbtargets').val();

        if (nbtargets >= 1 && nbtargets <= 100){

            var remaining = $('#remaining')
            remaining.text(nbtargets);

            for(nbtargets ; nbtargets > 0; nbtargets--){
                makeDiv().appendTo("#terrain");
            }
            
            timer();
        }


        
        // dissapper
        $(".target").on('click',function (){

            $(this).hide("slow", function(){ $(this).remove(); });

            var value = remaining.text();
            var rem = parseInt(value) - 1;
            $('#remaining').text(rem);

            if (rem <= 0){
                clearInterval(intervalID);
                alert('congrts')
            }
        }); 


    })

    $("#create").click(function() { 
        makeDiv().appendTo("#terrain");

        $(".target").on('click',function (){
            $(this).hide("slow", function(){ $(this).remove();});

            var rem =  - 1;
            $('#remaining').text(rem);
        });
    });
    
});