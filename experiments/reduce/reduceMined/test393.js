





var callbackArguments = [];
var argument1 = function (prev, cur) {
 callbackArguments.push(arguments) 

    numLinesEst++;
    if (cur.indexOf('\n') >= 0)
        numLinesEst++;
    return prev + cur.length + 1;
};
var argument2 = "{";
var argument3 = function (acc, join) {
 callbackArguments.push(arguments) 

    acc.push(makePunc(punc, join), join);
    return acc;
};
var argument4 = true;
var argument5 = ["B","?_","gP","(C","?","V"];
var argument6 = function (prev, cur) {
 callbackArguments.push(arguments) 

    return prev && cur(entity);
};
var argument7 = r_1;
var argument8 = function (total, xA) {
 callbackArguments.push(arguments) 

    return total + getScore(xA, sampleB);
};
var argument9 = r_1;
var argument10 = "";
var base_0 = [157,242,49,1.7976931348623157e+308,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,242,49,1.7976931348623157e+308,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,242,49,1.7976931348623157e+308,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,242,49,1.7976931348623157e+308,122]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test393.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)