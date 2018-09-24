





var callbackArguments = [];
var argument1 = function (err, ids) {
 callbackArguments.push(arguments) 

    if (err) {
        console.dir(err);
    }
    t.same(ids, [], 'Ids were found even though the name should not be findable.');
    t.done();
};
var argument2 = "V";
var argument3 = ["y"];
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(0);
    return cb();
};
var argument5 = null;
var argument6 = r_1;
var argument7 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.deepEqual(docs, [{
            _id: newDoc._id,
            hello: 'world'
        }]);
    done();
};
var argument8 = null;
var argument9 = r_0;
var argument10 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var argument11 = {"9":1.001705347062233e+308,"126":"","":"","1.3657620703247472e+308":1.1507615407994848e+308,"I":"O","UZE":"_","1.3952186269769712e+308":1.6982669307746574e+308};
var argument12 = r_0;
var base_0 = ["B:","Q",";V"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B:","Q",";V"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B:","Q",";V"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B:","Q",";V"]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/find/findMined/test601.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)