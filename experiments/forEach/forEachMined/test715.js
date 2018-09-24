





var callbackArguments = [];
var argument1 = function (obj, index) {
 callbackArguments.push(arguments) 

    this.a[index] = obj;
};
var argument2 = function (obj, index) {
 callbackArguments.push(arguments) 

    this.a[index] = obj;
};
var argument3 = r_1;
var argument4 = function (sid) {
 callbackArguments.push(arguments) 

    var id = parseInt(sid, 10);
    var path = msg.callbacks[id];
    traverse.set(args, path, f(id));
};
var argument5 = null;
var argument6 = function (interceptor) {
 callbackArguments.push(arguments) 

    if (interceptor.request || interceptor.requestError) {
        chain.unshift(interceptor.request, interceptor.requestError);
    }
    if (interceptor.response || interceptor.responseError) {
        chain.push(interceptor.response, interceptor.responseError);
    }
};
var base_0 = [460,122,49,126,0,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,122,49,126,0,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,122,49,126,0,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,122,49,126,0,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test715.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)