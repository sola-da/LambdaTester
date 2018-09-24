





var callbackArguments = [];
var argument1 = function (edge) {
 callbackArguments.push(arguments) 

    minY = Math.min(minY, edge[Y0]);
    maxY = Math.max(maxY, edge[Y1]);
};
var argument2 = function (w) {
 callbackArguments.push(arguments) 

    if (w && w.el && w.el.parentNode) {
        w._inDocument = false;
        w.el.parentNode.removeChild(w.el);
    }
};
var argument3 = function (rev) {
 callbackArguments.push(arguments) 

    addToMissing(id, rev);
};
var argument4 = true;
var argument5 = "";
var argument6 = function (keyword) {
 callbackArguments.push(arguments) 

    filters.push(fns.filterBy.keyword(keyword));
};
var argument7 = r_3;
var argument8 = true;
var base_0 = [460,49,59,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,49,59,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,49,59,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,49,59,49]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test900.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)