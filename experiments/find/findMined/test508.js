





var callbackArguments = [];
var argument1 = function (p) {
 callbackArguments.push(arguments) 

    return p.canPlay(source.toString());
};
var argument2 = false;
var argument3 = function (subView) {
 callbackArguments.push(arguments) 

    return subView.tabId !== undefined;
};
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc3._id;
};
var argument5 = false;
var argument6 = null;
var argument7 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(2);
    _.pluck(docs, '_id').should.contain(doc1._id);
    _.pluck(docs, '_id').should.contain(doc3._id);
    d.find({ fruits: 'doesntexist' }, function (err, docs) {
        assert.isNull(err);
        docs.length.should.equal(0);
        done();
    });
};
var base_0 = [126,-1,49,59,1.7976931348623157e+308,126,714,655,655]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,-1,49,59,1.7976931348623157e+308,126,714,655,655]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,-1,49,59,1.7976931348623157e+308,126,714,655,655]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,-1,49,59,1.7976931348623157e+308,126,714,655,655]
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
require("fs").writeFileSync("./experiments/find/findMined/test508.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)