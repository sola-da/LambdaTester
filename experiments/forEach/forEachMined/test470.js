





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    self.mapFile(fpath + '/' + file);
};
var argument2 = false;
var argument3 = null;
var argument4 = function (methodKey) {
 callbackArguments.push(arguments) 

    var hubMethods = allListeners[methodKey];
    for (var j = hubMethods.length - 1; j >= 0; j--) {
        if (hubMethods[j].scope === scope) {
            hubMethods.splice(j, 1);
        }
    }
    if (hubMethods.length === 0) {
        ServerConnectionBackend.off(name, methodKey);
    }
};
var argument5 = {"25":"","PL":"","1.700374858275216e+308":"","":5e-324,"sQh1VfE#g":"","@5":"@H"};
var argument6 = "w";
var argument7 = function (t) {
 callbackArguments.push(arguments) 

    ys[t.id] = [];
    t.values.forEach(function (v) {
        ys[t.id].push(v.value);
    });
};
var argument8 = "O8";
var argument9 = function (key) {
 callbackArguments.push(arguments) 

    if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
};
var argument10 = null;
var base_0 = [59,-100,82,655,-1,49,-1,-1,595,714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,-100,82,655,-1,49,-1,-1,595,714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,-100,82,655,-1,49,-1,-1,595,714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,-100,82,655,-1,49,-1,-1,595,714]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test470.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)