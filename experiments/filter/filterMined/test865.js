





var callbackArguments = [];
var argument1 = function (packageJson) {
 callbackArguments.push(arguments) 

    return !filterRegEx || filterRegEx.test(packageJson.name);
};
var argument2 = function (user) {
 callbackArguments.push(arguments) 

    return user.p('name') === 'uniquefind';
};
var argument3 = ["]","dh"];
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    return years.indexOf(t.getTime()) < 0;
};
var argument5 = false;
var argument6 = r_2;
var argument7 = function (t) {
 callbackArguments.push(arguments) 

    return isTargetToShow(t.id);
};
var base_0 = ["od","WH0,^Yj",122,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["od","WH0,^Yj",122,618]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["od","WH0,^Yj",122,618]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["od","WH0,^Yj",122,618]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test865.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)