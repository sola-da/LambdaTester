





var callbackArguments = [];
var argument1 = function (str) {
 callbackArguments.push(arguments) 

    if (/^(\n+)$/.test(str.value))
        str.value = Array(++RegExp.$1.length).join('<newline>');
    if (str.added)
        return colorLines('diff added', str.value);
    if (str.removed)
        return colorLines('diff removed', str.value);
    return str.value;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (value, key) {
 callbackArguments.push(arguments) 

    aNames.push(key);
};
var argument5 = null;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x.value || x;
};
var argument7 = null;
var argument8 = function (m) {
 callbackArguments.push(arguments) 

    return m.principalId;
};
var argument9 = null;
var base_0 = [0,403,823,59]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
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
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,403,823,59]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test572.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)