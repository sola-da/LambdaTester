





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    return !r || r === 'linked' || /^https?:\/\//.test(r) || /^gh:/.test(r) || /^github:/.test(r) || semver.satisfies(version, r);
};
var argument2 = function (op) {
 callbackArguments.push(arguments) 

    return InsertOp.isInsert(op);
};
var argument3 = false;
var argument4 = null;
var argument5 = function (p) {
 callbackArguments.push(arguments) 

    if (p in deps) {
        return true;
    }
    done({
        code: 'UPDATE_PKG_NOT_FOUND',
        message: '"' + p + '" is not a dependency of the current package.',
        data: { name: p }
    });
};
var argument6 = "B";
var argument7 = function (key) {
 callbackArguments.push(arguments) 

    return ~actual.indexOf(key);
};
var argument8 = null;
var argument9 = 49;
var base_0 = ["rY4","|","Za","n",":n","!","r","{Z"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["rY4","|","Za","n",":n","!","r","{Z"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["rY4","|","Za","n",":n","!","r","{Z"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["rY4","|","Za","n",":n","!","r","{Z"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyMined/test556.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)