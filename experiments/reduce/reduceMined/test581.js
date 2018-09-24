





var callbackArguments = [];
var argument1 = function (obj, style) {
 callbackArguments.push(arguments) 

    style = style.split(':').map(function (a) {
        return a.trim();
    });
    obj[style[0]] = style[1];
    return obj;
};
var argument2 = null;
var argument3 = 100;
var argument4 = function (prev, cur) {
 callbackArguments.push(arguments) 

    numLinesEst++;
    if (cur.indexOf('\n') >= 0)
        numLinesEst++;
    return prev + cur.length + 1;
};
var argument5 = true;
var argument6 = true;
var argument7 = function (o, model) {
 callbackArguments.push(arguments) 

    if (!o[model])
        o[model] = 0;
    o[model]++;
    return o;
};
var argument8 = r_2;
var argument9 = function (a, el) {
 callbackArguments.push(arguments) 

    el = el.evaluate(compressor);
    if (a.length == 0 || el.length == 1) {
        a.push(el);
    } else {
        var last = a[a.length - 1];
        if (last.length == 2) {
            var val = '' + last[1] + separator + el[1];
            a[a.length - 1] = [
                make_node_from_constant(compressor, val, last[0]),
                val
            ];
        } else {
            a.push(el);
        }
    }
    return a;
};
var argument10 = r_0;
var base_0 = ["HD9 ","wj","zn4","*z","S",":Uw:lSM&","F8","Y","i"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["HD9 ","wj","zn4","*z","S",":Uw:lSM&","F8","Y","i"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["HD9 ","wj","zn4","*z","S",":Uw:lSM&","F8","Y","i"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["HD9 ","wj","zn4","*z","S",":Uw:lSM&","F8","Y","i"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/reduce/reduceMined/test581.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)