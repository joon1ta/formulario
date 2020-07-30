var inputs = document.getElementsByClassName('formulario_input');



for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}



/* Obtener todos los elemetnos(mediante document.getElementsByClassName) con la clase 
    FORMULARIO_INPUT y los almaceno
    en la variable "inputs"(es un array porque almacena varios datos
    en este caso los elemtnso de la clase FORMULARIO_INPUT)
    luego voy a hacer un recorrido con el FOR la misma cantidad de veces
    que sean los elementos que se obtienen de la clase FORMULARIO_INPUT
    , seguido va a escuchar el evento "KEY_UP" mediante el ADD_EVENT_LISTENER
    donde selecciono la variable creada INPUTS [i] le digo que vea cual input esta seleccionado
    y va a evaluar que ese elemento INPUT tenga el valor mediante VALUE y sea
    mayor o igual (>=) a 1 mediante el LENGHT va a seleccionar al siguiente elemtno
    que en este caso son los LABEL y le va a agergar la clase 'FIJAR' por lo tanto
    mientras eso se cumpla se va a mantener arriba como lo indica la clase creada
    y sino es mayor a uno le va a remover la clase 'FIJAR'*/