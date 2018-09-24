





var callbackArguments = [];
var argument1 = function (acc, key) {
 callbackArguments.push(arguments) 

    acc[key] = options[key];
    return acc;
};
var argument2 = true;
var argument3 = function (a, b) {
 callbackArguments.push(arguments) 

    return (a || '').toString() + (b || '').toString();
};
var argument4 = null;
var argument5 = null;
var argument6 = function (memo, val) {
 callbackArguments.push(arguments) 

    return memo ? memo[val] : undefined;
};
var argument7 = [843,213,893,1.7976931348623157e+308,59,783,122,460];
var argument8 = ["I?y|","AOg","p^F+t","6"];
var argument9 = function (prev, cur) {
 callbackArguments.push(arguments) 

    numLinesEst++;
    if (cur.indexOf('\n') >= 0)
        numLinesEst++;
    return prev + cur.length + 1;
};
var base_0 = [100,0,627,157,82,783,-100,783,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,0,627,157,82,783,-100,783,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,0,627,157,82,783,-100,783,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,0,627,157,82,783,-100,783,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test55.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)