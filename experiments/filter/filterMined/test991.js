





var callbackArguments = [];
var argument1 = function (c, i) {
 callbackArguments.push(arguments) 

    var test = d3plus.util.copy(d);
    test.geometry.coordinates = [test.geometry.coordinates[i]];
    var a = vars.path.area(test);
    if (a >= vars.coords.threshold) {
        areas.push(a);
        return true;
    }
    return false;
};
var argument2 = ["ZKI",":B","e","$$j6`n","n","+","5",")","M$","xu"];
var argument3 = r_0;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return 1;
};
var argument5 = function (a) {
 callbackArguments.push(arguments) 

    return a.parent !== complexArray.parent;
};
var argument6 = {"843":"Lx","3.9049470464820584e+307":627,":U#":"","2.906840298110317e+307":"9g=PJ[","2.3189906211508394e+307":7.502840951648477e+307,"I@lt":82};
var argument7 = function (el) {
 callbackArguments.push(arguments) 

    return b.indexOf(el) < 0;
};
var argument8 = true;
var base_0 = [893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test991.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)