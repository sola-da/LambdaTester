





var callbackArguments = [];
var argument1 = function (b) {
 callbackArguments.push(arguments) 

    branchArrPos++;
    return b.name == branchName;
};
var argument2 = false;
var argument3 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    Object.keys(docs[0]).length.should.equal(3);
    docs[0].hello.should.equal('world');
    docs[0].bloup.should.equal('blap');
    assert.isDefined(docs[0]._id);
    done();
};
var argument4 = r_1;
var argument5 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument6 = true;
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '1';
};
var base_0 = [122,893,403,"Eo(",893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,893,403,"Eo(",893]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,893,403,"Eo(",893]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,893,403,"Eo(",893]
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
require("fs").writeFileSync("./experiments/find/findMined/test120.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)