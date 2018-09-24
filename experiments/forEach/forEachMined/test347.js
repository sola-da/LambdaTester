





var callbackArguments = [];
var argument1 = function (method) {
 callbackArguments.push(arguments) 

    CookieJar.prototype[method + 'Sync'] = syncWrap(method);
};
var argument2 = 59;
var argument3 = [595,607,460,242,213,969,783];
var argument4 = function (w) {
 callbackArguments.push(arguments) 

    if (w && w.rowCount)
        screenRows += w.rowCount;
};
var argument5 = function (c) {
 callbackArguments.push(arguments) 

    c.lastAccessed = now;
};
var argument6 = function (side) {
 callbackArguments.push(arguments) 

    var len_a = pvc.BasePanel.orthogonalLength[side];
    op[side] = (this.offsetPaddings[side] || 0) * (clientSize[len_a] + paddings[len_a]);
};
var argument7 = null;
var base_0 = [0,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test347.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)