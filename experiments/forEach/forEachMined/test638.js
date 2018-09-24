





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    var val = fetchValue(vars, d, vars.size.value);
    if (val && typeof val === 'number') {
        strippedData.push({
            'd3plus': d,
            'id': d[vars.id.value],
            'value': fetchValue(vars, d, vars.size.value)
        });
    }
};
var argument2 = [157,122,595,126];
var argument3 = function (groupSpec) {
 callbackArguments.push(arguments) 

    var count = groupSpec.count, name = groupSpec.name;
    specsByName[name] = groupSpec;
    groupSpec.indexes = valuesColIndexes && 'M' === name ? valuesColIndexes : availableInputIndexes.splice(0, count);
};
var argument4 = "34kdK";
var argument5 = function (majorTick, index) {
 callbackArguments.push(arguments) 

    var scene = new pvc.visual.CartesianAxisTickScene(rootScene, {
            tick: majorTick,
            tickRaw: majorTick,
            tickLabel: ticksText[index]
        });
    scene.dataIndex = index;
};
var argument6 = function (cell) {
 callbackArguments.push(arguments) 

    if (cell.relWidth) {
        cell.width = cell.unitWidth = cell.relWidth / relSum * (100 - pctSum) + '%';
    }
};
var base_0 = [969,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,618]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test638.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)