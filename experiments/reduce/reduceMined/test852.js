





var callbackArguments = [];
var argument1 = function (m, kvs) {
 callbackArguments.push(arguments) 

    var kv = kvs.split('=');
    m[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
    return m;
};
var argument2 = function (total, xA) {
 callbackArguments.push(arguments) 

    return total + getScore(xA, sampleB);
};
var argument3 = function (memo, value) {
 callbackArguments.push(arguments) 

    if (_.isArray(value))
        return memo.concat(_.flatten(value));
    memo[memo.length] = value;
    return memo;
};
var argument4 = r_1;
var argument5 = false;
var argument6 = function (sum, suite) {
 callbackArguments.push(arguments) 

    return sum + suite.total();
};
var argument7 = r_2;
var base_0 = ["D","5","6J","Rh","`","}&","mX$","f","k3"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["D","5","6J","Rh","`","}&","mX$","f","k3"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["D","5","6J","Rh","`","}&","mX$","f","k3"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["D","5","6J","Rh","`","}&","mX$","f","k3"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test852.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)