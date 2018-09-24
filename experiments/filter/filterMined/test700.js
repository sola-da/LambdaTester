





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return this[f.formatProperty].localeCompare(term) === 0;
};
var argument2 = 1.6659446165977058e+307;
var argument3 = false;
var argument4 = function (f) {
 callbackArguments.push(arguments) 

    return f.charAt(0) !== '.';
};
var argument5 = {"5.151110242844842e+307":"","8.22334750365332e+307":823};
var argument6 = function (className) {
 callbackArguments.push(arguments) 

    return classNames[className];
};
var argument7 = 8.274696976512959e+307;
var argument8 = true;
var argument9 = function (k) {
 callbackArguments.push(arguments) 

    return !now[k];
};
var base_0 = [627,213,714,705,843]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,213,714,705,843]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,213,714,705,843]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,213,714,705,843]
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test700.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)