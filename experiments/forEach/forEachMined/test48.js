





var callbackArguments = [];
var argument1 = function (obj) {
 callbackArguments.push(arguments) 

    if (obj !== dst) {
        forEach(obj, function (value, key) {
            dst[key] = value;
        });
    }
};
var argument2 = function _forEach(item, i) {
 callbackArguments.push(arguments) 

    self.then(function () {
        this.then(this.createStep(then, { data: item }));
    });
};
var argument3 = false;
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    delete s[o][e.i], 'removeEventListener' in t && t.removeEventListener(g(e.e), e.proxy, m(e, r));
};
var argument5 = true;
var argument6 = 213;
var argument7 = function (name) {
 callbackArguments.push(arguments) 

    angmods[name] = file;
};
var argument8 = {};
var base_0 = [25,"2tF",-1,969,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,"2tF",-1,969,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,"2tF",-1,969,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,"2tF",-1,969,595]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test48.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)