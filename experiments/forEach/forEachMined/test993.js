





var callbackArguments = [];
var argument1 = function (dep) {
 callbackArguments.push(arguments) 

    if (typeof obj.dependencies[dep] === 'string') {
        delete obj.dependencies[dep];
    }
};
var argument2 = function (gPoint) {
 callbackArguments.push(arguments) 

    gPoint.setAttribute('cx', Number(gPoint.getAttribute('cx')) + that.movedRX);
    gPoint.setAttribute('cy', Number(gPoint.getAttribute('cy')) + that.movedRY);
};
var argument3 = false;
var argument4 = function (k, v) {
 callbackArguments.push(arguments) 

    _r[k] = _r.enemies[k];
};
var argument5 = null;
var argument6 = null;
var argument7 = function (termNode) {
 callbackArguments.push(arguments) 

    termNode.addEventListener('copy', t.Input.onCopy, false);
    termNode.addEventListener('paste', t.Input.onPaste, false);
    termNode.addEventListener('mousedown', t.Input.onMouseDown, false);
    termNode.addEventListener('mouseup', t.Input.onMouseUp, false);
    termNode.addEventListener('contextmenu', t.Input.onContextMenu, false);
    termNode.addEventListener(mousewheelevt, t.Input.onMouseWheel, false);
};
var argument8 = ["e^^","O","03]d[","17","jv","Y","mU","K","eJy3","lp"];
var base_0 = [49,893,82,655,893,893,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,893,82,655,893,893,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,893,82,655,893,893,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,893,82,655,893,893,655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test993.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)