var button = document.getElementById('counter');
button.onclick = function(){
  counter = counter + 1;
  var span= documentt.getelmentById('count');
  span.innerHTML = counter.toString();
};