





var callbackArguments = [];
var argument1 = function (name) {
 callbackArguments.push(arguments) 

    if (this.hasOwnProperty(name)) {
        theme[name] = this[name];
    }
};
var argument2 = true;
var argument3 = null;
var argument4 = function (val, key) {
 callbackArguments.push(arguments) 

    buggyZero = 1 / key === -Infinity;
};
var argument5 = true;
var argument6 = function (range) {
 callbackArguments.push(arguments) 

    session.removeMarker(range.markerId);
    range.markerId = null;
};
var argument7 = true;
var argument8 = r_0;
var argument9 = function (key) {
 callbackArguments.push(arguments) 

    delete self.remote[key];
};
var argument10 = false;
var argument11 = 100;
var base_0 = ["9","[","!0|","UG","a","##","HRw","y"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9","[","!0|","UG","a","##","HRw","y"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9","[","!0|","UG","a","##","HRw","y"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9","[","!0|","UG","a","##","HRw","y"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test713.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)