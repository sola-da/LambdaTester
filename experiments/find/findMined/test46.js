





var callbackArguments = [];
var argument1 = function (value, key) {
 callbackArguments.push(arguments) 

    var stop = iter(CS.PackageAndVersion.fromString(key), value);
    return stop;
};
var argument2 = 4.558012308671257e+307;
var argument3 = function (hier) {
 callbackArguments.push(arguments) 

    return hier.name == hierarchyName;
};
var argument4 = r_0;
var argument5 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc3._id;
};
var argument6 = r_0;
var argument7 = null;
var argument8 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(2);
    done();
};
var argument9 = 7.486565416860176e+306;
var base_0 = ["6-","e","ow","+",">P","J"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["6-","e","ow","+",">P","J"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["6-","e","ow","+",">P","J"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6-","e","ow","+",">P","J"]
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
require("fs").writeFileSync("./experiments/find/findMined/test46.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)