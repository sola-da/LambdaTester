





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    var i;
    t.values = t.values.sort(function (v1, v2) {
        var x1 = v1.x || v1.x === 0 ? v1.x : Infinity, x2 = v2.x || v2.x === 0 ? v2.x : Infinity;
        return x1 - x2;
    });
    i = 0;
    t.values.forEach(function (v) {
        v.index = i++;
    });
};
var argument2 = 1.2950092659026908e+308;
var argument3 = false;
var argument4 = function (Plugin) {
 callbackArguments.push(arguments) 

    var plugin = new Plugin(_this.core);
    _this.core.addPlugin(plugin);
    _this.setupExternalInterface(plugin);
};
var argument5 = false;
var argument6 = {"25":"","403":"","893":783,"":157,"-100":8.069271064658986e+307};
var argument7 = function (c) {
 callbackArguments.push(arguments) 

    c._getDatumsOnRect(datumMap, rect, ka);
};
var argument8 = false;
var argument9 = null;
var argument10 = function (key) {
 callbackArguments.push(arguments) 

    if (key in resultsMap) {
        results.push(resultsMap[key]);
    } else {
        results.push({
            'key': key,
            'error': 'not_found'
        });
    }
};
var argument11 = false;
var argument12 = "WRc[#v";
var base_0 = [")","v",242,"#","y",655,"-?"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")","v",242,"#","y",655,"-?"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")","v",242,"#","y",655,"-?"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")","v",242,"#","y",655,"-?"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test645.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)