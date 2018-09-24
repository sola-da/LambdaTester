





var callbackArguments = [];
var argument1 = function (child) {
 callbackArguments.push(arguments) 

    child._onRenderEnd(animated);
};
var argument2 = false;
var argument3 = null;
var argument4 = function (id) {
 callbackArguments.push(arguments) 

    heights[id] = maxHeight;
};
var argument5 = "J";
var argument6 = function (attr) {
 callbackArguments.push(arguments) 

    node.removeAttributeNS(attr.namespaceURI, attr.name);
};
var argument7 = null;
var argument8 = function (copyProp) {
 callbackArguments.push(arguments) 

    if (copyProp in descs[prop]) {
        descs[prop][propType][copyProp] = descs[prop][copyProp];
        delete descs[prop][copyProp];
    }
};
var argument9 = false;
var argument10 = false;
var base_0 = ["w","U","9"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["w","U","9"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["w","U","9"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["w","U","9"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test64.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)