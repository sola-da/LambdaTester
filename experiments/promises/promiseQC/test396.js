/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return -59; }
;
var argument2 = p1;
var argument3 = function() {
callbackArguments.push(arguments)
 return 
"æõ»kni":0.4095280995135593,"Ïbm":0,"À42 ½":1.34452983551581,"çÖÅÍ\u001b":[0],"/":true,"ýHÚíX±}":false,":ËÖ":8.426986213109902,"5ÕìüÓÅ":false,"¦Ò;FZ":"Úpj|úÿX"}; }
;
var argument4 = p2;
var argument5 = 49;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseQC/test396.json",JSON.stringify({"baseObjects":serialize([base_0,base_1]),"returnObjects":serialize([r_0,r_1]),"callbackArgs":callbackArguments}))
},300)