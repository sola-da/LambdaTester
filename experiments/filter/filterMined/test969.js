





var callbackArguments = [];
var argument1 = function (p, index) {
 callbackArguments.push(arguments) 

    return p && typeof p === 'string';
};
var argument2 = function (elem) {
 callbackArguments.push(arguments) 

    return elem !== '.';
};
var argument3 = function (dimName) {
 callbackArguments.push(arguments) 

    var atom = this.atoms[dimName];
    return !(atom instanceof pvc.data.Atom) || null == atom.value;
};
var argument4 = 1.5553113410464203e+308;
var argument5 = r_0;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return this.name && !this.disabled && (this.checked || rselectTextarea.test(this.nodeName) || rinput.test(this.message));
};
var argument7 = "";
var argument8 = "_";
var base_0 = [-1,403,157,49,714,783,893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test969.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)