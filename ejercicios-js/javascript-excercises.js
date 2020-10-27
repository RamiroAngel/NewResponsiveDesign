/*  1) Variables y Operadores:
        
        A) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números 
            en una 3er variable.                                                                                     */

            var birthYear = 1993;
            var myAge = 27;
            var currentYear = birthYear + myAge;
            
            console.log(currentYear);
        
        
/*      B) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.            */
        
            var myName = 'Ramiro';
            var myLastName = 'Angel';
            var myWholeName = myName + ' ' + myLastName;
            
            console.log(myWholeName);


/*      C) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
            guardando el resultado la suma una 3er variable (utilizar length).                                       */

            var retroNintendo = 'Game Boy Color';
            var bestGameBoyGame = 'Pokemon Gold';
            var stringCounting = retroNintendo.length + bestGameBoyGame.length;

            console.log(stringCounting);



/*  2) Strings

        A) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
            (utilizar toUpperCase).                                                                                  */

            var song = 'WeControlTheSunlight';
            var may = song.toUpperCase();
            
            console.log(may);


/*      B) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
            caracteres guardando el resultado en una nueva variable (utilizar substring).                            */

            var rockStar = 'MikeJagger';
            var abbv = rockStar.substring(0, 5);

            console.log(abbv);


/*      C) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
            caracteres guardando el resultado en una nueva variable (utilizar substring).                            */

            var dj = 'John 00 Fleming';
            var lastThree = dj.substring(12);

            console.log(lastThree);

        
/*      D) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
            en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, 
            toUpperCase, toLowerCase y el operador +)                                                                */

            var language = 'javascript';
            var lang = language.substring(0,1).toUpperCase() + language.substring(1,10).toLowerCase();

            console.log(lang);

/*      E) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la 
            posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).                    */
        
            var headphones = 'klipxtreme Placid';
            var separation = headphones.indexOf(' ');

            console.log(separation)

/*      F) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
            Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
            ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, 
            toLowerCase y el operador +).                                                                            */

            var property = 'noise cancellation';
            var applyevth = property.substring(0,1).toUpperCase() + property.substring(1,5).toLowerCase() + ' '
            + property.substring(6,7).toUpperCase() + property.substring(7).toLowerCase() + ' ' + property.indexOf(' ');

            console.log(applyevth);



/* 3) Arrays 

        A) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
            "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 
            (utilizar console.log)                                                                                   */

            var monthsA = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
                'Octubre', 'Noviembre', 'Diciembre'];
            
            console.log(monthsA[4], monthsA[10]);


/*      B) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).                      */
            
            var monthsB = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
                'Octubre', 'Noviembre', 'Diciembre'];

            console.log(monthsB.sort());

/*      C) Agregar un elemento al principio y al final del array (utilizar unshift y push).                        */
            var monthsC = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
                'Octubre', 'Noviembre', 'Diciembre'];
            monthsC.unshift('Ramiro');
            monthsC.push("Angel");
            
            console.log('array', monthsC);

/*      D) Quitar un elemento del principio y del final del array (utilizar shift y pop).                          */
            
            var monthsD = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
                'Octubre', 'Noviembre', 'Diciembre'];
            monthsD.shift();
            monthsD.pop();

            console.log(monthsD);

/*      E) Invertir el orden del array (utilizar reverse).                                                         */
            
    
    /********************* Which would be the correct way to write this? Number 1 or number 2? **********************/
            
                /** Number 1 **/
            var monthsE = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
                'Octubre', 'Noviembre', 'Diciembre'];
            monthsE.reverse();

            console.log(monthsE)
                
                /** Number 2 
            var monthsE = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
                'Octubre', 'Noviembre', 'Diciembre'];

            console.log(monthsE.reverse());**/

    /********************* ------------------------------------------------------------------  **********************/        

/*      F) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - 
            (utilizar join).                                                                                         */

            var monthsF = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
                'Octubre', 'Noviembre', 'Diciembre'];
            
            console.log(monthsF.join('-'));

/*      G) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).            */

            var monthsG = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
                'Octubre', 'Noviembre', 'Diciembre'];
            
            console.log(monthsG.slice(4,11));



/* 4) If Else

        A) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que
            0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5*/
            
            var randum = Math.random();

            if(randum >= 0.5) {
                alert('Greater than 0,5')
            } else {
                alert('Lower than 0,5')
            }

                
/*      B) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
            “Bebe” si la edad es menor a 2 años
            “Nino” si la edad es entre 2 y 12 años
            “Adolecente” si la edad es entre 13 y 19 años
            “Joven” si la edad está entre 20 y 30 años
            “Adulto” entre 31 y 60 años
            “Adulto mayor” entre 61 y 75 años
            “Anciano” si es mayor a 75 años */

            var age = 27;
            if(age < 2){
                alert('Bebe')
            } else if(age >= 2 && age <= 12){
                alert('Niño')
            } else if(age >= 13 && age <= 19){
                alert('Adolescente')
            }else if(age >= 20 && age <= 30){
                alert('Joven')
            }else if(age >= 31 && age <= 60){
                alert('Adulto')
            }else if(age >= 61 && age <= 75){
                alert('Adulto Mayor')
            }else if (age > 75)
                alert('Anciano')