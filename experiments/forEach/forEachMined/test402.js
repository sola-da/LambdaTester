





var callbackArguments = [];
var argument1 = function (cItm, idx) {
 callbackArguments.push(arguments) 

    var nToggle = tcJoin.split('|');
    nToggle.push(nToggle[nToggle.length - 1] + '-' + idx);
    iStack.push(idx);
    createRow(nextLevel, cItm, false, nToggle, iStack, parentOpen);
    iStack.pop();
};
var argument2 = function (child) {
 callbackArguments.push(arguments) 

    currentChildren.push(child);
    child.setProperty(childToParentNp.name, entity);
};
var argument3 = function (value, key) {
 callbackArguments.push(arguments) 

    callbackFn.call(thisArg, key, key, $__13);
};
var argument4 = function (value, key) {
 callbackArguments.push(arguments) 

    attrs.$set(key, value);
};
var base_0 = ["vx;^","*8","qcr"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["vx;^","*8","qcr"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["vx;^","*8","qcr"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["vx;^","*8","qcr"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test402.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)