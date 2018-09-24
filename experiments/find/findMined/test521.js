





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc2._id;
};
var argument2 = true;
var argument3 = null;
var argument4 = function (result) {
 callbackArguments.push(arguments) 

    return result.id === discussionId;
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return d.newDoc === 'yes';
};
var argument6 = true;
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc1._id;
};
var argument8 = "";
var base_0 = ["M","^==","7","d","_","JfS","oY","m%9","6"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["M","^==","7","d","_","JfS","oY","m%9","6"]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["M","^==","7","d","_","JfS","oY","m%9","6"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["M","^==","7","d","_","JfS","oY","m%9","6"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findMined/test521.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)