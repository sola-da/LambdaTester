





var callbackArguments = [];
var argument1 = function (value, key) {
 callbackArguments.push(arguments) 

    callbackFn.call(thisArg, key, key, $__13);
};
var argument2 = r_0;
var argument3 = function (row) {
 callbackArguments.push(arguments) 

    if (row.doc && !row.deleted && row.value.rev.slice(0, 2) === '1-' && (!row.doc._attachments || Object.keys(row.doc._attachments).length === 0)) {
        result.docs_read++;
        currentBatch.pendingRevs++;
        currentBatch.docs.push(row.doc);
        delete currentBatch.diffs[row.id];
    }
};
var argument4 = function (node) {
 callbackArguments.push(arguments) 

    node.graphics.removeAll(node.userData.rulelines);
    node.userData.rulelines = [];
    createRule.call(this, node);
};
var argument5 = false;
var argument6 = function (gPoint) {
 callbackArguments.push(arguments) 

    gPoint.setAttribute('cx', Number(gPoint.getAttribute('cx')) + that.pt.x);
    gPoint.setAttribute('cy', Number(gPoint.getAttribute('cy')) + that.pt.y);
};
var argument7 = false;
var argument8 = r_0;
var base_0 = [122,595,82,213,"[",213,"_"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,595,82,213,"[",213,"_"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,595,82,213,"[",213,"_"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,595,82,213,"[",213,"_"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test933.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)