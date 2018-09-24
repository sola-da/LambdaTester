





var callbackArguments = [];
var argument1 = function (prv, cur) {
 callbackArguments.push(arguments) 

    return prv + HLP.packMPI(cur);
};
var argument2 = r_0;
var argument3 = function (r, s) {
 callbackArguments.push(arguments) 

    r[o[s]] = s;
    return r;
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    return { sighting: 0 };
};
var argument5 = r_1;
var argument6 = [",",";","`Ug","q{","|xU"];
var argument7 = function (sum, suite) {
 callbackArguments.push(arguments) 

    return sum + suite.total();
};
var argument8 = true;
var base_0 = ["6k2","g","d","G","oP3h","6","P","%5"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["6k2","g","d","G","oP3h","6","P","%5"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["6k2","g","d","G","oP3h","6","P","%5"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6k2","g","d","G","oP3h","6","P","%5"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test367.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)