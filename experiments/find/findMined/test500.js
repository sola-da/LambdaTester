





var callbackArguments = [];
var argument1 = function (b) {
 callbackArguments.push(arguments) 

    branchArrPos++;
    return b.name == branchName;
};
var argument2 = ["`2",823,"8s3-","S",460,"q"];
var argument3 = r_0;
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(1);
    var doc = docs[0];
    Object.keys(doc).length.should.equal(3);
    doc.hello.should.equal('world');
    doc.bloup.should.equal('blap');
    done();
};
var argument5 = function (err, ids) {
 callbackArguments.push(arguments) 

    if (err) {
        console.dir(err);
    }
    userIds.push(self.userIds[self.userIds.length - 1]);
    t.same(userIds.length, 3, 'Didn\'t create 2 users, instead: ' + userIds.length);
    t.same(ids.sort(), userIds.sort(), 'The found id did not match the id of the saved objects.');
    t.done();
};
var argument6 = r_1;
var argument7 = function (value, key) {
 callbackArguments.push(arguments) 

    var stop = iter(CS.PackageAndVersion.fromString(key), value);
    return stop;
};
var base_0 = [49,"nq","m","4",126,25]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,"nq","m","4",126,25]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,"nq","m","4",126,25]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,"nq","m","4",126,25]
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
require("fs").writeFileSync("./experiments/find/findMined/test500.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)