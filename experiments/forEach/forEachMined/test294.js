





var callbackArguments = [];
var argument1 = function (np) {
 callbackArguments.push(arguments) 

    if (np.isScalar) {
        mergeRelatedEntityCore(mc, node, np);
    } else {
        mergeRelatedEntitiesCore(mc, node, np);
    }
};
var argument2 = function (cell) {
 callbackArguments.push(arguments) 

    if (typeof cell['openStates'] != 'undefined') {
        if (identity in cell.openStates) {
            delete cell.openStates[identity];
        }
    }
};
var argument3 = function (q) {
 callbackArguments.push(arguments) 

    if (Object.hasOwnProperty.call(vers, q))
        ver.push(vers[q]);
};
var argument4 = function (id) {
 callbackArguments.push(arguments) 

    if (!this.globals[id].activate) {
        return;
    }
    _counter[id]++;
    this.globals[id].activate();
};
var argument5 = false;
var base_0 = [-1,1.7976931348623157e+308,607,59,5e-324,969,157,5e-324]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,1.7976931348623157e+308,607,59,5e-324,969,157,5e-324]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,1.7976931348623157e+308,607,59,5e-324,969,157,5e-324]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,1.7976931348623157e+308,607,59,5e-324,969,157,5e-324]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test294.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)