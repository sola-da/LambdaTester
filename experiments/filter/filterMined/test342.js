





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    return t >= vars[axis + '_range'][0] && t <= vars[axis + '_range'][1];
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    return isValue(d.value);
};
var argument3 = 5.077141998497231e+307;
var argument4 = null;
var argument5 = function (file) {
 callbackArguments.push(arguments) 

    return file.exists;
};
var argument6 = ["I","c","=","ar9eb","$ ","AUd","b","|"];
var argument7 = function () {
 callbackArguments.push(arguments) 

    return this.name && !this.disabled && (this.checked || rselectTextarea.test(this.nodeName) || rinput.test(this.message));
};
var argument8 = false;
var argument9 = r_0;
var base_0 = ["c","VD#",59,242,49,-100,242,242]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["c","VD#",59,242,49,-100,242,242]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["c","VD#",59,242,49,-100,242,242]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["c","VD#",59,242,49,-100,242,242]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test342.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)