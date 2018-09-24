





var callbackArguments = [];
var argument1 = function (x, child) {
 callbackArguments.push(arguments) 

    return x + child.x;
};
var argument2 = function (combined, toAdd) {
 callbackArguments.push(arguments) 

    return _.extend(combined, toAdd);
};
var argument3 = {"8":"d","823":"","3.50567486733886e+307":607,"t":1.7464366462492912e+308,"7.12830450497949e+307":2.5365369177796426e+307,"1.7976931348623157e+308":"","2.2685183383322293e+307":969,"ZU8":" 2yVL"};
var argument4 = true;
var argument5 = function (u, elem) {
 callbackArguments.push(arguments) 

    if (u.indexOf(elem) < 0) {
        u.push(elem);
    }
    return u;
};
var argument6 = function (a, b) {
 callbackArguments.push(arguments) 

    if (a)
        visited[a] = true;
    if (b)
        visited[b] = true;
    return 0;
};
var argument7 = ["d<","FL-SX"," !","P","E","l!#sLD"];
var argument8 = r_3;
var base_0 = [157,403,1.7976931348623157e+308,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,403,1.7976931348623157e+308,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,403,1.7976931348623157e+308,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,403,1.7976931348623157e+308,49]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test282.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)