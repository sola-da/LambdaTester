





var callbackArguments = [];
var argument1 = function (memo, el, i) {
 callbackArguments.push(arguments) 

    if (0 == i || (isSorted === true ? _.last(memo) != el : !_.include(memo, el)))
        memo[memo.length] = el;
    return memo;
};
var argument2 = function (prev, cur) {
 callbackArguments.push(arguments) 

    numLinesEst++;
    if (cur.indexOf('\n') >= 0)
        numLinesEst++;
    return prev + cur.length + 1;
};
var argument3 = function (obj, item) {
 callbackArguments.push(arguments) 

    obj[item] = 1;
    return obj;
};
var argument4 = [-1,157,100,25,0,607,213,1.7976931348623157e+308];
var argument5 = function (prev, curr) {
 callbackArguments.push(arguments) 

    return prev.concat(curr.ast.body);
};
var argument6 = {"893":3.6642119533505707e+307,"d":"","Ov":655,"1.5229082987936669e+308":"","4.3267806068490537e+307":5e-324,"6.931414536955372e+307":""};
var base_0 = ["o:","H","`8","+,g","5b|"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o:","H","`8","+,g","5b|"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o:","H","`8","+,g","5b|"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test92.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)