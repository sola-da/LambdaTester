





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    i++;
    arr.push(a + 3);
    return i > 3;
};
var argument2 = false;
var argument3 = function (match) {
 callbackArguments.push(arguments) 

    return match.route.props.ignoreScrollBehavior;
};
var argument4 = null;
var argument5 = null;
var argument6 = function (pathRe) {
 callbackArguments.push(arguments) 

    return pathRe.test(path);
};
var argument7 = "kGQx";
var argument8 = function (node) {
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
var argument9 = [25,25,783,627,595,-100,122,-1];
var argument10 = [823,655,126,59,213,893];
var base_0 = ["a","+j{ZU+hbjY","2%Zn+@","Q"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["a","+j{ZU+hbjY","2%Zn+@","Q"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["a","+j{ZU+hbjY","2%Zn+@","Q"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["a","+j{ZU+hbjY","2%Zn+@","Q"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someMined/test595.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)