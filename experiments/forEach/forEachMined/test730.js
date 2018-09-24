





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    if (vars[a].value === vars.time.value && vars[a].scale.value === 'continuous') {
        separated = true;
    }
};
var argument2 = {"!":"E:^;","s)":82,"69!y":1.663833015683432e+308,"":"","[":"","1.0960672535087112e+308":213,"|":""};
var argument3 = function (x) {
 callbackArguments.push(arguments) 

    mouseHandler[x] = this[x];
};
var argument4 = true;
var argument5 = function (termNode) {
 callbackArguments.push(arguments) 

    termNode.addEventListener('copy', t.Input.onCopy, false);
    termNode.addEventListener('paste', t.Input.onPaste, false);
    termNode.addEventListener('mousedown', t.Input.onMouseDown, false);
    termNode.addEventListener('mouseup', t.Input.onMouseUp, false);
    termNode.addEventListener('contextmenu', t.Input.onContextMenu, false);
    termNode.addEventListener(mousewheelevt, t.Input.onMouseWheel, false);
};
var argument6 = r_1;
var argument7 = null;
var argument8 = function (needle) {
 callbackArguments.push(arguments) 

    if (typeList.indexOf(needle) == -1) {
        hasType = false;
        return false;
    }
};
var argument9 = r_2;
var argument10 = r_2;
var base_0 = ["9R","x","F"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9R","x","F"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9R","x","F"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9R","x","F"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test730.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)