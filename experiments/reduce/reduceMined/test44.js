





var callbackArguments = [];
var argument1 = function (acc, line) {
 callbackArguments.push(arguments) 

    var ind = '';
    while (ind.length < line.indent * 2) {
        ind += ' ';
    }
    return ind + line.str + '\n' + acc;
};
var argument2 = {"5":"","627":"","714":9.417734325945222e+307,"":"","S;p":2.8467367714028316e+307,"L":8.240952960374957e+307,"k<b":2.6133178693536796e+307};
var argument3 = r_0;
var argument4 = function (sum, value) {
 callbackArguments.push(arguments) 

    return sum + value;
};
var argument5 = null;
var argument6 = function (sum, value) {
 callbackArguments.push(arguments) 

    return sum + value;
};
var argument7 = function (a, b) {
 callbackArguments.push(arguments) 

    return (a || '').toString() + (b || '').toString();
};
var argument8 = r_0;
var argument9 = 969;
var base_0 = ["YL","OX","[y","|","z","%","D"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["YL","OX","[y","|","z","%","D"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["YL","OX","[y","|","z","%","D"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["YL","OX","[y","|","z","%","D"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test44.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)