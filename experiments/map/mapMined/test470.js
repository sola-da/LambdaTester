





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return clamp(Math.round(c), 255);
};
var argument2 = false;
var argument3 = {"157":"Pb"};
var argument4 = function () {
 callbackArguments.push(arguments) 

    tx.commit();
    return done();
};
var argument5 = false;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return gonzales.csspToSrc(traverse(x));
};
var argument7 = "d";
var argument8 = function (i) {
 callbackArguments.push(arguments) 

    return i.name + '="' + i.value + '"';
};
var argument9 = null;
var base_0 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test470.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)