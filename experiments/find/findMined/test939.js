





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc4._id;
};
var argument2 = {"607":823,"":893,"5@":"","3.9645886338271275e+307":"","{Oa":6.79718584715068e+307,"2.675480882281961e+307":"Y","J":5.355718623046913e+307,"v":823};
var argument3 = {"122":"","595":"y8f","8.461441588550943e+307":157,"":"","-":"","1.5323173937644542e+308":59};
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '3';
};
var argument5 = "c";
var argument6 = false;
var argument7 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(1);
    var doc = docs[0];
    Object.keys(doc).length.should.equal(3);
    doc.hello.should.equal('world');
    doc.bloup.should.equal('blap');
    done();
};
var argument8 = null;
var argument9 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs[0].a.should.equal('something');
    done();
};
var argument10 = r_0;
var base_0 = [607,122,618,893,82,-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,122,618,893,82,-1]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,122,618,893,82,-1]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,122,618,893,82,-1]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findMined/test939.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)