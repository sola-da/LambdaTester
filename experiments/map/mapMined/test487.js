





var callbackArguments = [];
var argument1 = function (et) {
 callbackArguments.push(arguments) 

    return findOrCreateEntityGroup(em, et);
};
var argument2 = true;
var argument3 = "";
var argument4 = function (i) {
 callbackArguments.push(arguments) 

    return 'a' + i + '=this._shape' + i;
};
var argument5 = true;
var argument6 = "";
var argument7 = function (t) {
 callbackArguments.push(arguments) 

    return t = (t || 0).toString(16), 1 === t.length ? '0' + t : t;
};
var argument8 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument9 = null;
var argument10 = true;
var base_0 = ["o","#Kv","E","jn","N[t","@;m"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o","#Kv","E","jn","N[t","@;m"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o","#Kv","E","jn","N[t","@;m"]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test487.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)