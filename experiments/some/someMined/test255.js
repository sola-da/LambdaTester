





var callbackArguments = [];
var argument1 = function (attr) {
 callbackArguments.push(arguments) 

    return attr.name === 'Name' && attr.value === baseTypeName;
};
var argument2 = function (def) {
 callbackArguments.push(arguments) 

    return def.message === 'Parameter';
};
var argument3 = null;
var argument4 = {"403":595,"":100,"2.923788569477153e+307":783,"1.7572664759159699e+308":"","bl":":I","yO":""};
var argument5 = function (filter) {
 callbackArguments.push(arguments) 

    return filter(json);
};
var argument6 = function (node) {
 callbackArguments.push(arguments) 

    if (node == cursorLocation) {
        pastCursorLocation = true;
    } else if (isParagraphBoundary(node)) {
        if (pastCursorLocation) {
            return true;
        } else {
            buffer = [];
        }
    }
    if (node.nodeType == goog.dom.NodeType.TEXT) {
        buffer.push(node.nodeValue);
    }
    return false;
};
var argument7 = null;
var base_0 = [714,783,-1,49,607]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,783,-1,49,607]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,783,-1,49,607]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,783,-1,49,607]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someMined/test255.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)