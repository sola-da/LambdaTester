





var callbackArguments = [];
var argument1 = function (deregisterWatch) {
 callbackArguments.push(arguments) 

    deregisterWatch();
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    countryById[d.id] = d.name;
};
var argument3 = function (type) {
 callbackArguments.push(arguments) 

    var typeAxes = axesByType[type];
    typeAxes && typeAxes.forEach(processAxis);
};
var argument4 = true;
var argument5 = r_2;
var argument6 = function (name) {
 callbackArguments.push(arguments) 

    names[name] = true;
    append(document.getElementById(name));
    name = name.replace(':', '\\:');
    if (element.querySelectorAll) {
        forEach(element.querySelectorAll('.' + name), append);
        forEach(element.querySelectorAll('.' + name + '\\:'), append);
        forEach(element.querySelectorAll('[' + name + ']'), append);
    }
};
var base_0 = [969,655,100,714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,655,100,714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,655,100,714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,655,100,714]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test684.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)