





var callbackArguments = [];
var argument1 = function (field) {
 callbackArguments.push(arguments) 

    if (field.getChecked()) {
        values.push(field.getValue());
    }
};
var argument2 = null;
var argument3 = function (v) {
 callbackArguments.push(arguments) 

    v.index = i++;
};
var argument4 = function (path) {
 callbackArguments.push(arguments) 

    entityType.getProperty(path, true);
};
var argument5 = function (e) {
 callbackArguments.push(arguments) 

    e.subdivide();
};
var base_0 = [893,59,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,59,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,59,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,59,82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test764.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)