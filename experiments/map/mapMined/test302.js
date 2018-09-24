





var callbackArguments = [];
var argument1 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument2 = false;
var argument3 = null;
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument5 = r_1;
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    return value * 2;
};
var argument7 = null;
var argument8 = function (t) {
 callbackArguments.push(arguments) 

    return t.height;
};
var argument9 = r_3;
var argument10 = null;
var base_0 = [-1,627,823,213,783,100,607,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,627,823,213,783,100,607,893]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,627,823,213,783,100,607,893]
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
require("fs").writeFileSync("./experiments/map/mapMined/test302.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)