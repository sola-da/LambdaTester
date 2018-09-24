





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
var argument2 = function (pred) {
 callbackArguments.push(arguments) 

    pred._validate(entityType, usesNameOnServer);
};
var argument3 = function (t) {
 callbackArguments.push(arguments) 

    var dd = dimDescr[t], val = dd.orgValue && !dd.categorical ? dd.orgValue[d[t]] : d[t];
    return val >= filter[t].min && val <= filter[t].max;
};
var argument4 = "";
var argument5 = [82,627,823,403,969,126,25];
var argument6 = function (el) {
 callbackArguments.push(arguments) 

    return !fn(el);
};
var argument7 = null;
var base_0 = [0,627,"(",5e-324,";",1.7976931348623157e+308,59,"w","L",122]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,627,"(",5e-324,";",1.7976931348623157e+308,59,"w","L",122]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,627,"(",5e-324,";",1.7976931348623157e+308,59,"w","L",122]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,627,"(",5e-324,";",1.7976931348623157e+308,59,"w","L",122]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyMined/test435.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)