





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    tmp_args.push(key);
    tmp_args.push(args[1][key]);
};
var argument2 = function (key) {
 callbackArguments.push(arguments) 

    return createPredicateFromKeyValue(key, obj[key]);
};
var argument3 = [122,627,126,5e-324,0,25,25,126,242];
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    return pv.color(c);
};
var argument5 = true;
var argument6 = true;
var argument7 = function (obj) {
 callbackArguments.push(arguments) 

    return rename_key_value(obj);
};
var base_0 = ["b",627,5e-324]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["b",627,5e-324]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["b",627,5e-324]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["b",627,5e-324]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test263.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)