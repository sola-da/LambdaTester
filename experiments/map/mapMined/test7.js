





var callbackArguments = [];
var argument1 = function (evt) {
 callbackArguments.push(arguments) 

    return evt + '.webshimspolyfill';
};
var argument2 = true;
var argument3 = function (validator) {
 callbackArguments.push(arguments) 

    var index = validators.push(validator) - 1;
    return 'if ((result = validators[' + index + '].validate(value)) !== true) {\n' + '  isValid = false;\n' + '  error = result;\n' + '}\n';
};
var argument4 = null;
var argument5 = "";
var argument6 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument7 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var base_0 = ["B","*GI","^Wb","-"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B","*GI","^Wb","-"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test7.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)