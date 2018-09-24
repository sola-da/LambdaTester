





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return 1;
};
var argument2 = function (patch) {
 callbackArguments.push(arguments) 

    return !/[\/]length/gi.test(patch.path);
};
var argument3 = ["I",705,49,126,"H","`","Hg",403,"4y ","p:F"];
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return vars.id.value in d;
};
var argument5 = ["[","Sy:","!4tn","(","VWX","@W^","w","`$",">#I","^$"];
var argument6 = r_0;
var argument7 = function (dirname) {
 callbackArguments.push(arguments) 

    return 0 === dirname.indexOf(last);
};
var argument8 = 618;
var base_0 = ["ip","z*","H"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ip","z*","H"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ip","z*","H"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test610.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)