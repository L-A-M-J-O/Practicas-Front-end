// Variables

    // let miVariable = '30'; //Es una variable en la cual se puede asignar no se puede declarar
    

    // const b = '30'; // No se puede re asignar ni declarar


    // var a = '40'; //no es recomendable usarlo


// primitos: 
    // Symbol // Es un tipo de dato que hace unico en el sistema
    //     undefined  // Cuando esta indefinida 
    //     null  // No se asigna, un tipo de dato, Asignas el vacio

// compuestos:
    //  Object 
    //     string
    //     Array
    //     Map
    //     Set
    //     // Objetos definidos por el programador 




// ACTIVIDAD DE PEDIR NUMERO

    // let num1 = Number (prompt ('Escriba un numero'));
    // let num2 = Number (prompt ('Escriba otro numero'));

    // let suma = num1+num2;
    // let mul = num1*num2;

    // alert ('Las multiplicacion es:'+mul);

    // console.log ('La suma es',suma);


    // let sabor1 = String (prompt ('Que sabor quieres?'));
    // let sabor2 = String (prompt ('Que otro sabor quieres?'));
    // let st = String ('Vainilla');
    // let st1 = 'Chocolate';
    // let st2 = 'Minutos';

    // let suma = String ('10 minutos');

    // alert ('Tiempo por espera es:'+ suma);
    // alert ('Esta preparado es: '+ sabor1 + div + sabor2);

    // let num1 = Number ('4');
    // let num2 = Number ('4');

    // alert (num1 + num2);


    // let nombre = prompt ('Hello World');

    // alert (nombre);


// Aritmeticos

// Asignacion Asigna x - y 
    // let num0 = 10;
    // num0 -=9;

    // let num1 = 10;
    // num1 +=9;

    // let num2 = 10;
    // num2 *=9;

    // let num3 = 10;
    // num3 /=9;
  
    // document.write(num1);


// concatenacion
    // let cadena1 = 8;
    // let cadena2 = 5;

    // let frase = '' + cadena1 + cadena2;

    // document.write(frase);
    // let nombre = 'Alan Naranjo';
    // let frase = 'soy' + nombre + 'y estoy caminando';

    // document.write(frase);



// Comparacion

// Si es igual
    // let num1 = 50;
    // let num2 = 20;

    // document.write(num1 == num2);

    
// Si son distintos
    // let num1 = 50;
    // let num2 = 20;

    // document.write(num1 != num2);

// Son estrictamente iguales

    // let num1 = 50;
    // let num2 = 20;
    // let tex = '50';
    // let tex1 = 'Dos';

    // document.write(tex === num1);

// Son estrictamente distintos

    // let num1 = 50;
    // let num2 = 20;
    // let tex = '50';
    // let tex1 = 'Dos';

    // document.write(tex !== num1);


    // let num0 = 20;
    // let num1 = 40;

    // document.write(num0 < num1)

    // let num3 = 24;
    // let num2 = 92;

    // let respuesta = num2 < num3;

    // document.write(respuesta);

// CONDICIONALES
// {
//     alert ("Hello");
//     document.write("Alan");
    
// }

    // let name = 'Naranjos'

    // if (name =='Alan') {
    //     alert ('Tu nombre es:'+ name)
    // }
    // else if (name == 'Naranjo') {
    //     alert ('Tu apellido es:'+ name)
    // }
    // else {
    //     alert ('Tu nombre y apellido es otro')
    // }

// // Ejercisio de clases
//     let money1 = prompt ('Cuanto dinero tienes 1:');
//     // let money2 = prompt ('Cuanto dinero tienes 2:');
//     // let money3 = prompt ('Cuanto dinero tienes 3:');

//     if (money1 >= 0.6 && money1 < 1) {
//         alert ('Tienes para el helado agua');
//     }
//     else if (money1 >= 1 && money1 < 1.6) {
//         alert ('Tienes para el helado rojo');
//     }
//     else if (money1 >= 1.7 && money1 < 1.8) {
//         alert ('Tienes para el helado azul');
//     }
//     else if (money1 >= 1.8 && money1 < 2.9) {
//         alert ('Tienes para el helado verde');
//     }
//     else if (money1 >= 2.9) {
//         alert ('Tienes para el helado amarillo y pote de 1/4 kg');
//     }


// if 

// const datoUsuario = prompt ('Ingresa una cadena');

// if (datoUsuario === 'Saludar') {
//     alert ('Hola Alan');
// }
// else if (datoUsuario === 'Despedirse') {
//     alert ('Adios Alan');
// }
// else if (datoUsuario === 'Bienvenido') {
//     alert ('Hola Dios de todo');
// }
// else {
//     alert ('Dato no valido')
// }



// Operadores de igualdad o diferencia 

// const condicion1 = 1 == '1'; true

// const condicion2 = 1 === '1'; false

// const condicion3 = 1 != '1'; false

// const condicion4 = 1 !== '1'; true

// const condicion5 = 5 <= 10 ; true

// const condicion6 = 5 >= 10; false

// alert ('Esto es: '+ condicion2 || condicion6);

// EJERCISIO


// let programa = prompt ('Suma, Resta, Multiplicacion o Division');


// num0 = Number (prompt ('Numero one'));
// num1 = Number (prompt ('Numero two'));

// if (isNaN(num0) || isNaN(num1)){
//     alert ('Numero no valido');
// }
// if (programa === 'Suma') {

