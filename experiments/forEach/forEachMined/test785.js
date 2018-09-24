





var callbackArguments = [];
var argument1 = function (fkName) {
 callbackArguments.push(arguments) 

    var fkProp = oldValue.entityType.getProperty(fkName);
    if (!fkProp.isPartOfKey) {
        oldValue.setProperty(fkName, null);
    }
};
var argument2 = null;
var argument3 = function (line) {
 callbackArguments.push(arguments) 

    var matched = line.match(regex);
    if (options.inverse && !matched || !options.inverse && matched)
        grep += line + '\n';
};
var argument4 = r_1;
var argument5 = false;
var argument6 = function (rawCo) {
 callbackArguments.push(arguments) 

    var newCo = dataType._createInstanceCore(target, dp);
    dataType._updateTargetFromRaw(newCo, rawCo, rawValueFn);
    dataType._initializeInstance(newCo);
    oldVal.push(newCo);
};
var argument7 = 5.220483001833016e+307;
var argument8 = r_1;
var argument9 = function (animationFactory) {
 callbackArguments.push(arguments) 

    var created = registerAnimation(animationFactory, animationEvent);
    if (!created && isSetClassOperation) {
        registerAnimation(animationFactory, 'addClass');
        registerAnimation(animationFactory, 'removeClass');
    }
};
var argument10 = null;
var argument11 = "QL";
var base_0 = ["++m",213,"6I","Ue|",655,157]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["++m",213,"6I","Ue|",655,157]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["++m",213,"6I","Ue|",655,157]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["++m",213,"6I","Ue|",655,157]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test785.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)