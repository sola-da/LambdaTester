





var callbackArguments = [];
var argument1 = function (hash, r) {
 callbackArguments.push(arguments) 

    if (r instanceof Rule && r.variable === true) {
        hash[r.name] = r;
    }
    return hash;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (m, kvs) {
 callbackArguments.push(arguments) 

    var kv = kvs.split('=');
    m[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
    return m;
};
var argument5 = function (prev, cur) {
 callbackArguments.push(arguments) 

    numLinesEst++;
    if (cur.indexOf('\n') >= 0)
        numLinesEst++;
    return prev + cur.length + 1;
};
var argument6 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument7 = 823;
var base_0 = ["yR",")","f","tC",";","D^","*"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["yR",")","f","tC",";","D^","*"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["yR",")","f","tC",";","D^","*"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["yR",")","f","tC",";","D^","*"]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test413.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)