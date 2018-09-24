





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    c.lastAccessed = now;
};
var argument2 = [705,"pMO|YTL",25,607,403,"p6)g"];
var argument3 = r_0;
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    if (doc._deleted) {
        delete doc._attachments;
    }
};
var argument5 = r_1;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    this._addLabel(x.color, x.name);
};
var argument7 = null;
var argument8 = null;
var argument9 = function (value, prop) {
 callbackArguments.push(arguments) 

    extended[prop] = defaults[prop];
};
var argument10 = true;
var argument11 = [893,"y",823,"@x",607];
var base_0 = [0,783,705,59,-100,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,783,705,59,-100,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,783,705,59,-100,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,783,705,59,-100,655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test543.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)