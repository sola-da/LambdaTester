





var callbackArguments = [];
var argument1 = function (n) {
 callbackArguments.push(arguments) 

    return 0 === n.failed_pings;
};
var argument2 = 893;
var argument3 = 1.227671793787852e+308;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return typeof deps[d] === 'string';
};
var argument5 = function (value, index, array) {
 callbackArguments.push(arguments) 

    return done || (done = !predicate(value, index, array));
};
var argument6 = {"0":8.415228680936771e+307,"607":"","9.856223028541512e+307":5.19545987520434e+307,"1.4206422150423293e+308":9.325236234818805e+307,"A9]g":9.27717010141253e+307,"-100":"&VU","5t":126,"":"","3.7809484213745324e+306":"M-"};
var argument7 = 6.038422757269321e+307;
var argument8 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument9 = r_1;
var argument10 = r_0;
var base_0 = [122,"w","9`6"]
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
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"w","9`6"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test739.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)