





var callbackArguments = [];
var argument1 = function (pointerType) {
 callbackArguments.push(arguments) 

    var eventName = POINTER_EVENTS[pointerType][eventType];
    if (eventName) {
        res.push(eventName);
    }
};
var argument2 = "tJ";
var argument3 = "";
var argument4 = function (dimSpec) {
 callbackArguments.push(arguments) 

    dimSpec.bind(type);
};
var argument5 = "d";
var argument6 = function (code) {
 callbackArguments.push(arguments) 

    unops[code] = new Function('x', 'return ' + unop(code) + ' x;');
};
var argument7 = function (attr) {
 callbackArguments.push(arguments) 

    node.removeAttributeNS(attr.namespaceURI, attr.name);
};
var base_0 = [49,893,126,100,893,122,893,893,783]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,893,126,100,893,122,893,893,783]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,893,126,100,893,122,893,893,783]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,893,126,100,893,122,893,893,783]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test93.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)