





var callbackArguments = [];
var argument1 = function (k, v) {
 callbackArguments.push(arguments) 

    _r = room[k];
    _r.name = k;
};
var argument2 = false;
var argument3 = function (k) {
 callbackArguments.push(arguments) 

    self.fields[k] = fields[k];
};
var argument4 = r_0;
var argument5 = false;
var argument6 = function (name) {
 callbackArguments.push(arguments) 

    el.classList.add(name);
};
var argument7 = false;
var argument8 = function (f) {
 callbackArguments.push(arguments) 

    cycles = cycles.filter(f);
};
var argument9 = false;
var base_0 = [59,"f:+",49,"-+",705,"z","J6","*T"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,"f:+",49,"-+",705,"z","J6","*T"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,"f:+",49,"-+",705,"z","J6","*T"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,"f:+",49,"-+",705,"z","J6","*T"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test848.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)