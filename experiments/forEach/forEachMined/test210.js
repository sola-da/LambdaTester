





var callbackArguments = [];
var argument1 = function (groupSpec) {
 callbackArguments.push(arguments) 

    var count = groupSpec.count, name = groupSpec.name;
    specsByName[name] = groupSpec;
    groupSpec.indexes = valuesColIndexes && 'M' === name ? valuesColIndexes : availableInputIndexes.splice(0, count);
};
var argument2 = null;
var argument3 = null;
var argument4 = function (y, i) {
 callbackArguments.push(arguments) 

    if (i != 0) {
        var prev = vars.data.time.values[0];
        vars.data.time.dataSteps.push(getDiff(prev, y, periods.indexOf(vars.data.time.stepType)));
    } else {
        vars.data.time.dataSteps = [0];
    }
};
var argument5 = false;
var argument6 = [460,618,157,-100,213,783,25,122,1.7976931348623157e+308];
var argument7 = function (t) {
 callbackArguments.push(arguments) 

    format_key(t, group);
};
var argument8 = ["t9","RA","G"];
var argument9 = r_2;
var argument10 = function (attr) {
 callbackArguments.push(arguments) 

    node.setAttributeNS(attr.namespaceURI, attr.name, attr.value);
};
var argument11 = null;
var argument12 = {"2.9920449445584527e+307":"[","":"q"};
var base_0 = [607,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test210.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)