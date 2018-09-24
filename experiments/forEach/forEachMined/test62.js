





var callbackArguments = [];
var argument1 = function (klass) {
 callbackArguments.push(arguments) 

    classList = classList.replace(classRE(klass), ' ');
};
var argument2 = null;
var argument3 = null;
var argument4 = function (k) {
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
var argument5 = "B";
var argument6 = function (file) {
 callbackArguments.push(arguments) 

    files.push(file);
};
var argument7 = null;
var argument8 = function (expression, key) {
 callbackArguments.push(arguments) 

    whensExpFns[key] = $interpolate(expression.replace(BRACE, startSymbol + numberExp + '-' + offset + endSymbol));
};
var argument9 = false;
var base_0 = [":x","q","D","i","`"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":x","q","D","i","`"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":x","q","D","i","`"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":x","q","D","i","`"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test62.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)