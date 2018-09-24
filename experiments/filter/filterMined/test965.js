





var callbackArguments = [];
var argument1 = function (proxy) {
 callbackArguments.push(arguments) 

    return proxy !== mocks[1];
};
var argument2 = "+";
var argument3 = null;
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    return c[vars.edges.source][vars.id.value] != vars.focus.value[0] && c[vars.edges.target][vars.id.value] != vars.focus.value[0];
};
var argument5 = ["f>","U"];
var argument6 = function (p) {
 callbackArguments.push(arguments) 

    return p && p.length > 0;
};
var argument7 = r_0;
var argument8 = function (c) {
 callbackArguments.push(arguments) 

    return projectModel.hasPermission(cycle('stages')(c.nth(0))('visible'), project('role'), project('events'));
};
var argument9 = r_0;
var base_0 = [126,49]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,49]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,49]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,49]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test965.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)