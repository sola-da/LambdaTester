





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.a === 5;
};
var argument2 = false;
var argument3 = false;
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc1._id;
};
var argument5 = false;
var argument6 = function (level) {
 callbackArguments.push(arguments) 

    return level.name == levelName;
};
var argument7 = r_0;
var argument8 = null;
var argument9 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id1;
};
var argument10 = false;
var argument11 = false;
var base_0 = ["=",157,"?SuK",823,"X"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=",157,"?SuK",823,"X"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=",157,"?SuK",823,"X"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=",157,"?SuK",823,"X"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findMined/test413.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)