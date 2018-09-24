





var callbackArguments = [];
var argument1 = function (pollFn) {
 callbackArguments.push(arguments) 

    pollFn();
};
var argument2 = false;
var argument3 = ["%","S)","p","v","-",893,595];
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    var n = 'on' + e;
    var m = obs[n];
    if (m)
        withDefaults[n] = function () {
            m.apply(obs, arguments);
        };
    else
        withDefaults[n] = function () {
        };
};
var argument5 = function (desc) {
 callbackArguments.push(arguments) 

    var bundle = dojo.i18n.getLocalization(desc.pkg, desc.name, locale);
    buddhist = dojo.mixin(buddhist, bundle);
};
var argument6 = function (k, v) {
 callbackArguments.push(arguments) 

    if (k === roomName) {
        found = true;
        return self.executer(_r);
    }
};
var argument7 = r_0;
var argument8 = r_0;
var base_0 = [";","A;p","Z","k9W ","F","W]s","K","B6f"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";","A;p","Z","k9W ","F","W]s","K","B6f"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";","A;p","Z","k9W ","F","W]s","K","B6f"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";","A;p","Z","k9W ","F","W]s","K","B6f"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test910.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)