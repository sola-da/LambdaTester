





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d && isValue(d.value);
};
var argument2 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument3 = function (file) {
 callbackArguments.push(arguments) 

    return /\.json$/.test(file);
};
var argument4 = [-1,157,100,25,0,607,213,1.7976931348623157e+308];
var argument5 = function (a) {
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
var argument6 = {"893":3.6642119533505707e+307,"d":"","Ov":655,"1.5229082987936669e+308":"","4.3267806068490537e+307":5e-324,"6.931414536955372e+307":""};
var base_0 = ["o:","H","`8","+,g","5b|"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o:","H","`8","+,g","5b|"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test91.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)