





var callbackArguments = [];
var argument1 = function (rawCo) {
 callbackArguments.push(arguments) 

    var newCo = dataType._createInstanceCore(target, dp);
    dataType._updateTargetFromRaw(newCo, rawCo, rawValueFn);
    dataType._initializeInstance(newCo);
    oldVal.push(newCo);
};
var argument2 = [627,"5$8vE",59,705,"zl","!",5e-324,"%T",714];
var argument3 = function (tickable) {
 callbackArguments.push(arguments) 

    if (!tickable.getStave()) {
        tickable.setStave(this.stave);
    }
};
var argument4 = null;
var argument5 = function (gPoint) {
 callbackArguments.push(arguments) 

    gPoint.setAttribute('cx', Number(gPoint.getAttribute('cx')) + that.pt.x);
    gPoint.setAttribute('cy', Number(gPoint.getAttribute('cy')) + that.pt.y);
};
var argument6 = function (eg) {
 callbackArguments.push(arguments) 

    if (!eg)
        return;
    var entities = eg.getEntities(entityStates);
    if (selected) {
        selected.push.apply(selected, entities);
    } else {
        selected = entities;
    }
};
var base_0 = [126,705,213,242,714,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,705,213,242,714,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,705,213,242,714,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,705,213,242,714,-1]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test408.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)