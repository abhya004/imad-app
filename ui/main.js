console.log('Loaded!');
var img= document.getElementById('madi');
marginleft=0;
function moveright()
{
    marginleft= marginleft+10;
    img.style.marginleft= marginleft+ 'px';
}
img.onclick= function() {
   var interval = setInterval(moveright,100);
};