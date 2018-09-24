





var callbackArguments = [];
var argument1 = function (k) {
 callbackArguments.push(arguments) 

    var n = parseInt(k.replace(/[^\d]/g, '')), spaces = k.replace(/[^ ]/g, '').length;
    if (spaces === 0 || n % spaces !== 0) {
        self.log.warn('Invalid ' + self.name + ' key: "' + k + '".');
        self.end();
        return false;
    }
    n /= spaces;
    md5.update(String.fromCharCode(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255));
};
var argument2 = function (elm) {
 callbackArguments.push(arguments) 

    elementQueueSnapshot.push(elm);
};
var argument3 = null;
var argument4 = function (method) {
 callbackArguments.push(arguments) 

    CookieJar.prototype[method + 'Sync'] = syncWrap(method);
};
var argument5 = false;
var argument6 = function (m) {
 callbackArguments.push(arguments) 

    m.$verify();
};
var base_0 = ["@",714,-1,"@",126,"r","&","q(;ES"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@",714,-1,"@",126,"r","&","q(;ES"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["@",714,-1,"@",126,"r","&","q(;ES"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["@",714,-1,"@",126,"r","&","q(;ES"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test305.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)