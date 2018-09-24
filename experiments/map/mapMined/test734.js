





var callbackArguments = [];
var argument1 = function (nn) {
 callbackArguments.push(arguments) 

    return vars.format.value(nn.toString(), t);
};
var argument2 = ["5",")","[","&nb","M","7ko","$","Q:"];
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    return item.reduce(function (model, val, i) {
        model[headers[i]] = val;
        return model;
    }, {});
};
var argument4 = true;
var argument5 = 3.3794996760718543e+307;
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    return {
        errorName: e.ErrorName,
        entityTypeName: MetadataStore.normalizeTypeName(e.EntityTypeName),
        keyValues: e.KeyValues,
        propertyName: e.PropertyName && propNameFn(e.PropertyName),
        errorMessage: e.ErrorMessage
    };
};
var argument7 = false;
var argument8 = null;
var argument9 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument10 = r_3;
var base_0 = [213,403,1.7976931348623157e+308,59,618]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,403,1.7976931348623157e+308,59,618]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,403,1.7976931348623157e+308,59,618]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,403,1.7976931348623157e+308,59,618]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test734.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)