





var callbackArguments = [];
var argument1 = function (error) {
 callbackArguments.push(arguments) 

    return error.message === 'invalid.git.version';
};
var argument2 = null;
var argument3 = null;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc2._id;
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === doc2._id;
};
var argument6 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(3);
    _.pluck(docs, 'somedata').should.contain('ok');
    _.pluck(docs, 'somedata').should.contain('another');
    _.pluck(docs, 'somedata').should.contain('again');
    done();
};
var base_0 = [59,"6",82,460,"Q$","dqN","#",","]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,"6",82,460,"Q$","dqN","#",","]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,"6",82,460,"Q$","dqN","#",","]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,"6",82,460,"Q$","dqN","#",","]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findMined/test802.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)