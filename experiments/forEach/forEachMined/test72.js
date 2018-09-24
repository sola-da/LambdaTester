





var callbackArguments = [];
var argument1 = function (s) {
 callbackArguments.push(arguments) 

    aq.queue(function (lock) {
        queryNew('INSERT INTO `aliases` VALUES ?', [s], function () {
            lock.release();
        });
    });
};
var argument2 = true;
var argument3 = null;
var argument4 = function (id) {
 callbackArguments.push(arguments) 

    this._extendCore(mark, id, keyArgs);
};
var argument5 = function (n) {
 callbackArguments.push(arguments) 

    self.attachButtonBehavior(n, self.lastBtnClass, self.lastFunc);
};
var argument6 = function (e, i, a) {
 callbackArguments.push(arguments) 

    a[i] = String.fromCharCode(e);
};
var base_0 = [242,627,783,843,"t",">W","k(","B",213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,627,783,843,"t",">W","k(","B",213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,627,783,843,"t",">W","k(","B",213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,627,783,843,"t",">W","k(","B",213]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test72.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)