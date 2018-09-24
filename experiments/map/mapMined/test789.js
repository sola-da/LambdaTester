





var callbackArguments = [];
var argument1 = function (s) {
 callbackArguments.push(arguments) 

    return s.replace('\\.', '.');
};
var argument2 = null;
var argument3 = [157,627,82,5e-324,627,1.7976931348623157e+308,595];
var argument4 = function (e, t) {
 callbackArguments.push(arguments) 

    return [[
            t,
            e
        ]];
};
var argument5 = null;
var argument6 = false;
var argument7 = function (match) {
 callbackArguments.push(arguments) 

    return match.route;
};
var argument8 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument9 = {};
var argument10 = null;
var base_0 = [-100,705,-100,714,59,122,49]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,705,-100,714,59,122,49]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,705,-100,714,59,122,49]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,705,-100,714,59,122,49]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test789.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)