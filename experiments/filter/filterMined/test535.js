





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return re.test(x.completion);
};
var argument2 = false;
var argument3 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument4 = true;
var argument5 = r_0;
var argument6 = function (match) {
 callbackArguments.push(arguments) 

    return !hasMatch(currentMatches, match);
};
var argument7 = r_0;
var argument8 = true;
var argument9 = function (f) {
 callbackArguments.push(arguments) 

    return !/^src-/.test(path.basename(f));
};
var argument10 = true;
var argument11 = null;
var base_0 = ["tAxt"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["tAxt"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["tAxt"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["tAxt"]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test535.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)