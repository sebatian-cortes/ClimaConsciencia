
alert("¡Bienvenido a ClimaConsciencia! \nTu punto de encuentro para aprender, reflexionar y actuar frente al cambio climático. Aquí encontrarás información clara y actualizada sobre los desafíos ambientales que enfrenta nuestro planeta, junto con consejos prácticos y herramientas para calcular tu huella ecológica. Únete a nosotros en esta misión por proteger nuestro hogar común y construir un futuro sostenible para las próximas generaciones. ¡El cambio comienza contigo!")

alert("¡Elige por donde quieres empezar!")

let listaRespuestas = []
let puntaje = 0
let aciertos = 0
let toneladasCarbono = 0
let listaRecomendaciones = []
let concejosFinales = []

Menu()




function Menu() {

    let eleccion = 0
    do {

        eleccion = parseInt(prompt("Elige una accion: \n1.Introducción al Cambio Climático.\n2.Calcular Huella de Carbono Personal. \n3.Consejos Prácticos para Reducir tu Impacto. \n 4.Salir"))

        switch (eleccion) {
            case 1:

                alert("El calentamiento global es uno de los desafíos más graves que enfrenta el planeta en la actualidad. Este fenómeno se " +
                    "refiere al aumento de la temperatura promedio de la atmósfera y los océanos debido a la acumulación de gases de efecto " +
                    "invernadero, como el dióxido de carbono (CO₂), metano (CH₄) y óxidos de nitrógeno (NOx). Las principales fuentes de estas " +
                    "emisiones son las actividades humanas, como la quema de combustibles fósiles para la generación de energía, el transporte " +
                    "y la industria, así como la deforestación, que reduce la capacidad de los bosques para absorber CO₂ de la atmósfera.n\n" +
                    "La deforestación es otro factor clave que contribuye al calentamiento global, ya que los árboles juegan un papel fundamental" +
                    "en la absorción de CO₂. Al talar bosques, se libera CO₂ almacenado en la madera, mientras que se reduce la capacidad de la " *
                    "Tierra para capturar más dióxido de carbono. Además, la agricultura y la ganadería intensiva emiten grandes cantidades de metano," +
                    "un gas de efecto invernadero mucho más potente que el CO₂. Este ciclo de emisiones y deforestación crea un círculo vicioso que " +
                    "agrava el problema del cambio climático.\n" +
                    "Las consecuencias del calentamiento global son amplias y afectan tanto a los ecosistemas como a las sociedades humanas. " +
                    "Uno de los efectos más evidentes es el aumento del nivel del mar debido al derretimiento de los glaciares y las capas de " +
                    "hielo en los polos. Esto pone en riesgo a las comunidades costeras y a las islas bajas, amenazando la vida de millones de " +
                    "personas. Además, el cambio climático está provocando fenómenos meteorológicos extremos, como huracanes más intensos, olas " +
                    "de calor, sequías prolongadas e inundaciones, lo que pone en peligro la seguridad alimentaria y a  medida que el calentamiento global progresa, se observa una pérdida significativa de biodiversidad. Muchos animales y " +
                    "plantas no pueden adaptarse rápidamente a los cambios en su hábitat, lo que provoca la extinción de especies. Además, los " +
                    "ecosistemas marinos, como los arrecifes de coral, están siendo especialmente vulnerables debido al aumento de la temperatura" +
                    "del agua y la acidificación de los océanos. La mitigación de estos efectos requiere esfuerzos globales para reducir las " +
                    "emisiones de gases de efecto invernadero, promover fuentes de energía renovables y proteger los ecosistemas naturales a " +
                    "través de políticas y acciones concretas en todos los niveles.");

                break;

            case 2:

                listaRespuestas = CalcularHuella()

                break;

            case 3:

            console.log(listaRespuestas);
            

            if (listaRespuestas.length === 0) {
                alert("Aun no has realizado la encuesta para darte los mejores concejos")
            }else{listaRecomendaciones = VerConcejos(listaRespuestas)}

                break;

            case 4:

                Salida()

                break;

            default:
                alert("Parece ser que no has elegido una opcion valida, vuelve a elegir una opcion del menu")
                break;
        }




    } while (eleccion !== 4 );

}

