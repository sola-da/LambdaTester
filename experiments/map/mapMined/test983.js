





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    return v.eval(env);
};
var argument2 = true;
var argument3 = "";
var argument4 = function (subdoc) {
 callbackArguments.push(arguments) 

    return transform(subdoc, ruleTree);
};
var argument5 = true;
var argument6 = {"893":"s4","P":"","^":7.017457319586388e+306,"1.300332560362913e+308":1.7760070946622785e+305,"M":1.4150423657023313e+308,"":"","3.745984832653487e+307":1.3071713990406172e+308};
var argument7 = function (name) {
 callbackArguments.push(arguments) 

    var path = root ? Path.join(root, name) : name;
    return {
        path: path,
        name: Path.basename(path)
    };
};
var argument8 = 843;
var argument9 = r_0;
var argument10 = function () {
 callbackArguments.push(arguments) 

    return '?';
};
var base_0 = [403,126,1.7976931348623157e+308,705,969]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,126,1.7976931348623157e+308,705,969]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,126,1.7976931348623157e+308,705,969]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,126,1.7976931348623157e+308,705,969]
var r_3= undefined
try {
r_3 = base_3.map(argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test983.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)