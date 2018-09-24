





var callbackArguments = [];
var argument1 = function (method) {
 callbackArguments.push(arguments) 

    CookieJar.prototype[method + 'Sync'] = syncWrap(method);
};
var argument2 = false;
var argument3 = function (name) {
 callbackArguments.push(arguments) 

    if (_.has(JSHINT.blacklist, name))
        return;
    dest[name] = src[name];
};
var argument4 = null;
var argument5 = function (lang) {
 callbackArguments.push(arguments) 

    if (lang.get('locale') != workingL) {
        newL.push(lang.getData());
    }
};
var argument6 = false;
var argument7 = function (rev) {
 callbackArguments.push(arguments) 

    if (height[rev] > max_height) {
        candidates.push(rev);
    }
};
var argument8 = 8.800568320247294e+306;
var argument9 = null;
var base_0 = ["!`","$}_",",","5"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!`","$}_",",","5"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!`","$}_",",","5"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!`","$}_",",","5"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test704.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)