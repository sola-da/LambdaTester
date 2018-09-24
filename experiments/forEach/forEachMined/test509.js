





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    __data_xs[id] = xs[id];
};
var argument2 = false;
var argument3 = function (method) {
 callbackArguments.push(arguments) 

    $httpBackend[prefix + method] = function (url, headers) {
        return $httpBackend[prefix](method, url, undefined, headers);
    };
};
var argument4 = function (d, i) {
 callbackArguments.push(arguments) 

    d.d3plus_order = i;
};
var argument5 = true;
var argument6 = function (t) {
 callbackArguments.push(arguments) 

    Single[t] = t;
    Token[t] = '\'' + t + '\'';
};
var argument7 = false;
var base_0 = ["eR","_%","4","cc>PH[yD","JG","H,N","!","$","k"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["eR","_%","4","cc>PH[yD","JG","H,N","!","$","k"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["eR","_%","4","cc>PH[yD","JG","H,N","!","$","k"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["eR","_%","4","cc>PH[yD","JG","H,N","!","$","k"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test509.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)