





var callbackArguments = [];
var argument1 = function (pollFn) {
 callbackArguments.push(arguments) 

    pollFn();
};
var argument2 = function (handler) {
 callbackArguments.push(arguments) 

    var serverProxy = createServerProxy(handler.hubName, ServerConnectionBackend.server(handler.hubName));
    handler.hub.server = serverProxy;
    handler.doneFn();
};
var argument3 = 5.341720909123559e+307;
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    if (doc.ok) {
        compactDocument(doc.id, 1, decCount);
    } else {
        decCount();
    }
};
var argument5 = true;
var argument6 = false;
var argument7 = function (nodeName) {
 callbackArguments.push(arguments) 

    retDesc[nodeName] = webshims[baseMethod](nodeName, a, b, c);
};
var base_0 = ["0","%","JB1","nm",">","1","="]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0","%","JB1","nm",">","1","="]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0","%","JB1","nm",">","1","="]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["0","%","JB1","nm",">","1","="]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test432.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)