"use strict";
var newaudio= new Audio("img/zeldasong.mp3");
var roswellaudtio = new Audio ("img/roswell.mp3");

var global = {
    konami: function() {
        var konamikeys = [38,38,40,40,37,39,37,39,66,65],
            started = false,
            count = 0;
        $(document).keydown(function(e){
            var reset = function() {
                started = false;
                count = 0;
                // return;
            };
            var key = e.keyCode; //lets you know keys are being pressed
            // Begin watching if first key in sequence was pressed.
            if(!started){
                if(key === 38){
                    started = true;
                }
            }
            // If we've started, pay attention to key presses, looking for right sequence.
            if (started){
                if (konamikeys[count] === key){
                    count++;
                } else {
                    // Incorrect key, restart.
                    reset();
                }
                if (count === 10){
                    // Success!
                    $('#code').css({'color': 'white', 'background': 'darkred'});
                    alert('You now have 30 lives!');
                    reset();
                }
            } else {
                reset();
            }
        });
    }
};
global.konami();
//sims code--------------------------------------------
var global1 = {
    sims: function() {
        var simskeys = [74, 85, 78, 69, 66, 85, 71],
            started = false,
            count = 0;
        $(document).keydown(function(a){
            var reset = function() {
                started = false;
                count = 0;
                // return;
            };
            var key = a.keyCode; //lets you know keys are being pressed
            // Begin watching if first key in sequence was pressed.
            if(!started){
                if(key === 74){
                    started = true;
                }
            }
            // If we've started, pay attention to key presses, looking for right sequence.
            if (started){
                if (simskeys[count] === key){
                    count++;
                } else {
                    // Incorrect key, restart.
                    reset();
                }
                if (count === 7){
                    // Success!
                    // $('#code2').css({'color': 'green'});
                    // $('#code2').css("font-size", "50px");
                    roswellaudtio.play();
                    $("#junegif").css({"display": "inline", "margin-left": "550px" ,"transition": "5s"});
                    reset();
                }
            } else {
                reset();
            }
        });
    }
};
global1.sims();
//----------------doom code --------------------
var global2 = {
    doom: function() {
        var doomkeys = [73,68,68,81,68],
            started = false,
            count = 0;
        $(document).keydown(function(b){
            var reset = function() {
                started = false;
                count = 0;
                // return;
            };
            var key = b.keyCode; //lets you know keys are being pressed
            // Begin watching if first key in sequence was pressed.
            if(!started){
                if(key === 73){
                    started = true;
                }
            }
            // If we've started, pay attention to key presses, looking for right sequence.
            if (started){
                if (doomkeys[count] === key){
                    count++;
                } else {
                    // Incorrect key, restart.
                    reset();
                }
                if (count === 5){
                    // Success!
                    $('#code3').css({'color': 'white', "font-size": "50px", 'text-shadow': '1px 1px 2px black, 0 0 35px yellow, 0 0 10px gold' });
                    setTimeout(function () {
                        $('#code3').css({'color': 'black', 'text-shadow': '1px 1px 2px white, 0 0 35px white, 0 0 10px white'});
                    }, 4000);
                    alert('God mode enabled!');
                    $("#doomgif").css({"display":"inline-block", "margin-left": "100px","transition": "10s"});
                    reset();
                }
            } else {
                reset();
            }
        });
    }
};
global2.doom();


///--- Zelda's Lullaby ---//

var global3 = {
    zelda: function() {
        var zeldakeys = [37,38,39,37,38,39],
            started = false,
            count = 0;
        $(document).keydown(function(b){
            var reset = function() {
                started = false;
                count = 0;
                // return;
            };
            var key = b.keyCode; //lets you know keys are being pressed
            // Begin watching if first key in sequence was pressed.
            if(!started){
                if(key === 37){
                    started = true;
                }
            }
            // If we've started, pay attention to key presses, looking for right sequence.
            if (started){
                if (zeldakeys[count] === key){
                    count++;
                } else {
                    // Incorrect key, restart.
                    reset();
                }
                if (count === 6){
                    // Success!
                    $('#code4').css("color", "lavender");
                    setTimeout(function () {
                        $('#code4').css({"color": "pink"});
                    }, 4000);
                    $("#zeldagif").css("display", "inline");
                    alert("The song I just taught you has some mysterious power..." );
                    newaudio.play(); // try switching this to above the alert and see if it plays then. maybe put a transition on too

                    reset();
                }
            } else {
                reset();
            }
        });
    }
};
global3.zelda();