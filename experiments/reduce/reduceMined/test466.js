





var callbackArguments = [];
var argument1 = function (memo, item) {
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
var argument2 = null;
var argument3 = null;
var argument4 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument5 = [1.7976931348623157e+308,126,49,-100,893,157,607];
var argument6 = r_1;
var argument7 = function (a, b) {
 callbackArguments.push(arguments) 

    if (a)
        visited[a] = true;
    if (b)
        visited[b] = true;
    return 0;
};
var argument8 = {"242":"|$","d":1.637706200518792e+307,"wO^t&":"","$":"-","":4.1227555196521416e+307,"1.7976931348623157e+308":"z","5.988017183166622e+307":"C","1.146039583086744e+308":""};
var argument9 = {};
var argument10 = function (params, paramName) {
 callbackArguments.push(arguments) 

    params[paramName] = rootParams[paramName];
    return params;
};
var argument11 = r_1;
var base_0 = ["oI",242,607,"nd","LL",823,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["oI",242,607,"nd","LL",823,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["oI",242,607,"nd","LL",823,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["oI",242,607,"nd","LL",823,122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test466.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)