





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument2 = null;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    return {
        x: d.x,
        value: d.value,
        id: d.id
    };
};
var argument4 = 1.0787368497328466e+308;
var argument5 = null;
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return typeof d === 'string' ? group[d] : d;
};
var argument7 = 1.192219436083517e+308;
var argument8 = 1.7976931348623157e+308;
var argument9 = function (e) {
 callbackArguments.push(arguments) 

    return {
        errorName: e.ErrorName,
        entityTypeName: MetadataStore.normalizeTypeName(e.EntityTypeName),
        keyValues: e.KeyValues,
        propertyName: e.PropertyName && propNameFn(e.PropertyName),
        errorMessage: e.ErrorMessage
    };
};
var argument10 = true;
var argument11 = true;
var base_0 = [25]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapMined/test141.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)