





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    context = this;
};
var argument2 = false;
var argument3 = false;
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    return d[t] >= filter[t].min && d[t] <= filter[t].max;
};
var argument5 = null;
var argument6 = "?";
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument8 = null;
var argument9 = false;
var argument10 = function (v) {
 callbackArguments.push(arguments) 

    return v2(v);
};
var argument11 = {"607":82," ^":""};
var argument12 = "";
var base_0 = [49,0,618]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,0,618]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,0,618]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,0,618]
var r_3= undefined
try {
r_3 = base_3.every(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/every/everyMined/test960.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)