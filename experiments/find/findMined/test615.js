





var callbackArguments = [];
var argument1 = function (ext) {
 callbackArguments.push(arguments) 

    return !!v.canPlayType(ext).replace(/no/, '');
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function (err, ids) {
 callbackArguments.push(arguments) 

    errLogger(err);
    t.same(ids.sort(), [
        users[0].id,
        users[1].id
    ].sort(), 'The found id did not match the id of the saved object.');
    t.done();
};
var argument5 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc1._id;
};
var argument6 = null;
var argument7 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(1);
    docs[0].hello.should.equal(badString);
    done();
};
var argument8 = 8.788859529869881e+307;
var base_0 = ["#zN","d","r","O","{","6V$","Dy",",","]","`5*6Vk"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#zN","d","r","O","{","6V$","Dy",",","]","`5*6Vk"]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#zN","d","r","O","{","6V$","Dy",",","]","`5*6Vk"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#zN","d","r","O","{","6V$","Dy",",","]","`5*6Vk"]
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
require("fs").writeFileSync("./experiments/find/findMined/test615.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)