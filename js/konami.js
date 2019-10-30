"use strict";

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
                    $('.code').css({'color': 'white', 'background': 'darkred'});
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
//konami code done--------------------------------------------
var global1 = {
    sims: function() {
        var simskeys = [77, 79, 84, 72, 69, 82, 76, 79, 68, 69],
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
                if(key === 77){
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
                if (count === 10){
                    // Success!
                    $('.code2').css({'color': 'green'});
                    $('.code2').css("font-size", "50px");
                    $('.p1').css('background-image', 'img/drewcarry.gif');
                    setTimeout(function () {
                        $('.code2').css({'color': 'black'});
                    }, 3000);
                    setTimeout(function () {
                        $('.p1').css({'background-image': 'none'});
                    }, 3000);
                    alert("We've won the motherlode!!");
                    reset();
                }
            } else {
                reset();
            }
        });
    }
};
global1.sims();
//----------------mortal combat code --------------------
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
                    $('.code3').css({'color': 'white', 'text-shadow': '1px 1px 2px black, 0 0 35px yellow, 0 0 10px gold' });
                    setTimeout(function () {
                        $('.code3').css({'color': 'black', 'text-shadow': '1px 1px 2px white, 0 0 35px white, 0 0 10px white'});
                    }, 4000);
                    alert('God mode enabled!');
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
                    $('.code4').css("color", "lavender");
                    setTimeout(function () {
                        $('.code4').css({"color": "pink"});
                    }, 4000);
                    alert("The song I just taught you has some mysterious power..." );
                    reset();
                }
            } else {
                reset();
            }
        });
    }
};
global3.zelda();