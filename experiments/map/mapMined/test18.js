





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    return xs[id];
};
var argument2 = function (x) {
 callbackArguments.push(arguments) 

    return x * OIMO.INV_SCALE;
};
var argument3 = 1.1277338096018102e+308;
var argument4 = "J% -$";
var argument5 = function (atom) {
 callbackArguments.push(arguments) 

    var datum = def.getOwn(datumsBySeriesKey, atom.key);
    return datum ? datum.atoms.value.value : null;
};
var argument6 = function (origin) {
 callbackArguments.push(arguments) 

    return extractLocationOrigin(origin);
};
var argument7 = true;
var argument8 = null;
var base_0 = [618,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,893]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,893]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,893]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test18.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)