





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return children(this);
};
var argument2 = function (str) {
 callbackArguments.push(arguments) 

    return str.replace(/\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}/g, function (s) {
        var code = parseInt(s.substr(2), 16);
        return regexp_safe_literal(code) ? String.fromCharCode(code) : s;
    });
};
var argument3 = null;
var argument4 = [0,100,122,705,100];
var argument5 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument6 = null;
var argument7 = function (user) {
 callbackArguments.push(arguments) 

    return user.channelNick(channel);
};
var base_0 = ["d"," ","X1?2X-","v","f","F","1","c8"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d"," ","X1?2X-","v","f","F","1","c8"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["d"," ","X1?2X-","v","f","F","1","c8"]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test275.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)