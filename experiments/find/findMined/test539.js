





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    done();
};
var argument2 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var argument3 = "";
var argument4 = null;
var argument5 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc1._id;
};
var argument6 = {"0":"","595":"1","705":"","823":9.437723817866675e+307,"1.6149726084213438e+308":6.056904011540616e+307,"":""};
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc2._id;
};
var base_0 = [403,25,823]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,25,823]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,25,823]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,25,823]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findMined/test539.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)