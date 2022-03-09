var activeBar = document.querySelectorAll('a');
var currentLocation = location.href;

for(var i = 0; i < activeBar.length; i++){
    if(activeBar[i].href === currentLocation){
        activeBar[i].className = 'active';
    }
}