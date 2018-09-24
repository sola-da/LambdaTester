





var callbackArguments = [];
var argument1 = function (proxy) {
 callbackArguments.push(arguments) 

    return proxy !== mocks[1];
};
var argument2 = true;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    return uniques.indexOf(d[id_var]) >= 0;
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    return d3.select(this).classed(CLASS.SELECTED);
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return d[vars.id.value] === id;
};
var argument6 = null;
var argument7 = true;
var base_0 = ["l","dgE?","52_","W","L4I"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l","dgE?","52_","W","L4I"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l","dgE?","52_","W","L4I"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l","dgE?","52_","W","L4I"]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test415.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)