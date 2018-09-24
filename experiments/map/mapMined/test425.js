





var callbackArguments = [];
var argument1 = function (val, i) {
 callbackArguments.push(arguments) 

    if (val[sParam]) {
        a.push(i);
    }
};
var argument2 = null;
var argument3 = function (col, i) {
 callbackArguments.push(arguments) 

    return col.bVisible ? i : null;
};
var argument4 = function (atom) {
 callbackArguments.push(arguments) 

    return atom.value;
};
var argument5 = function (k) {
 callbackArguments.push(arguments) 

    return k + '=' + params[k];
};
var argument6 = r_3;
var argument7 = false;
var base_0 = [655,"q8e","k9","8","}6","He",1.7976931348623157e+308,"3","T"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,"q8e","k9","8","}6","He",1.7976931348623157e+308,"3","T"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,"q8e","k9","8","}6","He",1.7976931348623157e+308,"3","T"]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test425.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)