





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.a === 42;
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id1;
};
var argument3 = {"59":1.412814055317757e+308,"714":49,"893":"@_&O","6.876718363708873e+307":714,"9.133915872854402e+307":403,"_@OG":"N?"};
var argument4 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.prototype.name === name;
};
var argument5 = null;
var argument6 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(1);
    docs[0].hello.should.equal(badString);
    done();
};
var argument7 = "'";
var argument8 = 1.3975558743011628e+308;
var base_0 = [126,"|3","dZp",705,242,"[1Vc^<WbRB","X","*OI"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,"|3","dZp",705,242,"[1Vc^<WbRB","X","*OI"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,"|3","dZp",705,242,"[1Vc^<WbRB","X","*OI"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,"|3","dZp",705,242,"[1Vc^<WbRB","X","*OI"]
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
require("fs").writeFileSync("./experiments/find/findMined/test906.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)