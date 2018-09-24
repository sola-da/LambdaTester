





var callbackArguments = [];
var argument1 = function (value, key) {
 callbackArguments.push(arguments) 

    _.forEach(additionalGlobals, function (item, name) {
        stringsApp[key] = stringsApp[key].replace(new RegExp('{' + name + '}', 'g'), additionalGlobals[name]);
    });
    strings[key] = stringsApp[key];
};
var argument2 = false;
var argument3 = function (sign) {
 callbackArguments.push(arguments) 

    sign.applyExtensions();
};
var argument4 = null;
var argument5 = {"460":"1","(":9.498495708341228e+306};
var argument6 = function (key, node) {
 callbackArguments.push(arguments) 

    node.layoutData.dx *= that.speed * 10;
    node.layoutData.dy *= that.speed * 10;
};
var argument7 = null;
var argument8 = false;
var argument9 = function (dimInfo) {
 callbackArguments.push(arguments) 

    var dimName = dimInfo.name, spec = dimInfo.spec;
    spec = pvc.data.DimensionType.extendSpec(dimName, spec, translOptions);
    complexType.addDimension(dimName, spec);
};
var argument10 = r_3;
var base_0 = [126,49,655,5e-324,969,843,823,157,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,49,655,5e-324,969,843,823,157,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,49,655,5e-324,969,843,823,157,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,49,655,5e-324,969,843,823,157,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test92.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)