





var callbackArguments = [];
var argument1 = function (n) {
 callbackArguments.push(arguments) 

    app.middleware('routes', namedHandler(n));
};
var argument2 = null;
var argument3 = function (name) {
 callbackArguments.push(arguments) 

    webshims.defineNodeNamesBooleanProperty([
        'audio',
        'video'
    ], name);
};
var argument4 = null;
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    q.defer(t);
};
var argument6 = ["Y","s","gX:v","`ItV"];
var argument7 = function (child) {
 callbackArguments.push(arguments) 

    child.invalidateLayout();
};
var base_0 = ["7FFR@","k","G","6",">","k","GCoE","Y","A+U33a{"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7FFR@","k","G","6",">","k","GCoE","Y","A+U33a{"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7FFR@","k","G","6",">","k","GCoE","Y","A+U33a{"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7FFR@","k","G","6",">","k","GCoE","Y","A+U33a{"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test302.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)