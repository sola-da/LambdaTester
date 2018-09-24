/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = [893,595,242,714,403,627,705,25];
var argument2 = function (resp) {
 callbackArguments.push(arguments) 

    oldCB(null, resp);
};
var argument3 = true;
var argument4 = function (obj) {
 callbackArguments.push(arguments) 

    var reply = obj(typeSpec);
    if (typeof reply.then === 'function') {
        reply.then(function (data) {
            extension.data = data;
            promise.resolve();
        });
    } else {
        extension.data = reply;
        promise.resolve();
    }
};
var argument5 = {"49":8.553955652397617e+307,"122":"P2jq","5.706977311338548e+307":"","Sb]K":6.989122695319369e+307,"-1":705,"":1.3948995194457116e+308,"rH":242,"TDF^8":618,"2.823503129857171e+307":59,"1.6691501333502618e+308":""};
var argument6 = function (response) {
 callbackArguments.push(arguments) 

    if (response.status === 422 && response.data && _this.parseModelErrors) {
        _this.clearModelErrors();
        _this.addModelErrors(_this.parseModelErrors(response.data));
    }
    return $q.reject(response);
};
var argument7 = {"655":1.2160285980262396e+307,"":9.75214954313807e+307,"4.652954178808216e+307":1.7976931348623157e+308,"1.655244407770425e+308":"","S":126};
var argument8 = {"E":893,"l":""};
var argument9 = function (error) {
 callbackArguments.push(arguments) 

    console.error(error);
};
var argument10 = null;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
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
r_3 = base_3.catch(argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test543.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)