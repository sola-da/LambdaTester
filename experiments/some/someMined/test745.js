





var callbackArguments = [];
var argument1 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 2 && el.char === 'B';
};
var argument2 = "X";
var argument3 = r_0;
var argument4 = function (p) {
 callbackArguments.push(arguments) 

    var principalType = p.message || undefined;
    var principalId = p.id || undefined;
    return principalType === RoleMapping.ROLE && principalId === role;
};
var argument5 = false;
var argument6 = [-1,460,0,126,49,595,969,157,705];
var argument7 = function (node) {
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
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    return start >= item.start && end <= item.end;
};
var argument9 = 1.1265980030122182e+308;
var base_0 = [627,403,1.7976931348623157e+308,126,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,403,1.7976931348623157e+308,126,893]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,403,1.7976931348623157e+308,126,893]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,403,1.7976931348623157e+308,126,893]
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
require("fs").writeFileSync("./experiments/some/someMined/test745.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)