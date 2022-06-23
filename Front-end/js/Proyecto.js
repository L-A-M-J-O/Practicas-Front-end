
function SuperHeroes (a, b, c, d, h, j) 
{
    this.estatura = a
    this.color = b
    this.genero = c
    this.edad = d
    this.poder = h
    this.arma = j
}
    const thorObject= new  SuperHeroes ('2.10 Metros', 'Dorado', '1500 años', 'Fuerza sobrehumana', 'Mjolnir');
    const  moonNigthObject = new SuperHeroes ('1.80 Metros', 'Black', 'Masculino', '100 años', 'Combate cuerpo a cuerpor', 'Distintas armas como lanza dardos');
    const capitanAmericaObject = new SuperHeroes ('1.90 Metros', 'Azul', 'Masculino', '102 años', 'Agilidad', 'Escudo de vibranio' );
    const lokiObject = new SuperHeroes ('2.08 Metros', 'Verde & Black', 'Masculino', '106 años', 'Inteligencia sobrehumana', 'Fetro');
    const thanosObject = new SuperHeroes ('4.10 Metros', 'Blanco', 'Masculino', '90 años', 'Inmortalidad', 'Espada')
    const hulkObject = new SuperHeroes ('4.08 Metros', 'Verde', 'Masculino', '56 años', 'Fuerza & Agresivo','No porta armas');

function saludar ( )
{
    let nombreUsuario = String (prompt ('Tu nombre ¡por favor!'));
    const h2= document.getElementsByTagName ('h2') [0];
    h2.innerText = `¡Bienvenido!. ${nombreUsuario}`;  
}
saludar ( );

const  thor = ['Thor', '2.10 Metros', 'Dorado', '1500 años', 'Fuerza sobrehumana', 'Mjolnir'];
const moonNigth = ['Moon Nigth', '1.80 Metros', 'Black', 'Masculino', '100 años', 'Combate cuerpo a cuerpor', 'Distintas armas como lanza dardos']
const capitanAmerica = ['Capitan America','1.90 Metros', 'Azul', 'Masculino', '102 años', 'Agilidad', 'Escudo de vibranio']
const loki = ['Loki','2.08 Metros', 'Verde & Black', 'Masculino', '106 años', 'Inteligencia sobrehumana', 'Fetro']
const thanos = ['Thanos','4.10 Metros', 'Blanco', 'Masculino', '90 años', 'Inmortalidad', 'Espada']
const hulk = ['Hulk','4.08 Metros', 'Verde', 'Masculino', '56 años', 'Fuerza & Agresivo','No porta armas']

const listSuperHeroes = [`${thor[0]} ${moonNigth[0]} ${capitanAmerica[0]} ${loki[0]} ${thanos[0]} ${hulk[0]}`]

function mostrarSuperHeroes( ) {
    for (let i = 0; i <=6; i++) {
        const div = document.getElementById ('miContenido');
        div.innerHTML = `<button>${thor [0]}</button> <button>${moonNigth [0]}</button> <button>${capitanAmerica [0]}</button> <button>${loki [0]}</button> <button>${thanos [0]}</button> <button>${hulk  [0]}</button>`;
    }
 }
//  mostrarSuperHeroes ( );

