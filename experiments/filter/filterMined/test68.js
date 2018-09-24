





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    return this.globals[id].activate && bound.globals.indexOf(id) === -1;
};
var argument2 = r_0;
var argument3 = function () {
 callbackArguments.push(arguments) 

    return this.selected;
};
var argument4 = r_0;
var argument5 = function (s) {
 callbackArguments.push(arguments) 

    return s[vars.id.value] == c[vars.id.value];
};
var argument6 = r_0;
var argument7 = {"460":618,"893":655,"MN<":"VB","j":1.459191566968577e+307,"X":"","%&":893,"1.6068018034271523e+308":1.2558075892575456e+308};
var argument8 = function (value, index, array) {
 callbackArguments.push(arguments) 

    return !predicate(value, index, array);
};
var argument9 = 9.357400522812747e+307;
var base_0 = [0,823,595,714,25,460]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,823,595,714,25,460]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,823,595,714,25,460]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/filter/filterMined/test68.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)