





var callbackArguments = [];
var argument1 = function (k) {
 callbackArguments.push(arguments) 

    return !~structs.indexOf(k);
};
var argument2 = true;
var argument3 = false;
var argument4 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument5 = null;
var argument6 = 157;
var argument7 = function (unique) {
 callbackArguments.push(arguments) 

    return unique && unique != 'undefined';
};
var argument8 = true;
var argument9 = function (id) {
 callbackArguments.push(arguments) 

    return this.globals[id].activate && get.globals.indexOf(id) === -1;
};
var argument10 = r_1;
var argument11 = null;
var base_0 = [403,100,59,843,783,49,714,82]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,100,59,843,783,49,714,82]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/filter/filterMined/test499.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)