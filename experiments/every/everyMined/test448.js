





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return true;
};
var argument2 = true;
var argument3 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument4 = "";
var argument5 = {"":""};
var argument6 = function (v, i) {
 callbackArguments.push(arguments) 

    return v === a2[i];
};
var argument7 = {"1.6625869947356085e+308":714,"1.3446966591676503e+308":""};
var argument8 = function (other) {
 callbackArguments.push(arguments) 

    return _.indexOf(other, item) >= 0;
};
var argument9 = null;
var base_0 = [403,"rM","E",783,-1,714,"2"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,"rM","E",783,-1,714,"2"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,"rM","E",783,-1,714,"2"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,"rM","E",783,-1,714,"2"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyMined/test448.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)