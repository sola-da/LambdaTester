





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    fn();
};
var argument2 = true;
var argument3 = function (pos) {
 callbackArguments.push(arguments) 

    start_positions[pos.n] = {
        'x': (pos.p[0] + 30) / phys_scale,
        'y': (pos.p[1] + 30) / phys_scale,
        'angle': pos.a
    };
};
var argument4 = {"-":"OS","":1.7945908744122196e+307,">":9.975457392247751e+307,"&":"U"};
var argument5 = function (p) {
 callbackArguments.push(arguments) 

    if (Math.abs(value - p) < Math.abs(value - closest)) {
        return closest = p;
    }
};
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    if (inverseNp.isScalar) {
        v.setProperty(inverseNp.name, null);
    } else {
    }
};
var argument7 = r_3;
var argument8 = "C";
var base_0 = ["#","W5"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#","W5"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#","W5"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#","W5"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test934.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)