





var callbackArguments = [];
var argument1 = function (originalUserId) {
 callbackArguments.push(arguments) 

    if (idMappings['users'][currentBatch][originalUserId]) {
        return idMappings['users'][currentBatch][originalUserId].generatedId;
    } else {
        console.log('    Warning: Could not map group membership for user "%s"', originalUserId);
        return originalUserId;
    }
};
var argument2 = 705;
var argument3 = 969;
var argument4 = function (originalUserId) {
 callbackArguments.push(arguments) 

    if (idMappings['users'][currentBatch][originalUserId]) {
        return idMappings['users'][currentBatch][originalUserId].generatedId;
    } else {
        console.log('    Warning: Could not map group membership for user "%s"', originalUserId);
        return originalUserId;
    }
};
var argument5 = function (zone) {
 callbackArguments.push(arguments) 

    return _.extend(zone.$, { name: zone._ });
};
var argument6 = r_2;
var argument7 = function (word) {
 callbackArguments.push(arguments) 

    return word.charAt(0).toUpperCase() + word.substring(1);
};
var argument8 = "";
var base_0 = [969,627,655]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,627,655]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,627,655]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,627,655]
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
require("fs").writeFileSync("./experiments/map/mapMined/test990.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)