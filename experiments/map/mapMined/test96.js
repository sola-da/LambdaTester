





var callbackArguments = [];
var argument1 = function (entry) {
 callbackArguments.push(arguments) 

    return that._handleFileTreeEntry(entry, path);
};
var argument2 = r_0;
var argument3 = 1.3223762962308055e+306;
var argument4 = function (m) {
 callbackArguments.push(arguments) 

    return m.replace(/^\s+/, '').replace(/\s+$/, '');
};
var argument5 = r_1;
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    return value * 2;
};
var argument7 = false;
var argument8 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument9 = false;
var base_0 = [607,783,25,25,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,783,25,25,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,783,25,25,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,783,25,25,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/map/mapMined/test96.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)