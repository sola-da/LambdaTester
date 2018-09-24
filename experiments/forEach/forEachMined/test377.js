





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    $('<option/>').attr('value', key).text(key).appendTo(select);
};
var argument2 = function (item) {
 callbackArguments.push(arguments) 

    values.push(item.get(attr));
};
var argument3 = null;
var argument4 = function (trait) {
 callbackArguments.push(arguments) 

    forEach(getOwnPropertyNames(trait), function (name) {
        var pd = trait[name];
        if (!hasOwnProperty(newTrait, name) || newTrait[name].required) {
            newTrait[name] = pd;
        }
    });
};
var argument5 = null;
var argument6 = r_1;
var argument7 = function (mapping) {
 callbackArguments.push(arguments) 

    newMap[mapping[0]] = mapping[1];
};
var base_0 = ["X[z","|",",K"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X[z","|",",K"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["X[z","|",",K"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X[z","|",",K"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test377.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)