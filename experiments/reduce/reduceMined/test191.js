





var callbackArguments = [];
var argument1 = function (prev, cur) {
 callbackArguments.push(arguments) 

    numLinesEst++;
    if (cur.indexOf('\n') >= 0)
        numLinesEst++;
    return prev + cur.length + 1;
};
var argument2 = function (p, v) {
 callbackArguments.push(arguments) 

    return { sighting: p.sighting - 1 };
};
var argument3 = false;
var argument4 = function (prev, curr) {
 callbackArguments.push(arguments) 

    return prev.concat(curr.ast.body);
};
var argument5 = r_2;
var argument6 = function (transformEndLength, op) {
 callbackArguments.push(arguments) 

    return transformEndLength + op.getLength();
};
var argument7 = r_1;
var argument8 = null;
var base_0 = ["(V","e","e","z}","^T|","qr","F"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(V","e","e","z}","^T|","qr","F"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(V","e","e","z}","^T|","qr","F"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test191.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)