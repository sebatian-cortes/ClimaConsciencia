
alert("¡Bienvenido a ClimaConsciencia! \nTu punto de encuentro para aprender, reflexionar y actuar frente al cambio climático. Aquí encontrarás información clara y actualizada sobre los desafíos ambientales que enfrenta nuestro planeta, junto con consejos prácticos y herramientas para calcular tu huella ecológica. Únete a nosotros en esta misión por proteger nuestro hogar común y construir un futuro sostenible para las próximas generaciones. ¡El cambio comienza contigo!")

alert("¡Elige por donde quieres empezar!")

Menu()




function Menu() {

    let eleccion = 0
    do {

        eleccion = parseInt(prompt("Elige una accion: \n 1.Introducción al Cambio Climático.\n 2.Calcular Huella de Carbono Personal.  \n  3.Consejos Prácticos para Reducir tu Impacto."))

        switch (eleccion) {
            case 1:
                
                break;
        
            case 2:
                
                break;
        
            case 3:
                
                break;
        
            default:
                alert("Parece ser que no has elegido una opcion valida, vuelve a elegir una opcion del menu")
                break;
        }


        
    } while (eleccion != 1 || eleccion != 2 || eleccion != 3);
    




}

