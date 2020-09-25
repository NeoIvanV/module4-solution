
(function (window) {
  var hello = {};
  
  var palabra = "Hello";
  
hello.say = function (nombre) {
  console.log(palabra + " " + nombre);
}
window.hello = hello;
})
(window);