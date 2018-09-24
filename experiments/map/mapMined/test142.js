





var callbackArguments = [];
var argument1 = function (el) {
 callbackArguments.push(arguments) 

    return el[0];
};
var argument2 = function (match) {
 callbackArguments.push(arguments) 

    return match.route;
};
var argument3 = null;
var argument4 = 1.7079036091896586e+308;
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    return x.id;
};
var argument6 = null;
var argument7 = function (v, i) {
 callbackArguments.push(arguments) 

    if (v == null) {
        v = i > 2 ? 1 : 0;
    }
    if (i && i < 3) {
        v = Math.round(v * 100) + '%';
    }
    return v;
};
var base_0 = [655,25,714,705,893,82,126,25,126]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,25,714,705,893,82,126,25,126]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/map/mapMined/test142.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)