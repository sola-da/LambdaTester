





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d.name == fileName;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.same(ids, [], 'Searching for a nonexistant number did not return an empty array.');
    t.done();
};
var argument5 = "jen ";
var argument6 = false;
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '1';
};
var argument8 = r_0;
var argument9 = 49;
var argument10 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === doc1._id;
};
var argument11 = [49,460,1.7976931348623157e+308,655,0];
var base_0 = [122,242,705,"j","l",-100,5e-324,843,"R","W="]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,242,705,"j","l",-100,5e-324,843,"R","W="]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,242,705,"j","l",-100,5e-324,843,"R","W="]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,242,705,"j","l",-100,5e-324,843,"R","W="]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findMined/test994.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)