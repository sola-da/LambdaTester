





var callbackArguments = [];
var argument1 = function (axis) {
 callbackArguments.push(arguments) 

    axis.option.defaults({ Offset: 0.02 });
};
var argument2 = true;
var argument3 = function (descProp) {
 callbackArguments.push(arguments) 

    if (desc[descProp]) {
        desc['_sup' + descProp] = getSup(descProp, oldDesc);
    }
};
var argument4 = r_1;
var argument5 = function (className) {
 callbackArguments.push(arguments) 

    var a = map[className];
    if (ignoreCase)
        a = a.toLowerCase();
    var list = a.split(splitChar || '|');
    for (var i = list.length; i--;)
        keywords[list[i]] = className;
};
var argument6 = 823;
var argument7 = true;
var argument8 = function (file) {
 callbackArguments.push(arguments) 

    files.push(file);
};
var argument9 = r_1;
var base_0 = [714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test628.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)