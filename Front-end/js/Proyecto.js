
// function SuperHeroes (a, b, c, d, h, j) 
// {
//     this.estatura = a
//     this.color = b
//     this.genero = c
//     this.edad = d
//     this.poder = h
//     this.arma = j
// }
//     const thorObject= new  SuperHeroes ('2.10 Metros', 'Dorado', '1500 años', 'Fuerza sobrehumana', 'Mjolnir');
//     const  moonNigthObject = new SuperHeroes ('1.80 Metros', 'Black', 'Masculino', '100 años', 'Combate cuerpo a cuerpor', 'Distintas armas como lanza dardos');
//     const capitanAmericaObject = new SuperHeroes ('1.90 Metros', 'Azul', 'Masculino', '102 años', 'Agilidad', 'Escudo de vibranio' );
//     const lokiObject = new SuperHeroes ('2.08 Metros', 'Verde & Black', 'Masculino', '106 años', 'Inteligencia sobrehumana', 'Fetro');
//     const thanosObject = new SuperHeroes ('4.10 Metros', 'Blanco', 'Masculino', '90 años', 'Inmortalidad', 'Espada')
//     const hulkObject = new SuperHeroes ('4.08 Metros', 'Verde', 'Masculino', '56 años', 'Fuerza & Agresivo','No porta armas');

// function saludar ( )
// {
//     let nombreUsuario = String (prompt ('Tu nombre ¡por favor!'));
//     const h1= document.getElementsByTagName ('h1') [0];
//     h1.innerText = `¡Bienvenido!. ${nombreUsuario}`;  
// }
// saludar ( );

// const  thor = ['Thor', '2.10 Metros', 'Dorado', '1500 años', 'Fuerza sobrehumana', 'Mjolnir'];
// const moonNigth = ['Moon Nigth', '1.80 Metros', 'Black', 'Masculino', '100 años', 'Combate cuerpo a cuerpor', 'Distintas armas como lanza dardos']
// const capitanAmerica = ['Capitan America','1.90 Metros', 'Azul', 'Masculino', '102 años', 'Agilidad', 'Escudo de vibranio']
// const loki = ['Loki','2.08 Metros', 'Verde & Black', 'Masculino', '106 años', 'Inteligencia sobrehumana', 'Fetro']
// const thanos = ['Thanos','4.10 Metros', 'Blanco', 'Masculino', '90 años', 'Inmortalidad', 'Espada']
// const hulk = ['Hulk','4.08 Metros', 'Verde', 'Masculino', '56 años', 'Fuerza & Agresivo','No porta armas']

// const listSuperHeroes = [`${thor[0]} ${moonNigth[0]} ${capitanAmerica[0]} ${loki[0]} ${thanos[0]} ${hulk[0]}`]

// function mostrarSuperHeroes( ) {
//     for (let i = 0; i <=6; i++) {
//     }
//  }
//  mostrarSuperHeroes ( );



const div = document.getElementById ('miContenido')
div.innerHTML = `<b>Esto es negrita</b>`;



// La idea es que pregunte que es lo que quiere de los superheroes y despues de ello poder hacer que cambie el texto en html y luego poder cuadrat el html con imaganes y la descripcion


// ** TRABAJO DE SILLA **//

// function arraysMostrarSillas ( ) {
//     const numeroCliente = ['Tenemos','Sillas Gaming','Silla de Verano','Silla de Casa','Moonnigth']
//     for (let i = 0; i <=4; i++) {
//         alert(numeroCliente [i]);
//     }
// }
// arraysMostrarSillas ( );
// function maquina ( ) {

//     // ! let num0 = 'Silla Gaming'
//    // ! let num1 = 'Silla de Verano'
//    // ! let num2 = 'Silla de Casa'

//     const sillas = String (prompt ( `¿Que vas a escoger?`));
//         for (tipo = 0; tipo <= 10; tipo ++ ) {
//             if (sillas === 'Silla Gaming'){
//                 switch (tipo) {
//                     case 1 : alert ('Primero separa tus piezas de Silla GAMING')
//                     break;
//                     case 2 : alert ('Segundo empieza con la base')
//                     break;
//                     case 3 : alert ('Tercero une la base con el cuerpo')
//                     break;
//                     case 4 : alert ('Cuarto y ultimo solo te quedaria unir el espaldar y mangos')
//                     break;
//                 }
//             }
//             else if (sillas === 'Silla de Verano'){  
//                 switch (tipo) {
//                     case 1 : alert ('Primero separa tus piezas de Silla de VERANO')
//                     break;
//                     case 2 : alert ('Segundo empieza con la base')
//                     break;
//                     case 3 : alert ('Tercero une la base con el cuerpo')
//                     break;
//                     case 4 : alert ('Cuarto y ultimo solo te quedaria unir el espaldar y mangos')
//                     break;
//                 }
//             }
//             else if (sillas === 'Silla de Casa') {
//                 switch (tipo) {
//                     case 1 : alert ('Primero separa tus piezas de Silla de CASA')
//                     break;
//                     case 2 : alert ('Segundo empieza con la base')
//                     break;
//                     case 3 : alert ('Tercero une la base con el cuerpo')
//                     break;
//                     case 4 : alert ('Cuarto y ultimo solo te quedaria unir el espaldar y mangos')
//                     break;
//                 }
//             }
//             else if (sillas === 'Moon') {
//                 switch (tipo) {
//                     case 1 : alert (`Este es MoonNigth Estatura ${moonNigth.estatura} , Color Representativo ${moonNigth.color} ,  Edad ${moonNigth.edad} ,  Genero ${moonNigth.genero}`); 
//                     break;
//                     case 2 : alert (`Sus enemigos son ${enemyMoon}`)
//                     break;
//                 }  
//             }
//         }
//         function despedida ( ) 
//         {
//             let preguntaDeDespedida = String (prompt ('¿Quedaste Satisfecho?'));
//             for ( despedida = 0; despedida <= 10; despedida ++) 
//             {
//                 if (preguntaDeDespedida === 'Si') {
//                     alert (`Fue un gusto ${nombreUsuario}`)
//                 }
//                 else if (preguntaDeDespedida === 'No') {    
//                     function info ( )
//                     {
//                         let pregunta1 = prompt ('Esta bien indicame que parte, 1  2  3  4  exit')
//                         for (pasos = 0; pasos <=5; pasos++)
//                         {
//                             if (pregunta1 === '1') {
//                                 switch (pasos) 
//                                 {
//                                     case 1 : alert ('Primero separa tus piezas de Silla')
//                                     break;
//                                 }
//                             }
//                             else if (pregunta1 === '2') {
//                                 switch (pasos) 
//                                 {
//                                     case 1 : alert ('Segundo empieza con la base')
//                                     break;
//                                 }
//                             }
//                             else if (pregunta1 === '3') {
//                                 switch (pasos) 
//                                 {
//                                     case 1 : alert ('Tercero une la base con el cuerpo')
//                                     break;
//                                 }
//                             }
//                             else if (pregunta1 === '4') {
//                                 switch (pasos) 
//                                 {
//                                     case 1 : alert ('Cuarto y ultimo solo te quedaria unir el espaldar y mangos')
//                                     break;
//                                 }
//                             }
//                             else if (pregunta1=== 'exit') {
//                                 alert (`Fue un gusto ${nombreUsuario}`);
//                             }
//                         }
//                     }
//                     info ();
//                 }
//             }
//     }
//     despedida ( );
// }
// maquina ( );

