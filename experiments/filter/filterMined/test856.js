





var callbackArguments = [];
var argument1 = function (element, index, array) {
 callbackArguments.push(arguments) 

    return array.indexOf(element) >= index;
};
var argument2 = [969,714,82];
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    return __data_selection_isselectable(d);
};
var argument4 = "";
var argument5 = {"157":"X","X":9.438603624160825e+307};
var argument6 = function (patch) {
 callbackArguments.push(arguments) 

    return !/[\/]length/gi.test(patch.path);
};
var argument7 = true;
var argument8 = function (a) {
 callbackArguments.push(arguments) 

    if (relationArray._addsInProcess.indexOf(a) >= 0) {
        return false;
    }
    return fkPropNames.some(function (fk, i) {
        var keyProp = keyProps[i].name;
        var keyVal = parentEntity.getProperty(keyProp);
        var fkVal = a.getProperty(fk);
        return keyVal !== fkVal;
    });
};
var base_0 = [1.7976931348623157e+308,126,969,714,969,122]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,126,969,714,969,122]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test856.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)