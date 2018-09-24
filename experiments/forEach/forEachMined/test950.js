





var callbackArguments = [];
var argument1 = function (w) {
 callbackArguments.push(arguments) 

    if (w && w.el && w.el.parentNode) {
        w._inDocument = false;
        w.el.parentNode.removeChild(w.el);
    }
};
var argument2 = true;
var argument3 = {"460":655,"618":1.3941262271352285e+308,"":823,"1.1045337170220023e+308":627,"5.602305854037741e+307":242,"X`":"Y"};
var argument4 = function (storeName) {
 callbackArguments.push(arguments) 

    store = tx.objectStore(storeName);
    stores.push({
        name: storeName,
        keyPath: store.keyPath,
        autoIncrement: store.autoIncrement,
        count: store.count(),
        indices: Array.prototype.slice.apply(store.indexNames)
    });
};
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    dojo[i++ % 2 === 0 ? 'addClass' : 'removeClass'](item, 'sortListItemOdd');
    this.containerNode.appendChild(item);
};
var argument6 = null;
var argument7 = function (value, key) {
 callbackArguments.push(arguments) 

    ctrlLocals[key] = tplAndVars[resolveIter++];
};
var argument8 = r_0;
var base_0 = ["?","25a","{",";OZx#Y","3","8","<qV4c`","(","9"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?","25a","{",";OZx#Y","3","8","<qV4c`","(","9"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?","25a","{",";OZx#Y","3","8","<qV4c`","(","9"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?","25a","{",";OZx#Y","3","8","<qV4c`","(","9"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test950.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)