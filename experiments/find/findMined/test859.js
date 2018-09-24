





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === doc1._id;
};
var argument2 = [655,1.7976931348623157e+308,655];
var argument3 = [618,714,705,595,460,242,714,655,213];
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === doc1._id;
};
var argument5 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    Object.keys(docs[0]).length.should.equal(2);
    docs[0]._id.should.equal(id1);
    docs[0].somedata.should.equal('ok');
    return cb();
};
var argument6 = 823;
var argument7 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    d.getAllData().length.should.equal(1);
    d.indexes._id.getMatching(doc1._id).length.should.equal(1);
    d.indexes.a.getMatching(1).length.should.equal(1);
    d.indexes._id.getMatching(doc1._id)[0].should.equal(d.indexes.a.getMatching(1)[0]);
    d.indexes.a.getMatching(2).length.should.equal(0);
    done();
};
var argument8 = 1.5460356680476663e+308;
var base_0 = [122,655,122,618,618]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,655,122,618,618]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,655,122,618,618]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,655,122,618,618]
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
require("fs").writeFileSync("./experiments/find/findMined/test859.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)