





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return !!value;
};
var argument2 = null;
var argument3 = function (value, index, array) {
 callbackArguments.push(arguments) 

    return done || (done = !predicate(value, index, array));
};
var argument4 = r_1;
var argument5 = function (w) {
 callbackArguments.push(arguments) 

    return w.moveTo === '#' + view.id || w.moveTo === view.id;
};
var argument6 = null;
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return !d.disabled;
};
var argument8 = r_3;
var argument9 = null;
var base_0 = [82,595,0,-100,655,82,627,122]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,595,0,-100,655,82,627,122]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test37.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)