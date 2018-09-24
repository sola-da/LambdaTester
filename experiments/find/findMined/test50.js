





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return c.schema.indexOf(catalog) >= 0;
};
var argument2 = true;
var argument3 = false;
var argument4 = function (hier) {
 callbackArguments.push(arguments) 

    return hier.name == hierarchyName;
};
var argument5 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([
        7,
        6,
        5,
        4
    ], ids, 'Defining an endpoint failed.');
    t.done();
};
var argument6 = function (p) {
 callbackArguments.push(arguments) 

    return p.canPlay(source.toString());
};
var base_0 = [783,1.7976931348623157e+308,-1,-100,49,607,25]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,1.7976931348623157e+308,-1,-100,49,607,25]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,1.7976931348623157e+308,-1,-100,49,607,25]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,1.7976931348623157e+308,-1,-100,49,607,25]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findMined/test50.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)