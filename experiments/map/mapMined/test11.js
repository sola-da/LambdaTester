





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    x = x.clone();
    x.start.row += diff;
    x.end.row += diff;
    return x;
};
var argument2 = function (originalGroupId) {
 callbackArguments.push(arguments) 

    if (idMappings.groups[currentBatch][originalGroupId]) {
        return idMappings.groups[currentBatch][originalGroupId].generatedId;
    } else {
        console.log('    Warning: Could not map folder membership for group "%s"', originalGroupId);
        return originalGroupId;
    }
};
var argument3 = null;
var argument4 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument5 = null;
var argument6 = r_2;
var argument7 = function (originalUserId) {
 callbackArguments.push(arguments) 

    if (idMappings['users'][currentBatch][originalUserId]) {
        return idMappings['users'][currentBatch][originalUserId].generatedId;
    } else {
        console.log('    Warning: Could not map discussions membership for user "%s"', originalUserId);
        return originalUserId;
    }
};
var argument8 = {"w":5.194196762362845e+307,"1.936277577683017e+307":"u]","":1.373038351134696e+307,"7.685315895069419e+307":1.6514874466787227e+308};
var base_0 = [460,100,460,-100,49,618,655,49,969]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,100,460,-100,49,618,655,49,969]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,100,460,-100,49,618,655,49,969]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,100,460,-100,49,618,655,49,969]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test11.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)