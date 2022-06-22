// //* Proyecto pasar a disfraces a fururo

function SuperHeroes (a, b, c, d, h, j) 
{
    this.estatura = a
    this.color = b
    this.genero = c
    this.edad = d
    this.poder = h
    this.arma = j
}
    const thor = new  SuperHeroes ('2.10 Metros', 'Dorado', '1500 años', 'Fuerza sobrehumana', 'Mjolnir');
    const  moonNigth = new SuperHeroes ('1.80 Metros', 'Black', 'Masculino', '100 años', 'Combate cuerpo a cuerpor', 'Distintas armas como lanza dardos');
    const capitanAmerica = new SuperHeroes ('1.90 Metros', 'Azul', 'Masculino', '102 años', 'Agilidad', 'Escudo de vibranio' );
    const loki = new SuperHeroes ('2.08 Metros', 'Verde & Black', 'Masculino', '106 años', 'Inteligencia sobrehumana', 'Fetro');
    const thanos = new SuperHeroes ('4.10 Metros', 'Blanco', 'Masculino', '90 años', 'Inmortalidad', 'Espada')
    const hulk = new SuperHeroes ('4.08 Metros', 'Verde', 'Masculino', '56 años', 'Fuerza & Agresivo','No porta armas');

    alert (thor);
    
function saludar ( )
{
    let nombreUsuario = String (prompt ('Tu nombre ¡por favor!'));
    const h1= document.getElementsByTagName ('h1') [0];
    h1.innerText = `¡Bienvenido!. ${nombreUsuario}`;  
}

function mostrarS ( )
{
    const ListaSuper = ['Thor', 'Loki', 'Hulk', 'MoonNigth', 'Capitan America', 'Thanos']
}













































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

