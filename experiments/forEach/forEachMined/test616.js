





var callbackArguments = [];
var argument1 = function (value, key) {
 callbackArguments.push(arguments) 

    value.dispose();
};
var argument2 = "";
var argument3 = false;
var argument4 = function (newRow) {
 callbackArguments.push(arguments) 

    cloneTest.push(newRow);
    list1Model.push(newRow);
};
var argument5 = 655;
var argument6 = function (p) {
 callbackArguments.push(arguments) 

    t[p] = f.setPath(p).getDateLastModified().getTime();
};
var argument7 = {"59":"","242":"4","595":"","1.6828979215074786e+308":403,"":"","Pg":714,"hA":"7?'"};
var argument8 = true;
var argument9 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.destroy();
};
var base_0 = [126,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test616.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)