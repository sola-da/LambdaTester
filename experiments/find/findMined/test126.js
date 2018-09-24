





var callbackArguments = [];
var argument1 = function (frame) {
 callbackArguments.push(arguments) 

    var v = frame.variable(name);
    if (v) {
        return v.value.eval(env);
    }
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    return d.somedata === 'ok';
};
var argument3 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(0);
    done();
};
var argument4 = null;
var argument5 = r_1;
var argument6 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc2._id;
};
var base_0 = [627,1.7976931348623157e+308,49,242,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,1.7976931348623157e+308,49,242,705]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,1.7976931348623157e+308,49,242,705]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,1.7976931348623157e+308,49,242,705]
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
require("fs").writeFileSync("./experiments/find/findMined/test126.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)