/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"25":969,"122":-100,"705":"","969":1.2078433800359744e+308,"6.214080546459266e+307":"","5.798188633052839e+307":157,"":"zy(","Zcvu#":595,"1.3853159234701984e+308":"Yq{"};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return sh.run([
        '-c',
        adb + ' shell rm -r //cache/*'
    ]);
};
var argument3 = function () {
 callbackArguments.push(arguments) 

    return db.changes();
};
var argument4 = function checkCharacterCount() {
 callbackArguments.push(arguments) 

    test.assert(getRemainingBioCharacterCount() === '200', 'Bio remaining characters is 200');
};
var argument5 = p1;
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument7 = null;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument6,argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test229.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)