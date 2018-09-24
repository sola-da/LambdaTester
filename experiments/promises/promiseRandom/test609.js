/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"157":25,"242":"n#XY","":"","`":403,"-1":"_","5.559614676056458e+307":122,"5.977287535945514e+307":25,"L<:0":"","&":8.057016917843454e+307,"2.126845538028123e+307":1.6842528471523885e+308};
var argument2 = {"r":"<","":460,"&!":59};
var argument3 = {"7":"!","157":"","607":1.3450793236594381e+308,"714":157,"j":"","":"'A","2.970295762663093e+307":"wH","ZX":"","=tUpuDO+1":893,"O":""};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
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
require("fs").writeFileSync("./experiments/promises/promiseRandom/test609.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)