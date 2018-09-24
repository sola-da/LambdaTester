





var callbackArguments = [];
var argument1 = function (total, xB) {
 callbackArguments.push(arguments) 

    return total + (xB > xA ? 0 : xB < xA ? 1 : 0.5);
};
var argument2 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument3 = "^7";
var argument4 = {"25":"GJ","969":"","":655};
var argument5 = function (prev, el) {
 callbackArguments.push(arguments) 

    return make_node(AST_Binary, el[0], {
        operator: '+',
        left: prev,
        right: el[0]
    });
};
var argument6 = function (memo, el, i) {
 callbackArguments.push(arguments) 

    if (0 == i || (isSorted === true ? _.last(memo) != el : !_.include(memo, el)))
        memo[memo.length] = el;
    return memo;
};
var argument7 = "3}";
var base_0 = [627,49,126,403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,49,126,403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,49,126,403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,49,126,403]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test533.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)