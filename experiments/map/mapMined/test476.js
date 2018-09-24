





var callbackArguments = [];
var argument1 = function (arg) {
 callbackArguments.push(arguments) 

    return arg + '.js';
};
var argument2 = null;
var argument3 = false;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
};
var argument5 = r_1;
var argument6 = function (field) {
 callbackArguments.push(arguments) 

    return {
        field: field.id,
        width: field.get('width'),
        value: doc.getFieldValue(field)
    };
};
var argument7 = null;
var argument8 = r_1;
var argument9 = function (e) {
 callbackArguments.push(arguments) 

    return e === t ? null : e;
};
var argument10 = r_3;
var argument11 = null;
var base_0 = [49,893,893,126]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,893,893,126]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,893,893,126]
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
require("fs").writeFileSync("./experiments/map/mapMined/test476.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)