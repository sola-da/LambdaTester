/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = p1;
var argument2 = function () {
 callbackArguments.push(arguments) 

    var a1 = new wd.TouchAction().tap({
            x: 100,
            y: 200
        });
    var a2 = new wd.TouchAction().tap({
            x: 50,
            y: 25
        });
    var ma = new wd.MultiAction().add(a1, a2);
    return browser.performMultiAction(el, ma);
};
var argument3 = function (err) {
 callbackArguments.push(arguments) 

    done();
};
var argument4 = 403;
var argument5 = p1;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument7 = null;
var argument8 = r_0;
var argument9 = function (err) {
 callbackArguments.push(arguments) 

    /permission/i.test(err.message).should.be.true;
};
var argument10 = p2;
var argument11 = ["gX:v",893];
var base_0 = p1
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
r_1 = base_1.catch(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.catch(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test431.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)