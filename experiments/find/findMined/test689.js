





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(1);
    var doc = docs[0];
    Object.keys(doc).length.should.equal(3);
    doc.hello.should.equal('world');
    doc.bloup.should.equal('blap');
    done();
};
var argument2 = function (p) {
 callbackArguments.push(arguments) 

    return p.canPlay(source.toString());
};
var argument3 = null;
var argument4 = "J";
var argument5 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '3';
};
var argument6 = "";
var argument7 = function (r) {
 callbackArguments.push(arguments) 

    return r.line == line;
};
var base_0 = [242,705,1.7976931348623157e+308,1.7976931348623157e+308,618,122,49,403,618]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,705,1.7976931348623157e+308,1.7976931348623157e+308,618,122,49,403,618]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,705,1.7976931348623157e+308,1.7976931348623157e+308,618,122,49,403,618]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,705,1.7976931348623157e+308,1.7976931348623157e+308,618,122,49,403,618]
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
require("fs").writeFileSync("./experiments/find/findMined/test689.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)