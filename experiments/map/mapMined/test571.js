





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return parseInt(c, 16);
};
var argument2 = null;
var argument3 = "";
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument5 = {"1":"wOF?","6.056904011540616e+307":"","m":"","":"","9.437723817866675e+307":595,"9.855960239111223e+307":1.1888268025101908e+308,">,":"","1.7758725368913372e+308":82,"7.577704748192051e+307":""};
var argument6 = false;
var argument7 = function (val, key) {
 callbackArguments.push(arguments) 

    return operators[key] + field.format.convert(val);
};
var argument8 = function (n) {
 callbackArguments.push(arguments) 

    if (n instanceof Array) {
        return n.map(function (nn) {
            return vars.format.value(nn.toString(), t);
        });
    } else if (n) {
        return vars.format.value(n.toString(), t);
    }
};
var argument9 = -100;
var argument10 = {"L":6.677325635791598e+306,"7.304942541860138e+307":1.0569166113685154e+308,"":"4+s+CC"};
var base_0 = [893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test571.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)