





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc2._id;
};
var argument2 = false;
var argument3 = null;
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.length.should.equal(1);
    Object.keys(docs[0]).length.should.equal(2);
    docs[0].a.should.equal(2);
    docs[0]._id.should.equal(newDoc._id);
    done();
};
var argument5 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === newDoc1._id;
};
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc4._id;
};
var argument7 = false;
var argument8 = false;
var base_0 = [49,59,100,705,-1,969,714,242]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,59,100,705,-1,969,714,242]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,59,100,705,-1,969,714,242]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,59,100,705,-1,969,714,242]
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
require("fs").writeFileSync("./experiments/find/findMined/test469.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)