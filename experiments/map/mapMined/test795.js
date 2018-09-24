





var callbackArguments = [];
var argument1 = function (atom) {
 callbackArguments.push(arguments) 

    var datum = def.getOwn(datumsBySeriesKey, atom.key);
    return datum ? datum.atoms.value.value : null;
};
var argument2 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument3 = true;
var argument4 = function (a) {
 callbackArguments.push(arguments) 

    return a.toCSS();
};
var argument5 = "";
var argument6 = function (kp) {
 callbackArguments.push(arguments) 

    return Predicate.create(kp.name, FilterQueryOp.Equals, entity.getProperty(kp.name));
};
var argument7 = r_3;
var base_0 = [-100,655,"7",242,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,655,"7",242,783]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,655,"7",242,783]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,655,"7",242,783]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test795.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)