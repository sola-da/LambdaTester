





var callbackArguments = [];
var argument1 = function (ext) {
 callbackArguments.push(arguments) 

    return !!a.canPlayType(ext).replace(/no/, '');
};
var argument2 = false;
var argument3 = null;
var argument4 = function (result) {
 callbackArguments.push(arguments) 

    return result.id === discussionId;
};
var argument5 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc3._id;
};
var argument6 = false;
var argument7 = null;
var argument8 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument9 = null;
var argument10 = false;
var base_0 = ["x"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["x"]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["x"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["x"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findMined/test748.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)