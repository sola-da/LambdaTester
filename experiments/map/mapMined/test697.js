





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    return {
        name: a.name,
        value: a.value.eval(env)
    };
};
var argument2 = function (model) {
 callbackArguments.push(arguments) 

    return model.get(attr);
};
var argument3 = null;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return quote(d.metadata.id);
};
var argument5 = r_0;
var argument6 = true;
var argument7 = function (originalGroupId) {
 callbackArguments.push(arguments) 

    if (idMappings['groups'][currentBatch][originalGroupId]) {
        return idMappings['groups'][currentBatch][originalGroupId].generatedId;
    } else {
        console.log('    Warning: Could not map content membership for user "%s"', originalGroupId);
        return originalGroupId;
    }
};
var argument8 = null;
var base_0 = [627,5e-324,460,607]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,5e-324,460,607]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,5e-324,460,607]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,5e-324,460,607]
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
require("fs").writeFileSync("./experiments/map/mapMined/test697.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)