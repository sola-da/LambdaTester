





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id3;
};
var argument2 = {"618":8.945013729830286e+307,"1.3571928124337112e+308":"p","":126};
var argument3 = true;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc4._id;
};
var argument5 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(1);
    var doc = docs[0];
    Object.keys(doc).length.should.equal(3);
    doc.hello.should.equal('world');
    doc.bloup.should.equal(3);
    done();
};
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return d.somedata === 'again';
};
var base_0 = [25,49,843,893,783,82,-100,100,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,49,843,893,783,82,-100,100,705]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,49,843,893,783,82,-100,100,705]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,49,843,893,783,82,-100,100,705]
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
require("fs").writeFileSync("./experiments/find/findMined/test463.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)