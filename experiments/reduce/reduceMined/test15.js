





var callbackArguments = [];
var argument1 = function (prev, cur) {
 callbackArguments.push(arguments) 

    return prev || cur(entity);
};
var argument2 = function (o, model) {
 callbackArguments.push(arguments) 

    if (!o[model])
        o[model] = 0;
    o[model]++;
    return o;
};
var argument3 = function (total, xA) {
 callbackArguments.push(arguments) 

    return total + getScore(xA, sampleB);
};
var argument4 = r_1;
var argument5 = function (prev, cur) {
 callbackArguments.push(arguments) 

    numLinesEst++;
    if (cur.indexOf('\n') >= 0)
        numLinesEst++;
    return prev + cur.length + 1;
};
var argument6 = null;
var base_0 = ["Z","nh"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Z","nh"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Z","nh"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Z","nh"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test15.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)