





var callbackArguments = [];
var argument1 = function (k, v) {
 callbackArguments.push(arguments) 

    _r.actions[k] = _r.actions[k];
};
var argument2 = true;
var argument3 = null;
var argument4 = function (row) {
 callbackArguments.push(arguments) 

    for (var field in row) {
        if (!fieldSet.has(field)) {
            fields.push(fieldSet.add(field));
        }
    }
};
var argument5 = r_0;
var argument6 = 1.335648305609538e+307;
var argument7 = function (c) {
 callbackArguments.push(arguments) 

    arr.push(fetchValue(vars, n, c));
};
var argument8 = function (prop) {
 callbackArguments.push(arguments) 

    parseCsdlNavProperty(entityType, prop, schema);
};
var argument9 = true;
var base_0 = [25,"p",25,-1,"Hq&","&"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,"p",25,-1,"Hq&","&"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,"p",25,-1,"Hq&","&"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,"p",25,-1,"Hq&","&"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test721.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)