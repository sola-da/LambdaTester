





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isDefined(err);
    assert.isUndefined(docs);
    d.findOne({ $or: { hello: 'world' } }, function (err, doc) {
        assert.isDefined(err);
        assert.isUndefined(doc);
        done();
    });
};
var argument2 = ["o"];
var argument3 = {"783":618,"":893};
var argument4 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([
        1,
        7
    ], ids, 'Searching when min>max condition(ZREVRANGEBYSCORE) with limit is invalid.');
    t.done();
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    return this.listens && this.listens.length;
};
var argument6 = null;
var argument7 = [893,157,627];
var argument8 = function (err, user) {
 callbackArguments.push(arguments) 

    if (err)
        err;
    done(err, user);
};
var argument9 = null;
var base_0 = [";C",714,"$x",607,1.7976931348623157e+308,242,595,0,"Q"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";C",714,"$x",607,1.7976931348623157e+308,242,595,0,"Q"]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";C",714,"$x",607,1.7976931348623157e+308,242,595,0,"Q"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";C",714,"$x",607,1.7976931348623157e+308,242,595,0,"Q"]
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
require("fs").writeFileSync("./experiments/find/findMined/test936.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)