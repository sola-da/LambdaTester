





var callbackArguments = [];
var argument1 = function (obj2) {
 callbackArguments.push(arguments) 

    if (comparison != null) {
        return comparison(obj1, obj2);
    } else {
        return _.isEqual(obj1, obj2);
    }
};
var argument2 = "x";
var argument3 = true;
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc1._id;
};
var argument5 = {};
var argument6 = null;
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc2._id;
};
var argument8 = null;
var argument9 = true;
var argument10 = function (d) {
 callbackArguments.push(arguments) 

    return d.somedata === 'ok';
};
var argument11 = null;
var argument12 = {"100":1.2767463697162744e+308,"893":"lF","1.4910236985878668e+308":595,"":""};
var base_0 = [618,1.7976931348623157e+308,126,655,122,595,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,1.7976931348623157e+308,126,655,122,595,893]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,1.7976931348623157e+308,126,655,122,595,893]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,1.7976931348623157e+308,126,655,122,595,893]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/find/findMined/test547.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)