





var callbackArguments = [];
var argument1 = function (validator) {
 callbackArguments.push(arguments) 

    var index = validators.push(validator) - 1;
    return 'if ((result = validators[' + index + '].validate(value)) !== true) {\n' + '  isValid = false;\n' + '  error = result;\n' + '}\n';
};
var argument2 = true;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument5 = r_0;
var argument6 = r_1;
var argument7 = function (obj) {
 callbackArguments.push(arguments) 

    return rename_key_value(obj);
};
var argument8 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument9 = r_0;
var argument10 = {"460":"","618":705,"@":595,"":-1,"2.949379309793012e+307":4.75218913225542e+307,"<Hv3":"@"};
var base_0 = [783,157,714,82,893,714,460]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,157,714,82,893,714,460]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,157,714,82,893,714,460]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,157,714,82,893,714,460]
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
require("fs").writeFileSync("./experiments/map/mapMined/test126.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)