





var callbackArguments = [];
var argument1 = function (originalGroupId) {
 callbackArguments.push(arguments) 

    if (idMappings['groups'][currentBatch][originalGroupId]) {
        return idMappings['groups'][currentBatch][originalGroupId].generatedId;
    } else {
        console.log('    Warning: Could not map content membership for user "%s"', originalGroupId);
        return originalGroupId;
    }
};
var argument2 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument3 = function (part) {
 callbackArguments.push(arguments) 

    part = part.replace(/:/g, '_');
    return _ = path.join(_, part);
};
var argument4 = false;
var argument5 = function (a) {
 callbackArguments.push(arguments) 

    return a.toCSS();
};
var base_0 = [-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100]
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapMined/test528.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)