





var callbackArguments = [];
var argument1 = function (count, p) {
 callbackArguments.push(arguments) 

    if (!p.name || p.name && !p.value) {
        return count + 1;
    } else {
        return count;
    }
};
var argument2 = r_0;
var argument3 = ["R","q","BER","Rh","VagTm4x8Dod"];
var argument4 = function (promise, hook) {
 callbackArguments.push(arguments) 

    return promise ? promise.then(hook) : hook();
};
var argument5 = 403;
var argument6 = false;
var argument7 = function (prev, cur) {
 callbackArguments.push(arguments) 

    numLinesEst++;
    if (cur.indexOf('\n') >= 0)
        numLinesEst++;
    return prev + cur.length + 1;
};
var argument8 = null;
var argument9 = function (p, v) {
 callbackArguments.push(arguments) 

    return { sighting: p.sighting + 1 };
};
var argument10 = r_0;
var base_0 = ["aWl","]",823,"i"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["aWl","]",823,"i"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["aWl","]",823,"i"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["aWl","]",823,"i"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test228.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)