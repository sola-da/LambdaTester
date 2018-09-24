





var callbackArguments = [];
var argument1 = function (arg) {
 callbackArguments.push(arguments) 

    return arg.value;
};
var argument2 = null;
var argument3 = function (x) {
 callbackArguments.push(arguments) 

    return x.id;
};
var argument4 = {"5":"","157":8.742360199115878e+307,"595":5.392270575615071e+307,"783":2.6500049912982496e+307,"c":893,"-1":"(i","4.4701078253548787e+307":"","":"7'","9.083155541941172e+307":403,"1.6894664701351425e+308":213};
var argument5 = function (bundleLocation) {
 callbackArguments.push(arguments) 

    load(bundleLocation);
    return getDefinition(bundleLocation).promise;
};
var argument6 = null;
var argument7 = r_2;
var argument8 = function (originalGroupId) {
 callbackArguments.push(arguments) 

    if (idMappings['groups'][currentBatch][originalGroupId]) {
        return idMappings['groups'][currentBatch][originalGroupId].generatedId;
    } else {
        console.log('    Warning: Could not map content membership for user "%s"', originalGroupId);
        return originalGroupId;
    }
};
var base_0 = [595,49,893,122,460,823,618]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,49,893,122,460,823,618]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test808.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)