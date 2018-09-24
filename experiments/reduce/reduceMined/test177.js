





var callbackArguments = [];
var argument1 = function (params, paramName) {
 callbackArguments.push(arguments) 

    params[paramName] = rootParams[paramName];
    return params;
};
var argument2 = null;
var argument3 = true;
var argument4 = function (u, elem) {
 callbackArguments.push(arguments) 

    if (u.indexOf(elem) < 0) {
        u.push(elem);
    }
    return u;
};
var argument5 = r_0;
var argument6 = function (sum, suite) {
 callbackArguments.push(arguments) 

    return sum + suite.total();
};
var argument7 = {"460":9.392511797395458e+307,"783":100,"5.190459812018248e+307":627,"`r8[B":"Xh","U":"6","":3.640591554624933e+307,"1.4493068194254503e+308":"M","05n6":"g+","1.5825384517169325e+307":"@"};
var argument8 = function (memo, key) {
 callbackArguments.push(arguments) 

    if (_.isUndefined(memo)) {
        return self.rel(key);
    } else if (_.isArray(memo)) {
        return _.flatten(_.map(memo, function (item) {
            return item.rel(key);
        }));
    } else if (memo) {
        return memo.rel(key);
    } else {
        return null;
    }
};
var argument9 = null;
var argument10 = "";
var base_0 = [893,-1,"y"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,-1,"y"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,-1,"y"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,-1,"y"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test177.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)