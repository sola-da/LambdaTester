





var callbackArguments = [];
var argument1 = function (globalVarName) {
 callbackArguments.push(arguments) 

    if (_.isString(globalVars[globalVarName])) {
        globalVars[globalVarName] = globalVars[globalVarName];
    } else {
        globalVars[globalVarName] = JSON.stringify(globalVars[globalVarName]);
    }
};
var argument2 = function (length) {
 callbackArguments.push(arguments) 

    var offsetProp = pvc_Offset.namesSizeToOffset[length], offsetValue = this[offsetProp];
    if (null != offsetValue)
        if ('number' == typeof offsetValue)
            offset[offsetProp] = offsetValue;
        else if (refSize) {
            var refLength = refSize[length];
            null != refLength && (offset[offsetProp] = offsetValue.resolve(refLength));
        }
};
var argument3 = false;
var argument4 = function (arg, i) {
 callbackArguments.push(arguments) 

    if (i)
        output.comma();
    arg.print(output);
};
var argument5 = "nV$&3";
var argument6 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.destroy();
};
var base_0 = [49,627,82,823,705,893,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,627,82,823,705,893,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,627,82,823,705,893,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,627,82,823,705,893,100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test492.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)