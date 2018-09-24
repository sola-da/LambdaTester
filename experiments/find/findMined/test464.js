





var callbackArguments = [];
var argument1 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.same(0, ids.length, 'Searching for a nonexistant index did not return an empty array.');
    t.done();
};
var argument2 = null;
var argument3 = null;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc2._id;
};
var argument5 = [1.7976931348623157e+308,126,49,-100,893,157,607];
var argument6 = r_1;
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc1._id;
};
var argument8 = {"242":"|$","d":1.637706200518792e+307,"wO^t&":"","$":"-","":4.1227555196521416e+307,"1.7976931348623157e+308":"z","5.988017183166622e+307":"C","1.146039583086744e+308":""};
var argument9 = {};
var argument10 = function (d) {
 callbackArguments.push(arguments) 

    return d.somedata === 'again';
};
var argument11 = r_1;
var base_0 = ["oI",242,607,"nd","LL",823,122]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["oI",242,607,"nd","LL",823,122]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["oI",242,607,"nd","LL",823,122]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["oI",242,607,"nd","LL",823,122]
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
require("fs").writeFileSync("./experiments/find/findMined/test464.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)