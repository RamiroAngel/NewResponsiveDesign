/*  1) Variables y Operadores:
        
        A) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números 
            en una 3er variable.                                                                                     */

            var birthYear = 1993;
            var myAge = 27;
            var currentYear = birthYear + myAge;
            
            console.log (currentYear);
        
        
/*      B) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.            */
        
            var myName = 'Ramiro ';
            var myLastName = 'Angel';
            var myWholeName = myName + myLastName;
            
            console.log (myWholeName);


/*      C) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
            guardando el resultado la suma una 3er variable (utilizar length).                                       */

            var retroNintendo = 'Game Boy Color';
            var bestGameBoyGame = 'Pokemon Gold';
            var stringCounting = retroNintendo.length + bestGameBoyGame.length;

            console.log (stringCounting);



/*  2) Strings

        A) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
            (utilizar toUpperCase).                                                                                  */

            var song = 'WeControlTheSunlight';
            var may = song.toUpperCase ();
            
            console.log (may);


/*      B) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
            caracteres guardando el resultado en una nueva variable (utilizar substring).                            */

            var rockStar = 'MikeJagger';
            var abbv = rockStar.substring (0, 5);

            console.log (abbv);


/*      C) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
            caracteres guardando el resultado en una nueva variable (utilizar substring).                            */

            var dj = "John 00 Fleming";
            var lastThree = dj.substring (12);

            console.log (lastThree);