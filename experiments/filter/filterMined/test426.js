





var callbackArguments = [];
var argument1 = function (guest) {
 callbackArguments.push(arguments) 

    return !!guest.name && (attending ? guest.is_attending : true);
};
var argument2 = null;
var argument3 = function () {
 callbackArguments.push(arguments) 

    return $(this).data('bootstrap-switch');
};
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return !d.values && d.area;
};
var argument5 = 1.5783429739871494e+308;
var argument6 = "s";
var argument7 = function (id) {
 callbackArguments.push(arguments) 

    return targetIds.indexOf(id) < 0;
};
var argument8 = 1.6394835545857114e+308;
var argument9 = r_3;
var base_0 = [893,705,783,49,607,49,122,705,783]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,705,783,49,607,49,122,705,783]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,705,783,49,607,49,122,705,783]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,705,783,49,607,49,122,705,783]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test426.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)