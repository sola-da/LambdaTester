





var callbackArguments = [];
var argument1 = function (value, index, array) {
 callbackArguments.push(arguments) 

    array[index] = 'a';
    return true;
};
var argument2 = 4.917330924485011e+307;
var argument3 = null;
var argument4 = function (n) {
 callbackArguments.push(arguments) 

    return typeof n.x == 'number' && typeof n.y == 'number';
};
var argument5 = null;
var argument6 = ["H","^2o","6","4","@","t","n_","3","MtK"];
var argument7 = function (file) {
 callbackArguments.push(arguments) 

    return file.indexOf('test-rolling-file-stream-write-less') > -1;
};
var argument8 = {"1":655,"122":"EYR","`":1.114244724712357e+308,"1.5661230906998122e+308":6.155776818935626e+307,"":1.442850986196257e+308,"1.0263236799540323e+308":"","1.4592881572758609e+308":"","7.342422763890615e+307":1.758836627906837e+308,"K":")"};
var argument9 = null;
var argument10 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument11 = r_3;
var argument12 = {"122":403,"783":25,"893":"","TPfG(R%-+B":9.449042894534303e+307,"":157,"1.713968015404747e+308":"GY<r{9w","{":"y","F":4.7296674506077894e+306,"xO":""};
var base_0 = ["x"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test485.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)