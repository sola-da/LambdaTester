





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    context = this;
};
var argument2 = null;
var argument3 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    var filter = self._filters[key], value = data[key];
    return filter.match && filter.match.test(value) || filter.isValid && filter.isValid(value) || filter.target === value ? true : false;
};
var argument5 = null;
var argument6 = function (other) {
 callbackArguments.push(arguments) 

    return _.indexOf(other, item) >= 0;
};
var argument7 = false;
var argument8 = {"":126,"H":1.4414222184291631e+308,"9.234748031560332e+307":""};
var base_0 = ["&oZ","p","2HrK","#","_[",",fX`#+^","*"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&oZ","p","2HrK","#","_[",",fX`#+^","*"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&oZ","p","2HrK","#","_[",",fX`#+^","*"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&oZ","p","2HrK","#","_[",",fX`#+^","*"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyMined/test250.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)