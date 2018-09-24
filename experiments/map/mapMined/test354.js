





var callbackArguments = [];
var argument1 = function (securityGroup) {
 callbackArguments.push(arguments) 

    return securityGroup.get('_id');
};
var argument2 = function (element) {
 callbackArguments.push(arguments) 

    return {
        value: element,
        meta: 'tag',
        score: Number.MAX_VALUE
    };
};
var argument3 = {"242":"o^}<","":2.192361705615646e+307};
var argument4 = function (r) {
 callbackArguments.push(arguments) 

    if (r.rank === 10) {
        r.rank = 5;
    } else if (r.rank > 3 && r.rank < 10) {
        r.rank = 4;
    }
    return [
        r.name,
        r.rank
    ];
};
var argument5 = r_1;
var argument6 = true;
var argument7 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument8 = "";
var base_0 = [82,100,100]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,100,100]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,100,100]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test354.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)