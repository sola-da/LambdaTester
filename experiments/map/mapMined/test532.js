





var callbackArguments = [];
var argument1 = function (rel) {
 callbackArguments.push(arguments) 

    return '<' + links[rel] + '>; rel="' + rel + '"';
};
var argument2 = {"1.2711241329015938e+308":"}"};
var argument3 = null;
var argument4 = function (fragment) {
 callbackArguments.push(arguments) 

    return fragment.toCSS ? fragment : new Anonymous(fragment);
};
var argument5 = {"25":""};
var argument6 = function () {
 callbackArguments.push(arguments) 

    return this.elements ? jQuery.makeArray(this.elements) : this;
};
var argument7 = true;
var argument8 = r_2;
var argument9 = function (atom) {
 callbackArguments.push(arguments) 

    return atom.label || '- ';
};
var base_0 = ["_",82,"fEi"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_",82,"fEi"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_",82,"fEi"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test532.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)