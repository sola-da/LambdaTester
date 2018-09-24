





var callbackArguments = [];
var argument1 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([
        1,
        7,
        6,
        5,
        4
    ], ids, 'Searching when min>max condition(ZREVRANGEBYSCORE) is invalid.');
    t.done();
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id3;
};
var argument3 = function (hier) {
 callbackArguments.push(arguments) 

    return hier.name == hierarchyName;
};
var argument4 = "";
var argument5 = [627,100,783,25,595,607,655];
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id3;
};
var argument7 = r_0;
var base_0 = [627,783,595,1.7976931348623157e+308,100,242]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,783,595,1.7976931348623157e+308,100,242]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,783,595,1.7976931348623157e+308,100,242]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,783,595,1.7976931348623157e+308,100,242]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findMined/test696.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)