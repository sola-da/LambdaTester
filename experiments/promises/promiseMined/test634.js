/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (newTypeSpec) {
 callbackArguments.push(arguments) 

    promise.resolve(newTypeSpec);
};
var argument2 = null;
var argument3 = true;
var argument4 = {"3":1.1465490919089324e+308,"783":3.0579297391417944e+307,"8.514729756570929e+307":1.2686735975592097e+308,"1.0852078845371491e+308":"","":82,"9.978035284290205e+307":3.882909720579613e+306,"2.320353221901601e+307":-1};
var argument5 = function () {
 callbackArguments.push(arguments) 

    return res;
};
var argument6 = null;
var argument7 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument8 = function (inst) {
 callbackArguments.push(arguments) 

    count += 1;
};
var argument9 = "";
var argument10 = [-100,100,705,242,-100,627,126,157];
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
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
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test634.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)