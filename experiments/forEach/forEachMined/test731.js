





var callbackArguments = [];
var argument1 = function (identifierRegex) {
 callbackArguments.push(arguments) 

    if (!prefix && identifierRegex)
        prefix = util.retrievePrecedingIdentifier(line, pos.column, identifierRegex);
};
var argument2 = true;
var argument3 = false;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    dst[key] = clone(src[key]);
};
var argument5 = r_0;
var argument6 = 1.516924286414467e+308;
var argument7 = function (onLoad) {
 callbackArguments.push(arguments) 

    onLoad && onLoad(module);
};
var argument8 = false;
var argument9 = true;
var argument10 = function (node) {
 callbackArguments.push(arguments) 

    node.graphics.removeAll(node.userData.rulelines);
    node.userData.rulelines = [];
    createRule.call(this, node);
};
var argument11 = true;
var argument12 = true;
var base_0 = [-1,655,403,655,403,705,595,655,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,655,403,655,403,705,595,655,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,655,403,655,403,705,595,655,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,655,403,655,403,705,595,655,607]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test731.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)