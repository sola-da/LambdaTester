





var callbackArguments = [];
var argument1 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument2 = {"0":157,"4.364101042681755e+306":1.6765432452191236e+307,"1.3636977680355524e+308":"Ir","$S:+@":1.0065051776406603e+308,"q":655,"d<":100,"U<":"","1.6438243506233813e+308":"","y":-100,"":"XLrI"};
var argument3 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument4 = function (a, b) {
 callbackArguments.push(arguments) 

    return (a || '').toString() + (b || '').toString();
};
var argument5 = false;
var argument6 = function (hash, r) {
 callbackArguments.push(arguments) 

    if (r instanceof Rule && r.variable === true) {
        hash[r.name] = r;
    }
    return hash;
};
var argument7 = r_0;
var argument8 = null;
var base_0 = ["(]","&:","[",893,843]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(]","&:","[",893,843]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(]","&:","[",893,843]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(]","&:","[",893,843]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test149.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)