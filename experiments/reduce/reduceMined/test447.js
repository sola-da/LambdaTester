





var callbackArguments = [];
var argument1 = function (length, delta) {
 callbackArguments.push(arguments) 

    return length + delta.getLength();
};
var argument2 = false;
var argument3 = {"157":"Pb"};
var argument4 = function (memo, item) {
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
var argument5 = false;
var argument6 = function (r, s) {
 callbackArguments.push(arguments) 

    r[o[s]] = s;
    return r;
};
var argument7 = "d";
var argument8 = function (a, branch) {
 callbackArguments.push(arguments) 

    return a.concat(branch.body);
};
var argument9 = null;
var base_0 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test447.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)