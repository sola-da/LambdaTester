





var callbackArguments = [];
var argument1 = function (hier) {
 callbackArguments.push(arguments) 

    return hier.name == hierarchyName;
};
var argument2 = {"49":25,"100":"f,","843":"","":5e-324,";":595,"1.4244318594815474e+308":"@3","-100":100,"3.992219666863813e+307":"","5e-324":"_A]0"};
var argument3 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === 'aaa';
};
var argument4 = {"49":"","618":-1,"783":"","^":126,"":627,"1.0476328653556973e+308":595,"1.7976931348623157e+308":4.3746750152707355e+307,"1.5438362754566264e+308":627,"2Sk}h9,":""};
var argument5 = null;
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return d.name == dimension;
};
var argument7 = true;
var argument8 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '2';
};
var argument9 = null;
var base_0 = [607,655,59,5e-324,607,460,1.7976931348623157e+308,1.7976931348623157e+308,627]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,655,59,5e-324,607,460,1.7976931348623157e+308,1.7976931348623157e+308,627]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,655,59,5e-324,607,460,1.7976931348623157e+308,1.7976931348623157e+308,627]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,655,59,5e-324,607,460,1.7976931348623157e+308,1.7976931348623157e+308,627]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test177.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)