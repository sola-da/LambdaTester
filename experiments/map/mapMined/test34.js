





var callbackArguments = [];
var argument1 = function (s) {
 callbackArguments.push(arguments) 

    s.property = key;
    return s;
};
var argument2 = function (v) {
 callbackArguments.push(arguments) 

    return v.toCSS();
};
var argument3 = false;
var argument4 = false;
var argument5 = function (ban) {
 callbackArguments.push(arguments) 

    ban.TimeOfBanString = new Date(ban.TimeOfBan * 1000).toString();
    return ban;
};
var argument6 = "lQ4";
var argument7 = function (path) {
 callbackArguments.push(arguments) 

    return path + '-suffix';
};
var base_0 = ["z>tW9",100,460,714,607,714]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z>tW9",100,460,714,607,714]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z>tW9",100,460,714,607,714]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z>tW9",100,460,714,607,714]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test34.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)