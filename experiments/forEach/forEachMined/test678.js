





var callbackArguments = [];
var argument1 = function (edg) {
 callbackArguments.push(arguments) 

    newPath.addEdge(edg.duplicate());
};
var argument2 = false;
var argument3 = null;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    internalValues[key] = defaults[key];
};
var argument5 = [627];
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    acc.push(this.path);
};
var argument7 = null;
var argument8 = function (property) {
 callbackArguments.push(arguments) 

    var name = property.name;
    var type = property.message;
    var loggingMessage = property.loggingMessage;
    if (type == 'attribute') {
        var dummy = Device[name];
    } else {
        Device[name]();
    }
    this.assertErrorInLogs(loggingMessage, 1);
};
var argument9 = null;
var argument10 = 1.328584767305004e+308;
var base_0 = [126,893,"W","5@7"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,893,"W","5@7"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,893,"W","5@7"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,893,"W","5@7"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test678.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)