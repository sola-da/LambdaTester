





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (m) {
 callbackArguments.push(arguments) 

    return new L.LatLng(m.startPoint.lat, m.startPoint.lng);
};
var argument5 = null;
var argument6 = function (col) {
 callbackArguments.push(arguments) 

    return generateHashMap(col);
};
var argument7 = true;
var argument8 = true;
var argument9 = function (val) {
 callbackArguments.push(arguments) 

    return val === key ? null : keyMap[val];
};
var argument10 = r_2;
var base_0 = ["z","WJ03","j","3",",i","|","#"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z","WJ03","j","3",",i","|","#"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z","WJ03","j","3",",i","|","#"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z","WJ03","j","3",",i","|","#"]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test835.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)