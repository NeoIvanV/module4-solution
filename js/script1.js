

    (function (window) {
      var bye = {};

      var palabra = "Good Bye";

    bye.say = function (nombre) {
      console.log(palabra + " " + nombre);
    }
    window.bye = bye;
    })
    (window);