





var callbackArguments = [];
var argument1 = function (result) {
 callbackArguments.push(arguments) 

    return result.id === discussionId;
};
var argument2 = false;
var argument3 = {"100":122,"7.570029149564394e+307":655,"C2":627,"":1.4451062225792429e+308,",":"^VrZ","8.044405069216452e+307":""};
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs[0].hello = 'changed';
    d.findOne({ a: 2 }, function (err, doc) {
        doc.hello.should.equal('world');
        done();
    });
};
var argument5 = function (o) {
 callbackArguments.push(arguments) 

    return o.ins === currentPair;
};
var argument6 = ["Kv","E","jn","N[t","@;m"];
var argument7 = {"25":1.614133961669199e+308,"655":655,"893":"","5.792843044902137e+307":3.4244586164172016e+307,"1.2996437972174193e+308":"","":823,"5e-324":823,"4.959281066363809e+306":"","&":843};
var argument8 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same(ids, [
        3,
        8
    ], 'The found ids were incorrect.');
    t.done();
};
var argument9 = {"618":969,"":7.995422896269288e+306};
var argument10 = null;
var base_0 = [595,"7",122,157,100,"N","y",655,403,"5t"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,"7",122,157,100,"N","y",655,403,"5t"]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,"7",122,157,100,"N","y",655,403,"5t"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,"7",122,157,100,"N","y",655,403,"5t"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findMined/test458.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)