





var callbackArguments = [];
var argument1 = function (desc) {
 callbackArguments.push(arguments) 

    var bundle = dojo.i18n.getLocalization(desc.pkg, desc.name, locale);
    buddhist = dojo.mixin(buddhist, bundle);
};
var argument2 = function (key) {
 callbackArguments.push(arguments) 

    var opt = obj.$options[key];
    if ('value' in opt)
        obj.setOption(key, opt.value);
};
var argument3 = null;
var argument4 = false;
var argument5 = function (field) {
 callbackArguments.push(arguments) 

    field.setChecked(field.originalState);
};
var argument6 = false;
var argument7 = false;
var argument8 = function (key, node) {
 callbackArguments.push(arguments) 

    console.log(node.layoutData);
};
var argument9 = null;
var base_0 = [100,0,705,823,122,655,242,783,100,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,0,705,823,122,655,242,783,100,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,0,705,823,122,655,242,783,100,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,0,705,823,122,655,242,783,100,823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test546.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)