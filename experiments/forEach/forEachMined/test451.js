





var callbackArguments = [];
var argument1 = function (stuff) {
 callbackArguments.push(arguments) 

    arrays.forEach(function (array) {
        model.compareThings(array, stuff).should.equal(-1);
        model.compareThings(stuff, array).should.equal(1);
    });
};
var argument2 = function (result) {
 callbackArguments.push(arguments) 

    result.ok = true;
};
var argument3 = "1";
var argument4 = function (f) {
 callbackArguments.push(arguments) 

    f(vars, nextStep);
};
var argument5 = r_2;
var argument6 = "";
var argument7 = function (p) {
 callbackArguments.push(arguments) 

    p.d3plus.ring = 1;
    var val = vars.size.value ? fetchValue(vars, p, vars.size.value) : 1;
    p.d3plus.r = radius(val);
};
var base_0 = [-1,595,-100,460,-1,705,627,5e-324,82,783]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,595,-100,460,-1,705,627,5e-324,82,783]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,595,-100,460,-1,705,627,5e-324,82,783]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,595,-100,460,-1,705,627,5e-324,82,783]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test451.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)