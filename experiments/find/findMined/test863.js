





var callbackArguments = [];
var argument1 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(0);
    done();
};
var argument2 = true;
var argument3 = function (b) {
 callbackArguments.push(arguments) 

    branchArrPos++;
    return b.name == branchName;
};
var argument4 = ["I",";p6"];
var argument5 = function (ext) {
 callbackArguments.push(arguments) 

    return !!a.canPlayType(ext).replace(/no/, '');
};
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === doc2._id;
};
var argument7 = 893;
var argument8 = 893;
var base_0 = [714,122,126,655,627,823]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,122,126,655,627,823]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,122,126,655,627,823]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,122,126,655,627,823]
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
require("fs").writeFileSync("./experiments/find/findMined/test863.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)