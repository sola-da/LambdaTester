





var callbackArguments = [];
var argument1 = function (f) {
 callbackArguments.push(arguments) 

    return !/^src-/.test(path.basename(f));
};
var argument2 = function (elem) {
 callbackArguments.push(arguments) 

    return elem !== '.';
};
var argument3 = function (s) {
 callbackArguments.push(arguments) 

    return s.trim() !== '';
};
var argument4 = "";
var argument5 = null;
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return d3.select(this).node().classList[1] !== liClass;
};
var base_0 = ["$mP",705,627]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$mP",705,627]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$mP",705,627]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$mP",705,627]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test750.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)