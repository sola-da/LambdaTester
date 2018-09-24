





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc1._id;
};
var argument2 = null;
var argument3 = 403;
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs[0].something.should.equal('created ok');
    assert.isUndefined(docs[0].newField);
    done();
};
var argument5 = "";
var argument6 = function (p) {
 callbackArguments.push(arguments) 

    return p.canPlay(source.toString());
};
var argument7 = r_2;
var argument8 = r_2;
var argument9 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.same(ids, [], 'Searching for a nonexistant number did not return an empty array.');
    t.done();
};
var argument10 = {"0":"H",">":"p8I","":"v","1.3940367832120972e+308":9.886955310732285e+307,"T7C":823,"2.970002635667032e+307":"V"};
var argument11 = {"1.7976931348623157e+308":783,"7.355295867698028e+307":""};
var base_0 = [82]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findMined/test981.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)