function abrir ( ) 
{
    const boton1 = document.getElementById ('boton1')
    boton1.addEventListener ('click' ,
     ( ) => {
        Swal.fire({
            title: 'THOR',
            imageUrl : 'https://newspack-hipertextual.s3.amazonaws.com/wp-content/uploads/2022/05/Thor-156-1200x675.jpg',
                imageHeight: 400,
                imageAlt: 'Adios',
                showCancelButton: true,
                confirmButtonText: 'Mas',
                cancelButtonText: 'No mas'
        }).then ((resultado)=> {
            if (resultado.isConfirmed) {
                Swal.fire ({
                    icon: 'info',
                    html: `
                    <li>${thor [0]}</li>
                    <li>${thor [1]}</li>
                    <li>${thor [2]}</li>
                    <li>${thor [3]}</li>
                    <li>${thor [4]}</li>
                    <li>${thor [5]}</li>`,
                })
            }
            else {
                Swal.fire ({
                    icon: 'error',
                    title: 'Adios'
                })
            }
        })
     })
    const boton2 = document.getElementById ('boton2')
    boton2.addEventListener ('click' ,
     ( ) => {
        Swal.fire({
            title: 'MOON NIGTH',
            imageUrl : 'https://www.fayerwayer.com/resizer/S1IRcsno6daad483ooLHUgyb_W8=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/CCO3JKL4TRG7DDPTTENSDGY56A.jpg',
                imageHeight: 400,
                imageAlt: 'Adios',
                showCancelButton: true,
                confirmButtonText: 'Mas',
                cancelButtonText: 'No mas'
        }).then ((resultado)=> {
            if (resultado.isConfirmed) {
                Swal.fire ({
                    icon: 'info',
                    html: `
                    <li>${moonNigth [0]}</li>
                    <li>${moonNigth [1]}</li>
                    <li>${moonNigth [2]}</li>
                    <li>${moonNigth [3]}</li>
                    <li>${moonNigth [4]}</li>
                    <li>${moonNigth [5]}</li>`,
                })
            }
            else {
                Swal.fire ({
                    icon: 'error',
                    title: 'Adios'
                })
            }
        })
     })
    const boton3 = document.getElementById ('boton3')
    boton3.addEventListener ('click' ,
     ( ) => {
        Swal.fire({
            title: 'CAPITAN AMERICA',
            imageUrl : 'https://dam.smashmexico.com.mx/wp-content/uploads/2020/03/avengers-infinity-war-captain-america-escudo-disenio-cover-768x512.jpg',
                imageHeight: 400,
                imageAlt: 'Adios',
                showCancelButton: true,
                confirmButtonText: 'Mas',
                cancelButtonText: 'No mas'
        }).then ((resultado)=> {
            if (resultado.isConfirmed) {
                Swal.fire ({
                    icon: 'info',
                    html: `
                    <li>${capitanAmerica [0]}</li>
                    <li>${capitanAmerica [1]}</li>
                    <li>${capitanAmerica [2]}</li>
                    <li>${capitanAmerica [3]}</li>
                    <li>${capitanAmerica [4]}</li>
                    <li>${capitanAmerica [5]}</li>`,
                })
            }
            else {
                Swal.fire ({
                    icon: 'error',
                    title: 'Adios'
                })
            }
        })
     })
     const boton4 = document.getElementById ('boton4')
    boton4.addEventListener ('click' ,
     ( ) => {
        Swal.fire({
            title: 'LOKI',
            imageUrl : 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_876x493/public/media/image/2021/05/loki-tom-hiddleston-2345851.jpg?itok=RCUz1TlC',
                imageHeight: 400,
                imageAlt: 'Adios',
                showCancelButton: true,
                confirmButtonText: 'Mas',
                cancelButtonText: 'No mas'
        }).then ((resultado)=> {
            if (resultado.isConfirmed) {
                Swal.fire ({
                    icon: 'info',
                    html: `
                    <li>${loki [0]}</li>
                    <li>${loki [1]}</li>
                    <li>${loki [2]}</li>
                    <li>${loki [3]}</li>
                    <li>${loki [4]}</li>
                    <li>${loki [5]}</li>`,
                })
            }
            else {
                Swal.fire ({
                    icon: 'error',
                    title: 'Adios'
                })
            }
        })
     })
     const boton5 = document.getElementById ('boton5')
    boton5.addEventListener ('click' ,
     ( ) => {
        Swal.fire({
            title: 'THANOS',
            imageUrl : 'https://e.rpp-noticias.io/normal/2018/04/21/295329_597760.jpg',
                imageHeight: 400,
                imageAlt: 'Adios',
                showCancelButton: true,
                confirmButtonText: 'Mas',
                cancelButtonText: 'No mas'
        }).then ((resultado)=> {
            if (resultado.isConfirmed) {
                Swal.fire ({
                    icon: 'info',
                    html: `
                    <li>${thanos [0]}</li>
                    <li>${thanos [1]}</li>
                    <li>${thanos [2]}</li>
                    <li>${thanos [3]}</li>
                    <li>${thanos [4]}</li>
                    <li>${thanos [5]}</li>`,
                })
            }
            else {
                Swal.fire ({
                    icon: 'error',
                    title: 'Adios'
                })
            }
        })
     })
     const boton6= document.getElementById ('boton6')
     boton6.addEventListener ('click' ,
      ( ) => {
         Swal.fire({
             title: 'HULK',
             imageUrl : 'https://www.latercera.com/resizer/b5Ubecm5NT7uowqmwys03UDcelc=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/QIZBK67RYFALTNBYYNGHG4IM24.jpg',
                 imageHeight: 400,
                 imageAlt: 'Adios',
                 showCancelButton: true,
                 confirmButtonText: 'Mas',
                 cancelButtonText: 'No mas'
         }).then ((resultado)=> {
             if (resultado.isConfirmed) {
                 Swal.fire ({
                     icon: 'info',
                     html: `
                     <li>${hulk [0]}</li>
                     <li>${hulk [1]}</li>
                     <li>${hulk [2]}</li>
                     <li>${hulk [3]}</li>
                     <li>${hulk [4]}</li>
                     <li>${hulk [5]}</li>`,
                 })
             }
             else {
                 Swal.fire ({
                     icon: 'error',
                     title: 'Adios'
                 })
             }
         })
      })
}
abrir ( );



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

