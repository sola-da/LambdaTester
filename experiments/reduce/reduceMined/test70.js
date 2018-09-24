





var callbackArguments = [];
var argument1 = function (total, xB) {
 callbackArguments.push(arguments) 

    return total + (xB > xA ? 0 : xB < xA ? 1 : 0.5);
};
var argument2 = [618,618,-100,157,157,627,607,213,5e-324];
var argument3 = r_0;
var argument4 = function (sum, suite) {
 callbackArguments.push(arguments) 

    return sum + suite.total();
};
var argument5 = r_0;
var argument6 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument7 = {"":"","1.204477070740724e+308":""};
var argument8 = function (memo, item) {
 callbackArguments.push(arguments) 

    var group;
    group = memo[memo.length - 1];
    if (group.length < count) {
        group.push(item);
    } else {
        memo.push([item]);
    }
    return memo;
};
var argument9 = {"5":7.805359096227622e+307,"t]":"[","8.651182508196047e+307":655,"1.1541351192563833e+308":"","2.221481937395013e+306":"wo|","":1.5681827956050115e+308,"3.8336718024701674e+307":"W"};
var base_0 = [893,627,122,213,460,655,213,-1,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,627,122,213,460,655,213,-1,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,627,122,213,460,655,213,-1,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,627,122,213,460,655,213,-1,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test70.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)