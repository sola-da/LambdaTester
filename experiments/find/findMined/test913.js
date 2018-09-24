





var callbackArguments = [];
var argument1 = function (ext) {
 callbackArguments.push(arguments) 

    return !!v.canPlayType(ext).replace(/no/, '');
};
var argument2 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    _.isEqual(docs[0], {
        _id: doc2._id,
        a: 2,
        hello: 'earth'
    }).should.equal(true);
    done();
};
var argument3 = function (b) {
 callbackArguments.push(arguments) 

    branchArrPos++;
    return b.name == branchName;
};
var argument4 = null;
var argument5 = r_2;
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc3._id;
};
var argument7 = null;
var base_0 = ["j","D","@I","vL","gb","R","j}","w"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["j","D","@I","vL","gb","R","j}","w"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["j","D","@I","vL","gb","R","j}","w"]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["j","D","@I","vL","gb","R","j}","w"]
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
require("fs").writeFileSync("./experiments/find/findMined/test913.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)