





var callbackArguments = [];
var argument1 = function (field) {
 callbackArguments.push(arguments) 

    this[field] = val;
};
var argument2 = function (lang) {
 callbackArguments.push(arguments) 

    if (lang.get('locale') != workingL) {
        newL.push(lang.getData());
    }
};
var argument3 = null;
var argument4 = 607;
var argument5 = function (entity) {
 callbackArguments.push(arguments) 

    var serverKeys = [];
    var aspect = entity.entityAspect;
    __objectForEach(aspect._validationErrors, function (key, ve) {
        if (ve.isServerError)
            serverKeys.push(key);
    });
    if (serverKeys.length === 0)
        return;
    aspect._processValidationOpAndPublish(function () {
        serverKeys.forEach(function (key) {
            aspect._removeValidationError(key);
        });
    });
};
var argument6 = false;
var argument7 = false;
var argument8 = function (p) {
 callbackArguments.push(arguments) 

    secondaries = secondaries.concat(vars.edges.connections(p[vars.id.value], vars.id.value, true));
};
var argument9 = true;
var argument10 = r_1;
var base_0 = ["vmU","PlID","L","qD"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["vmU","PlID","L","qD"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["vmU","PlID","L","qD"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["vmU","PlID","L","qD"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test331.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)