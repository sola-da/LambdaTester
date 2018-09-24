





var callbackArguments = [];
var argument1 = function (name) {
 callbackArguments.push(arguments) 

    var pd = trait[name];
    if (!hasOwnProperty(newTrait, name) || newTrait[name].required) {
        newTrait[name] = pd;
    }
};
var argument2 = {"100":59,"":"","1.1628886723405124e+308":7.003866930906394e+307};
var argument3 = true;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    result[key] = this.getOption(key);
};
var argument5 = "";
var argument6 = function (error, index) {
 callbackArguments.push(arguments) 

    karmakWebpack._error('...');
    karmakWebpack._error(index + 1 + ': ' + error.message);
    karmakWebpack._error('Module: ' + error.module.userRequest);
    karmakWebpack._error('\n' + error.details);
};
var argument7 = null;
var argument8 = function (fn) {
 callbackArguments.push(arguments) 

    if (!fn.only || (fn.only = 'prop' && type == 'prop') || fn.only == 'attr' && type != 'prop') {
        fn.call(elem, value, boolValue, isVal ? 'val' : curType, type);
    }
};
var base_0 = ["J","kI7oq"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["J","kI7oq"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["J","kI7oq"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["J","kI7oq"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test728.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)