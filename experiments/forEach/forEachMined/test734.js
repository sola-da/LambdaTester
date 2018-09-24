





var callbackArguments = [];
var argument1 = function (dep) {
 callbackArguments.push(arguments) 

    resolveInheritance(obj.dependencies[dep]);
};
var argument2 = function (gPoint) {
 callbackArguments.push(arguments) 

    gPoint.setAttribute('cx', Number(gPoint.getAttribute('cx')) + that.pt.x);
    gPoint.setAttribute('cy', Number(gPoint.getAttribute('cy')) + that.pt.y);
};
var argument3 = true;
var argument4 = "";
var argument5 = function (groupScene) {
 callbackArguments.push(arguments) 

    var pvGroupPanel = new pvc.visual.Panel(this, pvLegendMarkerPanel).pvMark.visible(function (itemScene) {
            return itemScene.parent === groupScene;
        });
    groupScene.renderer().create(this, pvGroupPanel, groupScene.extensionPrefix, wrapper);
};
var argument6 = r_0;
var argument7 = function (es) {
 callbackArguments.push(arguments) 

    if (!EntityState.contains(es)) {
        throw new Error('The EntityManager.getChanges() \'entityStates\' parameter must either be null, an entityState or an array of entityStates');
    }
};
var argument8 = true;
var argument9 = true;
var base_0 = ["G&",893,25,893,82,"5Z_","<","O"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["G&",893,25,893,82,"5Z_","<","O"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["G&",893,25,893,82,"5Z_","<","O"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["G&",893,25,893,82,"5Z_","<","O"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test734.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)