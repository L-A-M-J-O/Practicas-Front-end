// MAQUINA DE SILLAS

// const pedir = String (prompt ('Que quieres crear'));

// if (pedir === 'Silla') 
//     alert ('Esta bien' )
//     let categoriaS = String (prompt ('Que categorias: Silla Home, Silla Gamer, Silla Office, Silla Beach'))

//     if (categoria === 'Silla Home' ) 
//         alert ('Comenzemos')
//             for (let Inicio = 'Separa las piezas por partes'; Inicio == 'Separa las piezas por partes';  Inicio++) 
//             alert (`Primero: ${Inicio}`);
//             for (let Inicio = 'Encuentra la base "las patas"'; Inicio == 'Encuentra la base "las patas"';  Inicio++) 
//             alert (`Segundo: ${Inicio}`);
//             for (let Inicio = 'Ubica los hoyos para poder ajustarla'; Inicio == 'Ubica los hoyos para poder ajustarla';  Inicio++) 
//             alert (`Tercero: ${Inicio}`);
//             for (let Inicio = 'Coge los tornillos y la ajustas parte por parte '; Inicio == 'Coge los tornillos y la ajustas parte por parte ';  Inicio++) 
//             alert (`Cuarto: ${Inicio}`);
//             for (let Inicio = 'Comenzamos con la parte inferior osea donde pones tu cola'; Inicio == 'Comenzamos con la parte inferior osea donde pones tu cola';  Inicio++) 
//             alert (`Quinto: ${Inicio}`);
//             for (let Inicio = 'Despues ubicamos los mango y los instalamos'; Inicio == 'Despues ubicamos los mango y los instalamos';  Inicio++) 
//             alert (`Sexto: ${Inicio}`);
//             for (let Inicio = 'Pon el espaldar lo ajustas'; Inicio == 'Pon el espaldar lo ajustas';  Inicio++) 
//             alert (`Septimo: ${Inicio}`);
//             for (let Inicio = 'Y listo a disfrutar fue sencillo'; Inicio == 'Y listo a disfrutar fue sencillo';  Inicio++) { 
//             alert (`Octavo: ${Inicio}`);
// }



// MAQUINA DE DISFRACES

const categoria = prompt ('Que disfraces quieres: SuperHéroes, Piratas, Villanos')

for (let skin = 0; skin <= 10; skin++) {
    if (categoria === 'Super') {
        switch (skin) {
            case 1 : alert ('Primero:  escoges la talla que se adecude a tu cuerpo');
            break;
            case 2 : alert ('Segundo:  Vamos a escoger un poder');
            break;
            case 3 : alert ('Tercero:  Ya que allas escogi tu poder de preferiencia ambiatalizalo con coleres en base al poder o tus colores favoritos');
            break;
            case 4 : alert ('Cuarto:  Si requieres de un arma o algo mas como capa, tambien lo escoges');
            break;
            case 5 : alert ('Quinto:  y ya creo que serias el mejor disfras de SUPER');
            break;
            default: alert ('Ya que escogiste SuperHéroes, Empezare a decirte como armarlo');
            break;
        }
    }
    else if (categoria === 'Pirata') {
        switch (skin) {
            case 1 : alert ('Primero:  escoges la talla que se adecude a tu cuerpo');
            break;
            case 2 : alert ('Segundo: Despues vamos a buscarte colores como blanco, negro o cafe');
            break;
            case 3 : alert ('Tercero: Si tienes un sobrero cogelo que sea color negro le haces un logo de pirata con tinta blanca');
            break;
            case 4 : alert ('Cuarto: vamos a buscar una pañoleta no importa el color y te la pones antes de ponerte el sobrero de pirata previamente antes ya creado');
            break;
            case 5 : alert ('Quinto; coges los pantalones mas anchos y camisetas mas anchas que tienes te pones un cinturon y por ultimo botas ajustadas y ya quedaste');
            break;
            default: alert ('Ya que escogiste Piratas, Empezare a decirte como armarlo');
            break;
        }
    }
    else if (categoria === 'Villano') {
        switch (skin) {
            case 1 : alert ('Primero:  escoges la talla que se adecude a tu cuerpo');
            break;
            case 2 : alert ('Segundo: Piensa cual villano te gusta mas y que estilo');
            break;
            case 3 : alert ('Tercero: Despues ubica que colores te gustan para poder estelizarlo');
            break;
            case 4 : alert ('Cuarto: Ya que lo estelizaste puedes escoger tu arma de combate');
            break;
            case 5 : alert ('Quinto: y por ultimo pones accesorios para poder ambientizar tu disfras');
            break;
            default: alert ('Ya que escogiste Villanos, Empezare a decirte como armarlo');
            break;
        }
    }
}