





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    return id === fieldLabelId;
};
var argument2 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc2._id;
};
var argument3 = null;
var argument4 = {"122":9.163114323478394e+307,"":6.91953029820585e+307};
var argument5 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc3._id;
};
var argument6 = true;
var argument7 = function (err, docs) {
 callbackArguments.push(arguments) 

    done('Find should not be executed since autoload failed');
};
var argument8 = null;
var base_0 = ["d]__","x=61hxnc",100,"Q>",783,618]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d]__","x=61hxnc",100,"Q>",783,618]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["d]__","x=61hxnc",100,"Q>",783,618]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["d]__","x=61hxnc",100,"Q>",783,618]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findMined/test3.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)