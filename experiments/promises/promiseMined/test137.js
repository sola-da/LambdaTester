/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument2 = "";
var argument3 = p2;
var argument4 = function (payload) {
 callbackArguments.push(arguments) 

    return _this.deserialize(payload, serializerOptions);
};
var argument5 = null;
var argument6 = p2;
var argument7 = function (e) {
 callbackArguments.push(arguments) 

    if (e) {
        e.query = query;
        e.entityManager = em;
    }
    return Q.reject(e);
};
var argument8 = p1;
var argument9 = {"100":"","":"","MU":"Zg","f":"","OZ":7.282750732095509e+307};
var argument10 = {"<":82,"Yha$x&":"",",n@t":"T","?":627};
var argument11 = function (inst) {
 callbackArguments.push(arguments) 

    resolved = inst;
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument10,argument11)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test137.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)