





var callbackArguments = [];
var argument1 = function (subView) {
 callbackArguments.push(arguments) 

    return subView.tabId !== undefined;
};
var argument2 = null;
var argument3 = function onFound(err, docs) {
 callbackArguments.push(arguments) 

    console.log('PROJECTS.JS::LIBRARY SERVED WITH', docs.length, 'ASSETS');
    if (err)
        throw err;
    callback(err, docs);
};
var argument4 = false;
var argument5 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc3._id;
};
var argument6 = false;
var argument7 = false;
var argument8 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var argument9 = true;
var base_0 = ["7>#u","rB","P:T","y)","R","Z","F?","EfR-","Wa","@,"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7>#u","rB","P:T","y)","R","Z","F?","EfR-","Wa","@,"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7>#u","rB","P:T","y)","R","Z","F?","EfR-","Wa","@,"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7>#u","rB","P:T","y)","R","Z","F?","EfR-","Wa","@,"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test442.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)