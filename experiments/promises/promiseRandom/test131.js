/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = [403,0,655,0,1.7976931348623157e+308,607];
var argument2 = {"157":"]","823":9.064539944373592e+307,"t+:":",","7.258739418525118e+307":607,"":893,"7.970713238389835e+307":8.594402437432404e+307};
var argument3 = {"4":"","59":2.5175129962984936e+307,"893":"'i","6.635500126601379e+307":7.449915336269174e+307,"":"","1.7976931348623157e+308":5.348127530625511e+307,"?":4.835256638599211e+307,"1.9934891090188545e+307":893,"`!":403};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test131.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)