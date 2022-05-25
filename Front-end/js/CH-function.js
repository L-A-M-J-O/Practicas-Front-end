// * Proyecto pasar a disfraces 

let nombreUsuario = String (prompt ('Tu nombre ¡por favor!'));

function saludar ( )
{
    alert (`Bienvenido ${nombreUsuario}`);
}
saludar ( );
function maquina () {

    // ! let num0 = 'Silla Gaming'
   // ! let num1 = 'Silla de Verano'
   // ! let num2 = 'Silla de Casa'

    const sillas = String (prompt ( `¿Que tipo de silla deseas armar?, Silla Gaming, Silla de Verano, Silla de Casa`));
        for (tipo = 0; tipo <= 10; tipo ++ ) {
            if (sillas === 'Silla Gaming'){
                switch (tipo) {
                    case 1 : alert ('Primero separa tus piezas de Silla GAMING')
                    break;
                    case 2 : alert ('Segundo empieza con la base')
                    break;
                    case 3 : alert ('Tercero une la base con el cuerpo')
                    break;
                    case 4 : alert ('Cuarto y ultimo solo te quedaria unir el espaldar y mangos')
                    break;
                }
            }
            else if (sillas === 'Silla de Verano'){  
                switch (tipo) {
                    case 1 : alert ('Primero separa tus piezas de Silla de VERANO')
                    break;
                    case 2 : alert ('Segundo empieza con la base')
                    break;
                    case 3 : alert ('Tercero une la base con el cuerpo')
                    break;
                    case 4 : alert ('Cuarto y ultimo solo te quedaria unir el espaldar y mangos')
                    break;
                }
            }
            else if (sillas === 'Silla de Casa') {
                switch (tipo) {
                    case 1 : alert ('Primero separa tus piezas de Silla de CASA')
                    break;
                    case 2 : alert ('Segundo empieza con la base')
                    break;
                    case 3 : alert ('Tercero une la base con el cuerpo')
                    break;
                    case 4 : alert ('Cuarto y ultimo solo te quedaria unir el espaldar y mangos')
                    break;
                }
            }
        }
        function despedida ( ) 
        {
            let preguntaDeDespedida = String (prompt ('¿Quedaste Satisfecho?'));
            for ( despedida = 0; despedida <= 10; despedida ++) 
            {
                if (preguntaDeDespedida === 'Si') {
                    switch (despedida) {
                        case 1 : alert (`Fue un gusto ${nombreUsuario}`)
                    }
                }
                // * Esta en proceso para programar que sige si me dice que no el cliente
                else if (preguntaDeDespedida === 'No') {
                    switch (despedida) {
                        case 1 :  prompt  ('¿Esta bien que mas necesitas?')
                    }
                }
            }
    }
    despedida ( );
}
maquina ( );
