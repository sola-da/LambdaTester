





var callbackArguments = [];
var argument1 = function (other_macro) {
 callbackArguments.push(arguments) 

    return other_macro.is_identified_by(signature);
};
var argument2 = r_0;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    return d.somedata === 'ok';
};
var argument4 = null;
var argument5 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === 'aaa';
};
var argument6 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.deepEqual(docs, [{
            _id: newDoc._id,
            hello: 'world'
        }]);
    done();
};
var argument7 = [242,242];
var argument8 = {"403":"","595":126,"":893,"R":"K","1.2066684398691096e+308":"","3.377960715099946e+307":157,"8.270672171154207e+307":"8sR","Mv5@;":"s"};
var base_0 = [100,655,-100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,655,-100]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,655,-100]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,655,-100]
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
require("fs").writeFileSync("./experiments/find/findMined/test289.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)