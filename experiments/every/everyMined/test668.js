





var callbackArguments = [];
var argument1 = function (p) {
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
var argument2 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument3 = 9.3122177168595e+307;
var argument4 = function (elem) {
 callbackArguments.push(arguments) 

    return superset.indexOf(elem) !== -1;
};
var argument5 = false;
var argument6 = function (elem) {
 callbackArguments.push(arguments) 

    return superset.indexOf(elem) !== -1;
};
var argument7 = false;
var argument8 = ["*R@","]n","3",")","e"];
var base_0 = [714,969,893,618,242,0,618]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,969,893,618,242,0,618]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,969,893,618,242,0,618]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,969,893,618,242,0,618]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyMined/test668.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)