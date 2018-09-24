





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return 1;
};
var argument2 = null;
var argument3 = function (bench) {
 callbackArguments.push(arguments) 

    return result[0].compare(bench) == 0;
};
var argument4 = null;
var argument5 = null;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x.error;
};
var argument7 = null;
var argument8 = r_1;
var argument9 = function (item) {
 callbackArguments.push(arguments) 

    return !!item;
};
var argument10 = null;
var argument11 = r_1;
var base_0 = [823,823,25,1.7976931348623157e+308,82,25,403,705,25,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,823,25,1.7976931348623157e+308,82,25,403,705,25,618]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,823,25,1.7976931348623157e+308,82,25,403,705,25,618]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test852.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)