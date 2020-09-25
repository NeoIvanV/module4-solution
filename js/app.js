

(function () {
    var nombres = ["Yay",
      "John", 
      "Kai",
      "Joe", 
      "Jack", 
      "Joel",
      "Michael",
      "Burbon",
      "Jazz", 
      "Thom"];
    for (var nombre in nombres) {
       var letra = nombres[nombre].charAt(0).toLowerCase();
        if (letra === 'j') {
           bye.say(nombres[nombre]);
   } else {
            hello.say(nombres[nombre]);
   }

 }
 
 })();