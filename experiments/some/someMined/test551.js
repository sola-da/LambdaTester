





var callbackArguments = [];
var argument1 = function (enumType) {
 callbackArguments.push(arguments) 

    return enumType.attributes.some(function (attr) {
        return attr.name === 'Name' && attr.value === baseTypeName;
    });
};
var argument2 = "UR";
var argument3 = function (cachingLayer) {
 callbackArguments.push(arguments) 

    if (features.some(function (feature) {
            return feature.name === cachingLayer;
        })) {
        features.local = RemoteStorage[cachingLayer];
        return true;
    }
};
var argument4 = "";
var argument5 = 7.204608415078851e+307;
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
var argument7 = "La";
var argument8 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 2 && el.char === 'B';
};
var argument9 = null;
var base_0 = ["lu","!","C","c",">","Bq;$"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["lu","!","C","c",">","Bq;$"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["lu","!","C","c",">","Bq;$"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["lu","!","C","c",">","Bq;$"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test551.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)