





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    context = this;
};
var argument2 = function (p) {
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
var argument3 = {"100":7.323532442126835e+307,"460":"","714":"*","9.841824974743668e+307":"aZ1","":"UC","@":1.5159762682575343e+307,"1.4945223317317242e+308":2.2644180101362187e+306,"r(":"","1.101069988766152e+308":49,"1.336795683832682e+308":""};
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument5 = [")",":i","UF","z"];
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var base_0 = [655,49,100,-1,59,655,0,82]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,49,100,-1,59,655,0,82]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,49,100,-1,59,655,0,82]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,49,100,-1,59,655,0,82]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyMined/test646.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)