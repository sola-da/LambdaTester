





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    var dd = dimDescr[t], val = dd.orgValue && !dd.categorical ? dd.orgValue[d[t]] : d[t];
    return val >= filter[t].min && val <= filter[t].max;
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    return ~actual.indexOf(key);
};
var argument5 = null;
var argument6 = 607;
var argument7 = function (a) {
 callbackArguments.push(arguments) 

    i++;
    arr.push(a + 3);
    return i <= 3;
};
var argument8 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var base_0 = [-100,"QROy",607,"f;","tW","v"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,"QROy",607,"f;","tW","v"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,"QROy",607,"f;","tW","v"]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,"QROy",607,"f;","tW","v"]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyMined/test56.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)