function CalcularHuella() {

    
    let mensaje = " "

    if (confirm("A continuacion pasara a un cuestionario sobre algunas acciones que puede que pasen en tu vida con el fin de calcular si produces demasiada huella de carbono o no \nPresione confirmar para continuar y si no sera devuelto al menu anterior")) {

        toneladasCarbono = 0

        let transporte = confirm("Utilizas transporte personal (como coche o motocicleta) más de 3 veces por semana?")
        if (transporte) {
            toneladasCarbono+= 0.87
            puntaje += 1
                aciertos+= 1 
        }
        
        
        let avion = confirm("¿Sueles viajar en avión más de 2 veces al año?")
        if (avion) {
            toneladasCarbono+= 0.37
            puntaje += 1
                aciertos+= 1 
        }

        let carneRoja = confirm("¿Consumes carne roja más de 3 veces a la semana?")
        if (carneRoja) {
            toneladasCarbono+= 2.46
            puntaje += 1
                aciertos+= 1 
        }

        let comida = confirm("¿Desperdicias alimentos frecuentemente o tiras comida a la basura?")
        if (comida) {
            toneladasCarbono+= 0.96
            puntaje += 1
                aciertos+= 1 
        }

        let energia = confirm("¿Tu hogar no utiliza fuentes de energía renovable (como paneles solares)?")
        if (energia) {
            toneladasCarbono+= 2.4
            puntaje += 1
                aciertos+= 1 
        }

        let malgastoEnergia = confirm("¿Dejas aparatos electrónicos o luces encendidas cuando no los usas?")
        if (malgastoEnergia) {
            toneladasCarbono+= 0.14
            puntaje += 1
                aciertos+= 1 
        }

        let basura = confirm("¿Generas más de 2 bolsas de basura por semana en tu hogar?")
        if (basura) {
            toneladasCarbono+= 0.54
            puntaje += 1
            aciertos+= 1 
        }

        let agua = confirm("¿Tienes un uso elevado de agua caliente sin control (duchas largas, etc)")
        if (agua) {
            toneladasCarbono+= 1.46
            puntaje += 1
            aciertos+= 1 
        }

        let respuestas = [transporte, avion, carneRoja, comida, energia, malgastoEnergia, basura, agua]



        if (puntaje >= 0 && puntaje <= 3) {
            mensaje = "¡Bien hecho! \n\nTienes hábitos sostenibles que ayudan a reducir tu huella de carbono. Continúa practicando acciones responsables y considera pequeños ajustes para mejorar aún más, como optar por energías renovables o plantar árboles.\n  Generas aproximadamente de: "+ toneladasCarbono +" toneladas de CO₂/año."

            
        } else if (puntaje >= 4 && puntaje <= 6) {

            mensaje = "Buen esfuerzo, pero hay margen para mejorar. \n\nTus actividades generan una cantidad moderada de emisiones. Puedes reducirlas limitando el consumo de carne, disminuyendo el uso de transporte personal o adoptando hábitos de reciclaje y ahorro energético.\n Generas aproximadadamentede: "+ toneladasCarbono +" toneladas de CO₂/año."


        } else if (puntaje >= 7 && puntaje < 9) {

            mensaje = "Es momento de actuar. \n\nTus actividades tienen un impacto significativo en el medio ambiente. Considera cambios importantes, como usar transporte público, consumir alimentos locales, reducir el desperdicio y ser más consciente del uso de energía. ¡Cada acción cuenta! \n Generas aproximadamente de: "+ toneladasCarbono +" toneladas de CO₂/año."

        }

        alert("su puntaje es de: " + puntaje + "\n " + mensaje)

        return respuestas

    } else {
        Menu()
    }

}

function VerConcejos(listaRespuestas) {
    let lista = Concejos (listaRespuestas)
    let mensajeConcejos = ""

    alert("Estos son los mejores concejos que tenemos para ti:")

    for (let index = 0; index < lista.length; index++) {
        
         alert(lista[index])
        
    }

    alert(mensajeConcejos)
}

function Concejos(listaRespuestas) {

    let listaConcejos = []

    if (listaRespuestas[0]) {
        let opcion = "Opta por el transporte público, bicicleta o caminar cuando sea posible. También considera compartir el coche con otras personas (carpooling) para reducir emisiones."

      listaConcejos.push(opcion)
    }

    if (listaRespuestas[1]) {
        let opcion = "Intenta reducir la frecuencia de tus viajes en avión, especialmente en trayectos cortos, y considera opciones como el tren o reuniones virtuales."

      listaConcejos.push(opcion)
    }

    

    if (listaRespuestas[2]) {
        let opcion = "Procura comer menos carne roja y opta por alimentos más sostenibles y saludables, como legumbres, tofu, quinoa o frutos secos. Incorporar días sin carne en tu semana puede marcar una gran diferencia."

      listaConcejos.push(opcion)
    }

    if (listaRespuestas[3]) {
        let opcion = "Planifica tus comidas, almacena los alimentos adecuadamente y utiliza las sobras en nuevas recetas. Así evitarás el desperdicio y reducirás tu impacto ambiental."

      listaConcejos.push(opcion)
    }

    if (listaRespuestas[4]) {
        let opcion = "Considera instalar paneles solares si es viable en tu área o contrata proveedores de energía que utilicen fuentes renovables. Reducirás tu dependencia de combustibles fósiles."

      listaConcejos.push(opcion)
    }

    if (listaRespuestas[5]) {
        let opcion = "Apaga los aparatos electrónicos y luces cuando no los necesites. Considera usar regletas con interruptores y bombillas LED para ahorrar energía."

      listaConcejos.push(opcion)
    }

    if (listaRespuestas[6]) {
        let opcion = "Sé más consciente al separar residuos. Reutiliza, recicla y compostea siempre que sea posible para reducir la cantidad de basura que llega a los vertederos."

      listaConcejos.push(opcion)
    }

    if (listaRespuestas[7]) {
        let opcion = "Reduce el tiempo de las duchas y utiliza cabezales de ducha de bajo flujo. También puedes ajustar el calentador a una temperatura más baja para ahorrar energía."

      listaConcejos.push(opcion)
    }

    concejosFinales= listaConcejos

    return listaConcejos
   
    
}

function Salida() {

    let mensajeSalida = ""

    if (concejosFinales.length < 3) {
        mensajeSalida = "¡Sigamos cuidando de nuestro planeta!"
    }else{
        mensajeSalida+= concejosFinales[0] + "\n\n" + concejosFinales[1]+ "\n\n" + concejosFinales[2]
    }
    alert(" Muchas Gracias Por Usar La aplicacion, Se informa que las toneladas de Carbono creadas al Año son: " + toneladasCarbono+ " toneladas de CO₂/año\n Respuestas afirmativas en la encuesta: " + aciertos+"/8");
    alert("Recomendaciones Particulares: \n" + mensajeSalida)

}
