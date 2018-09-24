





var callbackArguments = [];
var argument1 = function (comp) {
 callbackArguments.push(arguments) 

    return pvc_PercentValue.parse(comp);
};
var argument2 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument3 = false;
var argument4 = null;
var argument5 = function (rev) {
 callbackArguments.push(arguments) 

    return rev.id;
};
var argument6 = r_1;
var argument7 = function (node) {
 callbackArguments.push(arguments) 

    return node.addr;
};
var argument8 = {"82":"4","2.4475091190558437e+307":""};
var argument9 = false;
var base_0 = ["wcuJX",893,"$a","B-4D"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["wcuJX",893,"$a","B-4D"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["wcuJX",893,"$a","B-4D"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test122.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)