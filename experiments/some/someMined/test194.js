





var callbackArguments = [];
var argument1 = function (eg) {
 callbackArguments.push(arguments) 

    return eg.hasChanges();
};
var argument2 = function (key) {
 callbackArguments.push(arguments) 

    var m = /(traceur@[^\/]*\/)/.exec(key);
    if (m) {
        $__0.testingPrefix_ = m[1];
        return true;
    }
};
var argument3 = [100,100,-1,460,242,100];
var argument4 = "S$";
var argument5 = function (m) {
 callbackArguments.push(arguments) 

    if (m.route !== match.route)
        return false;
    for (var property in m.params)
        if (m.params[property] !== match.params[property])
            return false;
    return true;
};
var argument6 = 5e-324;
var argument7 = "";
var argument8 = function (colObj) {
 callbackArguments.push(arguments) 

    return !!colObj.name.match(/\.col1$/);
};
var base_0 = [213,"D*","#{",403,893,"=",893,242,"e"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,"D*","#{",403,893,"=",893,242,"e"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,"D*","#{",403,893,"=",893,242,"e"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,"D*","#{",403,893,"=",893,242,"e"]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someMined/test194.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)