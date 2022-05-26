// * Proyecto pasar a disfraces a fururo

let nombreUsuario = String (prompt ('Tu nombre ¡por favor!'));

function saludar ( )
{
    alert (`Bienvenido ${nombreUsuario}`);
}
saludar ( );

function arraysMostrarSillas ( ) {
    const numeroCliente = ['Tenemos','Sillas Gaming','Silla de Verano','Silla de Casa']
    for (let i = 0; i <=3; i++) {
        alert(numeroCliente [i]);
    }
}
arraysMostrarSillas ( );

function maquina ( ) {

    // ! let num0 = 'Silla Gaming'
   // ! let num1 = 'Silla de Verano'
   // ! let num2 = 'Silla de Casa'

    const sillas = String (prompt ( `¿Que tipo de silla deseas armar?`));
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
                    switch (despedida)
                    {
                        case 1 : alert (`Fue un gusto ${nombreUsuario}`)
                    }
                }
                else if (preguntaDeDespedida === 'No') {

                    function info ( )
                    {
                        let pregunta1 = prompt ('Esta bien indicame que parte, 1  2  3  4  exit')
                        for (pasos = 0; pasos <=5; pasos++)
                        {
                            if (pregunta1 === '1') {
                                switch (pasos) 
                                {
                                    case 1 : alert ('Primero separa tus piezas de Silla')
                                    break;
                                }
                            }
                            else if (pregunta1 === '2') {
                                switch (pasos) 
                                {
                                    case 1 : alert ('Segundo empieza con la base')
                                    break;
                                }
                            }
                            else if (pregunta1 === '3') {
                                switch (pasos) 
                                {
                                    case 1 : alert ('Tercero une la base con el cuerpo')
                                    break;
                                }
                            }
                            else if (pregunta1 === '4') {
                                switch (pasos) 
                                {
                                    case 1 : alert ('Cuarto y ultimo solo te quedaria unir el espaldar y mangos')
                                    break;
                                }
                            }
                            else if (pregunta1=== 'exit') {
                                alert (`Fue un gustaso ${nombreUsuario}`);
                                break;
                            }
                        }
                    }
                    info ();
                }
            }
    }
    despedida ( );
}
maquina ( );