/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (response) {
 callbackArguments.push(arguments) 

    if (response.status === 422 && response.data && _this.parseModelErrors) {
        _this.clearModelErrors();
        _this.addModelErrors(_this.parseModelErrors(response.data));
    }
    return $q.reject(response);
};
var argument2 = [893,655,618,843,595,655,595];
var argument3 = function (res) {
 callbackArguments.push(arguments) 

    deferred.reject(res);
};
var argument4 = null;
var argument5 = r_0;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return map.controls[google.maps.ControlPosition[position]].push(control[0]);
};
var argument7 = r_1;
var argument8 = function (err) {
 callbackArguments.push(arguments) 

    pr.reject(err);
};
var argument9 = {"5":"","6":"","213":"","893":"","{S":"","3.3895593153124537e+307":7.350834268796721e+307,"":2.407688456919495e+307,"7.811234408455741e+307":"","1.2340687867778804e+308":"Je","9.681357349210484e+307":""};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
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
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test481.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)