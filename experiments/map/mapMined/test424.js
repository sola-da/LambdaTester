





var callbackArguments = [];
var argument1 = function (dependant) {
 callbackArguments.push(arguments) 

    var release = dependant.pkgMeta._release;
    return dependant.endpoint.name + (release ? '#' + release : '');
};
var argument2 = "y@";
var argument3 = function (user) {
 callbackArguments.push(arguments) 

    return user.channelNick(channel);
};
var argument4 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: '\'' + val + '\'',
        token: 'text',
        next: function (stack) {
            stack.pop();
        }
    };
};
var argument5 = r_2;
var argument6 = function (childNode) {
 callbackArguments.push(arguments) 

    return childNode.container;
};
var base_0 = [893,1.7976931348623157e+308,969,783,893,655,-100,0,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,1.7976931348623157e+308,969,783,893,655,-100,0,783]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,1.7976931348623157e+308,969,783,893,655,-100,0,783]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,1.7976931348623157e+308,969,783,893,655,-100,0,783]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test424.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)