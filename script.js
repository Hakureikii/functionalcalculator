function append(val) {
   display.value += val;

}

function calculate() {
   display.value = eval(display.value);

}

function del_all() {
   display.value = "";

}

function backspace() {
   display.value = display.value.slice(0, -1)
   
}