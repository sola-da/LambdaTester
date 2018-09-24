





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    nodeNameCache[name].each(fn);
};
var argument2 = true;
var argument3 = true;
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    maxValue = Math.max(parseFloat(value) || 0, maxValue);
};
var argument5 = function (w) {
 callbackArguments.push(arguments) 

    if (w && w.el && w.el.parentNode) {
        w._inDocument = false;
        w.el.parentNode.removeChild(w.el);
    }
};
var argument6 = "";
var argument7 = false;
var argument8 = function (collection) {
 callbackArguments.push(arguments) 

    browserDbInstance[collection] = getCollectionApiInstance(collection);
};
var argument9 = [82,157,460,969,5e-324,705];
var argument10 = r_0;
var base_0 = [0,627,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,627,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,627,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,627,100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test235.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)