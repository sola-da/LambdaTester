





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    nodeNameCache[name].each(fn);
};
var argument2 = false;
var argument3 = function (groupScene) {
 callbackArguments.push(arguments) 

    var pvGroupPanel = new pvc.visual.Panel(this, pvLegendMarkerPanel).pvMark.visible(function (itemScene) {
            return itemScene.parent === groupScene;
        });
    groupScene.renderer().create(this, pvGroupPanel, groupScene.extensionPrefix, wrapper);
};
var argument4 = null;
var argument5 = null;
var argument6 = function (id) {
 callbackArguments.push(arguments) 

    withoutFadeIn[id] = false;
    legend.selectAll('.' + CLASS.legendItem + getTargetSelectorSuffix(id)).remove();
    c3.data.targets = c3.data.targets.filter(function (t) {
        return t.id !== id;
    });
};
var argument7 = function (item) {
 callbackArguments.push(arguments) 

    dojo[i++ % 2 === 0 ? 'addClass' : 'removeClass'](item, 'sortListItemOdd');
    this.containerNode.appendChild(item);
};
var argument8 = false;
var base_0 = [655,157,49,"c",122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,157,49,"c",122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,157,49,"c",122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,157,49,"c",122]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test545.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)