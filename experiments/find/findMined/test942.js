





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '2';
};
var argument2 = true;
var argument3 = function (error) {
 callbackArguments.push(arguments) 

    return error.message === 'invalid.git.version';
};
var argument4 = {"25":7.073303402162049e+307,"783":59,"":"EyC","_":1.5283570673008667e+308,"1.6303216941705314e+308":6.709271927971657e+307,"3.180503561755713e+306":59,"L":"E`","y{}{W":"","1.1085587655579634e+308":0,"2.2668140190793684e+307":49};
var argument5 = r_0;
var argument6 = function (subView) {
 callbackArguments.push(arguments) 

    return subView.tabId !== undefined;
};
var argument7 = true;
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc1._id;
};
var argument9 = {"618":"","714":"","5aJeXf":"","^h":893};
var argument10 = true;
var base_0 = [627,1.7976931348623157e+308,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,1.7976931348623157e+308,893]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,1.7976931348623157e+308,893]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,1.7976931348623157e+308,893]
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
require("fs").writeFileSync("./experiments/find/findMined/test942.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)