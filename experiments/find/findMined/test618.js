





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id1;
};
var argument2 = false;
var argument3 = null;
var argument4 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([
        1,
        7,
        6,
        5,
        4
    ], ids, 'Searching when min>max condition(ZREVRANGEBYSCORE) is invalid.');
    t.done();
};
var argument5 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(2);
    done();
};
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === doc1._id;
};
var argument7 = r_0;
var argument8 = null;
var base_0 = ["E",5e-324,"_^^YLf"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["E",5e-324,"_^^YLf"]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["E",5e-324,"_^^YLf"]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["E",5e-324,"_^^YLf"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findMined/test618.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)