/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    errors.logError(err);
    return 'ghost.' + datetime + '.json';
};
var argument2 = false;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var action = new wd.TouchAction();
    action.press({
        x: 100,
        y: 5
    }).release();
    return browser.performTouchAction(action);
};
var argument4 = null;
var argument5 = [100,714,126];
var argument6 = function (status, body) {
 callbackArguments.push(arguments) 

    return status === 404 ? undefined : body;
};
var argument7 = 1.2730460419503266e+307;
var argument8 = p1;
var argument9 = p1;
var argument10 = function (d) {
 callbackArguments.push(arguments) 

    console.error(d.error);
};
var argument11 = "Ow";
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
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
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test532.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)