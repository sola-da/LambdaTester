





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc1._id;
};
var argument2 = true;
var argument3 = ["|","FB"];
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(2);
    _.pluck(docs, 'somedata').should.not.contain('ok');
    return cb();
};
var argument5 = [893,"RJ(","`","5?"];
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc2._id;
};
var argument7 = true;
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc4._id;
};
var argument9 = true;
var base_0 = [714,100,618,0,783,705,82,655]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,100,618,0,783,705,82,655]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,100,618,0,783,705,82,655]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,100,618,0,783,705,82,655]
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
require("fs").writeFileSync("./experiments/find/findMined/test538.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)