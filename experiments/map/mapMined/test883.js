





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    a = a.cloneNode(deep != undefined ? deep : true);
    a.$events = null;
    return a;
};
var argument2 = null;
var argument3 = "_";
var argument4 = function (y) {
 callbackArguments.push(arguments) 

    var i = vars.data.time.dataSteps.indexOf(y);
    return i >= 0 ? vars.data.time.values[i] : years[y];
};
var argument5 = [0,"5n"];
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument7 = function (m) {
 callbackArguments.push(arguments) 

    return [
        m[0].utc,
        m[1]
    ];
};
var base_0 = [627,714,0,-1,618]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,714,0,-1,618]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,714,0,-1,618]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,714,0,-1,618]
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
require("fs").writeFileSync("./experiments/map/mapMined/test883.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)