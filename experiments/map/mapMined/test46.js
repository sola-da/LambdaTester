





var callbackArguments = [];
var argument1 = function (field) {
 callbackArguments.push(arguments) 

    return field.toJSON();
};
var argument2 = 213;
var argument3 = "";
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    var tmp = item, color;
    if (Lang.isString(item)) {
        color = AColor.toHex(item);
        tmp = {
            name: color,
            value: color
        };
    }
    return tmp;
};
var argument5 = {"|r!?":6.54778453695907e+307,"3.2708075848581173e+307":""};
var argument6 = function (s) {
 callbackArguments.push(arguments) 

    return s.replace('\\.', '.');
};
var argument7 = function (fold) {
 callbackArguments.push(arguments) 

    return fold.clone();
};
var base_0 = [25,618,714]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,618,714]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,618,714]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,618,714]
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
require("fs").writeFileSync("./experiments/map/mapMined/test46.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)