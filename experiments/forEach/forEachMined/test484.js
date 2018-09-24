





var callbackArguments = [];
var argument1 = function (callback) {
 callbackArguments.push(arguments) 

    callback();
};
var argument2 = null;
var argument3 = null;
var argument4 = function (row) {
 callbackArguments.push(arguments) 

    if (row.doc && !row.deleted && row.value.rev.slice(0, 2) === '1-' && (!row.doc._attachments || Object.keys(row.doc._attachments).length === 0)) {
        result.docs_read++;
        currentBatch.pendingRevs++;
        currentBatch.docs.push(row.doc);
        delete currentBatch.diffs[row.id];
    }
};
var argument5 = function (port) {
 callbackArguments.push(arguments) 

    portsSelect.appendChild(utils.createElement('option', {
        innerText: port,
        value: port,
        selected: currentPort === port
    }));
};
var argument6 = function (scene) {
 callbackArguments.push(arguments) 

    null == scene.x && (scene.x = scene.y = scene.dx = scene.dy = 0);
};
var base_0 = [122,49,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,49,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,49,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,49,213]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test484.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)