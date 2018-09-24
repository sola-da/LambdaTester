/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = 460;
var argument2 = function (options) {
 callbackArguments.push(arguments) 

    return new Keyring(identifier, options);
};
var argument3 = {"595":"ho","":627,"_":1.3652567577892266e+308,"1.790213682057572e+308":"G","6.013672005787866e+307":242,"5e-324":126};
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument5 = {"59":4.089143796224705e+307,"595":595,"1.3267352212673202e+308":"]w","@":"","":-100,"3.7668525981726295e+307":783,"Q]L":"_l]s","6&[":"","2,6_g]1":""};
var argument6 = false;
var argument7 = function (el) {
 callbackArguments.push(arguments) 

    return browser.setImmediateValueInApp(el, '12345').setImmediateValue(el, '12345').then(function () {
        return el.setImmediateValueInApp('12345').setImmediateValue('12345');
    });
};
var argument8 = null;
var argument9 = function () {
 callbackArguments.push(arguments) 

    return fs.exists(dbPath);
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test19.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)