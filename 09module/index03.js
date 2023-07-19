
let result = 0;

function add(x) {
    result  += x;
}
function minus(x) {
    result -= x;
}


//default방식으로 
export default {a : add, b : minus};