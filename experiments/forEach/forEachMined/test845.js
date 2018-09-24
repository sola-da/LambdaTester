





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    dojo[i++ % 2 === 0 ? 'addClass' : 'removeClass'](item, 'sortListItemOdd');
    this.containerNode.appendChild(item);
};
var argument2 = null;
var argument3 = function (cell) {
 callbackArguments.push(arguments) 

    if (cell.relWidth) {
        cell.width = cell.unitWidth = cell.relWidth / relSum * (100 - pctSum) + '%';
    }
};
var argument4 = "";
var argument5 = false;
var argument6 = function (c) {
 callbackArguments.push(arguments) 

    var method = c.method;
    delete c.method;
    changesObject[method] = c;
};
var argument7 = function (child) {
 callbackArguments.push(arguments) 

    childResults = childResults.concat(child.search(text));
};
var base_0 = ["#B%T>","]ID ","%","#Qin","2"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#B%T>","]ID ","%","#Qin","2"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#B%T>","]ID ","%","#Qin","2"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#B%T>","]ID ","%","#Qin","2"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test845.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)