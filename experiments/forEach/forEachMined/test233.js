





var callbackArguments = [];
var argument1 = function (variable) {
 callbackArguments.push(arguments) 

    var name = variable.name;
    if (!variable.defs.length) {
        return;
    }
    if (!hasOwnProperty.call(map, name)) {
        map[variable.name] = scope;
    }
};
var argument2 = "J";
var argument3 = function (type) {
 callbackArguments.push(arguments) 

    var typeAxes = this.axesByType[type];
    typeAxes && def.query(typeAxes).reverse().each(function (axis) {
        this._createAxisPanel(axis);
    }, this);
};
var argument4 = function (text, index) {
 callbackArguments.push(arguments) 

    strings.push('#line 1 ', index.toString(), '\n', text);
};
var argument5 = true;
var argument6 = function (field) {
 callbackArguments.push(arguments) 

    if (file.indexOf(field.jsFunctionName) < 0 && fieldIgnores.indexOf(field.jsFunctionName < 0)) {
        fieldsResult.push(field.jsFunctionName);
    }
};
var argument7 = false;
var argument8 = null;
var base_0 = ["R#",",1c","0","@VZ&"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["R#",",1c","0","@VZ&"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["R#",",1c","0","@VZ&"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["R#",",1c","0","@VZ&"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test233.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)