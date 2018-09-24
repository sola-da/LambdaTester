





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(1);
    var doc = docs[0];
    Object.keys(doc).length.should.equal(3);
    doc.hello.should.equal('world');
    doc.bloup.should.equal(3);
    done();
};
var argument2 = true;
var argument3 = "";
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    var stop = iter(key, self.getPackageVersions(key));
    return stop;
};
var argument5 = "";
var argument6 = {"655":595,"":"?"};
var argument7 = function (err, ids) {
 callbackArguments.push(arguments) 

    ids.sort();
    t.same(self.userIds, ids, 'find() did not return all users when not given any search parameters.');
    t.done();
};
var argument8 = true;
var argument9 = function (o) {
 callbackArguments.push(arguments) 

    return o.ins === currentPair;
};
var argument10 = r_2;
var base_0 = ["d",618,595,"v`1",213,-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d",618,595,"v`1",213,-1]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["d",618,595,"v`1",213,-1]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["d",618,595,"v`1",213,-1]
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
require("fs").writeFileSync("./experiments/find/findMined/test634.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)