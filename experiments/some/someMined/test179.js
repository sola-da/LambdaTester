





var callbackArguments = [];
var argument1 = function (node, index) {
 callbackArguments.push(arguments) 

    node = Y.one(node);
    context = context || node;
    return fn.call(context, node, index, instance);
};
var argument2 = {"xYP{X8":"rui"};
var argument3 = "LE%";
var argument4 = function (service) {
 callbackArguments.push(arguments) 

    var match = serviceURL.match(service.regexp);
    if (match) {
        request.urlInfo.pathname = match[1];
        response = service.module.call(null, request);
        return true;
    }
};
var argument5 = r_1;
var argument6 = false;
var argument7 = function (alarm) {
 callbackArguments.push(arguments) 

    return alarm.name === alarmName;
};
var argument8 = true;
var argument9 = false;
var argument10 = function (fk, i) {
 callbackArguments.push(arguments) 

    var keyProp = keyProps[i].name;
    var keyVal = parentEntity.getProperty(keyProp);
    var fkVal = a.getProperty(fk);
    return keyVal !== fkVal;
};
var argument11 = false;
var argument12 = null;
var base_0 = [59,157,1.7976931348623157e+308,"B;",49]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,157,1.7976931348623157e+308,"B;",49]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,157,1.7976931348623157e+308,"B;",49]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,157,1.7976931348623157e+308,"B;",49]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/some/someMined/test179.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)