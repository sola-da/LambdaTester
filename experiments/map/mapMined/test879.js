





var callbackArguments = [];
var argument1 = function (name, i) {
 callbackArguments.push(arguments) 

    return JSON.stringify(name) + ': d[' + i + ']';
};
var argument2 = false;
var argument3 = function (validator) {
 callbackArguments.push(arguments) 

    var index = validators.push(validator) - 1;
    return 'if ((result = validators[' + index + '].validate(value)) !== true) {\n' + '  isValid = false;\n' + '  error = result;\n' + '}\n';
};
var argument4 = {};
var argument5 = [618,126,607,0,607,59,242];
var argument6 = function () {
 callbackArguments.push(arguments) 

    return [];
};
var argument7 = r_2;
var argument8 = r_2;
var argument9 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument10 = "";
var base_0 = ["2"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test879.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)