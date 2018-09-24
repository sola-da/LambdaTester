





var callbackArguments = [];
var argument1 = function (line) {
 callbackArguments.push(arguments) 

    return '  ' + line;
};
var argument2 = null;
var argument3 = function (y, i2) {
 callbackArguments.push(arguments) 

    return resultSelector(x, y, i, i2);
};
var argument4 = function (match) {
 callbackArguments.push(arguments) 

    return match.route;
};
var argument5 = null;
var argument6 = function (t) {
 callbackArguments.push(arguments) 

    return 1 == t.nodeType ? t : void 0;
};
var argument7 = false;
var argument8 = {"":126,"H":1.4414222184291631e+308,"9.234748031560332e+307":""};
var base_0 = ["&oZ","p","2HrK","#","_[",",fX`#+^","*"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&oZ","p","2HrK","#","_[",",fX`#+^","*"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&oZ","p","2HrK","#","_[",",fX`#+^","*"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test266.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)