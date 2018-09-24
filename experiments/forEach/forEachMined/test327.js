





var callbackArguments = [];
var argument1 = function (foldDelta) {
 callbackArguments.push(arguments) 

    this.addFolds(foldDelta.folds);
};
var argument2 = true;
var argument3 = true;
var argument4 = function (cItm, idx) {
 callbackArguments.push(arguments) 

    var nToggle = tcJoin.split('|');
    nToggle.push(nToggle[nToggle.length - 1] + '-' + idx);
    iStack.push(idx);
    createRow(nextLevel, cItm, false, nToggle, iStack, parentOpen);
    iStack.pop();
};
var argument5 = 627;
var argument6 = function (range) {
 callbackArguments.push(arguments) 

    if (!range.markerId)
        range.markerId = session.addMarker(range, 'ace_snippet-marker', 'text');
};
var argument7 = true;
var argument8 = function (k, v) {
 callbackArguments.push(arguments) 

    if (k === roomName) {
        found = true;
        return self.executer(_r);
    }
};
var argument9 = null;
var base_0 = [1.7976931348623157e+308,714,705,82,843,-100,655,-1,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,714,705,82,843,-100,655,-1,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,714,705,82,843,-100,655,-1,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,714,705,82,843,-100,655,-1,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test327.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)