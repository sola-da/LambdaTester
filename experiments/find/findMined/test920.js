





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d.somedata === 'another';
};
var argument2 = 49;
var argument3 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    _.isEqual(docs[0], {
        _id: doc2._id,
        a: 2,
        hello: 'earth'
    }).should.equal(true);
    done();
};
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    t.same(0, err.indexOf('Invalid search parameters'), 'The found id did not match the id of the saved object.');
    t.done();
};
var argument5 = function (e, i, a) {
 callbackArguments.push(arguments) 

    return e[key] == value;
};
var base_0 = [122,-1,655,"`u","!",242,"J","*4","P1b"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,-1,655,"`u","!",242,"J","*4","P1b"]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,-1,655,"`u","!",242,"J","*4","P1b"]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,-1,655,"`u","!",242,"J","*4","P1b"]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findMined/test920.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)