//         alert ('Suma es:'+ (num0 + num1));
// }
// else if ( programa ==='Mul') {

//         alert ('Multiplicacion es:'+ (num0 * num1));
// }
// else if ( programa ==='Div') {

//     if (num1 === 0){
//         alert ('No puedo dividir');
//     }
//     if (num0 === 0){
//         alert ('No puedo dividir');
//     }
//     else if (programa === "Div") {
//         alert ('Division es:'+ (num0 / num1));
//     }       
// }
// else if ( programa ==='Resta') {

//         alert ('Multiplicacion es:'+ (num0 - num1));
// }

    // switch (programa) 
    // {
    //     case 'suma' : 
    //     {
    //         alert ('Suma es:' + (num0 + num1));
    //         break;
    //     }
    //     case 'resta' :
    //     {
    //         alert ('Resta es:' + (num0 - num1));
    //     }
    //     case 'mul' :
    //     {
    //         alert ('Multiplicacion es' + (num0 * num1));
    //     }
    //     case  'div' :
    //     {
    //         alert ('Division es' + (num0 / num1));
    //     }
    // }

// PRACTICA 

// let name = 'Homero';
// let ape = 'Simpsons'
// let age = 18;

// const c1 = 'Madrid';
// const c2 = 'Barcelona';
// const c3 = 'Bogota';
// const c4 = 'Medellin';
// const c5 = 'Berlin';


// let name1 = 'Homero';
// let ape1 = 'Simpsons'
// let age1 = 18;
// let sexo = 'M';
// let peso = '64kg';
// let placa = 'XFG 630';+ ''
// let happy = '30/09/2003';
// let carnet  = 'Nombre: ' + ' '+ name1 + ' '+ 'Apellido: ' + ape1 + ' '+ 'Edad: ' + age1 + ''+ 'Sexo: ' + sexo + ' '+ 'Peso: ' + peso + ' '+ 'Placa: ' + placa + 'Fecha de Nacimiento: ' + ' '+ happy;
// alert ('Tu Carnet' + carnet);


// let perdilo = alert ('Dame 5 personajes');

//     let p1 = String (prompt ('Primera Personaje'));
//     let p2 = prompt ('Segundo Personaje');
//     let p3 = prompt ('Tercero Personaje');
//     let p4 = prompt ('Cuerto Personaje');
//     let p5 = prompt ('Quito Personaje');
//     alert ('Familia'+ ' '+ (p1 + ' ' + p2 + ' '+ p3 + ' ' + p4 + ' ' + p5));
    
// const programa = alert ('Dame dos precios');

// let num0 = Number (prompt ('numero uno'))
// let num1 = Number (prompt ('numero dos'));

// alert ('Este es tu resultado:' + (num0 % num1) + '%' );


// let programa = prompt (['¿Hola Dios eres tu?'])

// let name = 'Alan';
// let name1 = null

// if (name === 'Alan' ) {
//     alert ('Si soy yo');
// }
// if (name1) {
//     alert ('No fui yo');
// }   

// CICLOS
    
    // Inicio y un fin

    // let dato = Number (prompt (['Dame un numero']));
    
    // if (! isNaN (dato)); {
    //     alert ('Dato no valido');

    //         for ( let  Inicio=1;  Inicio<=dato;  Inicio++) {
    //             alert (Inicio);
    //         }
    //     }


// for  ( let Inicio = 1;  Inicio<=8; Inicio++) {
//     console.log (Inicio);

//     if  (Inicio ===1 || Inicio === 7) {
//         console.log ('TCARRACT');
//     }
//     else if (Inicio === 2 || Inicio ===7) {
//         console.log ('pppppppp');
//     }
//     else {
//         console.log ('00000000');
//     }
// }

// Forma con if, esle if , esle

// const enemy = 'Iron man';

// let Loki = ' ';

//  if (enemy === 'Iron man') {
//      Loki = 'Magneto';
//  }
//  else if  (enemy === 'Thor') {
//      Loki = 'Odin';
//  }
//  else if  (enemy === 'Hulk') {
//      Loki = ' Thanos';
//  }
//  else  {
//      Loki = 'Loki';
//  }

// forma switch


// const enemy = 'Thor';

// let Loki = ''

// switch (enemy ) {
//         case 'Iron man' :
//             Loki = 'Magneto'
//             break

//         case 'Hulk' :
//             Loki = 'Thanos'
//             break
        
//         case 'Thor' :
//             Loki = 'Odin'
//             break
        
//         default :
//         Loki = 'Loki'
// }

// Codigo mas limpio

// const enemy = 'Iron man'

// const   skin = {
//     'Iron man' : 'Magneto',
//     'Thor'  : 'Odin',
//     'Hulk' : 'Thanos',
// }
// const  skind = 'Loki'

// const Loki = skin [enemy] || skind 

// console.log (Loki);

//  MAS PRACTICA 

// const programa = prompt ('Dame una tecla');

// if (programa === 'Y') {
//     alert ('CORRECTO');
// }
// else if  (programa === 'y') {
//     alert ('ERROR');
// }

// const escoger = prompt ('Que Jugador deseas 1, 2, 3, 4');

// if (escoger === '1') {
//     alert ('Escogiste a HOMERO');
// }
// else if (escoger === '2') {
//     alert ('Escogiste a MARCH');
// }
// else if (escoger === '3') {
//     alert ('Escogiste a BARD');
// }
// else if (escoger === '4') {
//     alert ('Escogiste a LIZA');
// }

