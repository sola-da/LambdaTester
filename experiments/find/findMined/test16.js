





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d.name == fileName;
};
var argument2 = null;
var argument3 = 122;
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === 'aaa';
};
var argument5 = ["Ja","{Ig",627,"o"," ",126,"%^"];
var argument6 = {"122":627,"126":"","783":"","":"","1.2370065553296267e+307":3.7668525981726295e+307};
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc3._id;
};
var argument8 = r_1;
var argument9 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(1);
    var doc = docs[0];
    Object.keys(doc).length.should.equal(3);
    doc.hello.should.equal('world');
    doc.bloup.should.equal('blap');
    done();
};
var argument10 = r_3;
var base_0 = [-1,460,460,59,823,627]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,460,460,59,823,627]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,460,460,59,823,627]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,460,460,59,823,627]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findMined/test16.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)