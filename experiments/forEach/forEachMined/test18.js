





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    args.messages ? setTargetType(t.id, args.messages[t.id]) : setTargetType(t.id, args.message);
};
var argument2 = function (pollFn) {
 callbackArguments.push(arguments) 

    pollFn();
};
var argument3 = 1.1277338096018102e+308;
var argument4 = "J% -$";
var argument5 = function (axis) {
 callbackArguments.push(arguments) 

    axis.option.defaults({ Offset: 0.02 });
};
var argument6 = function (user) {
 callbackArguments.push(arguments) 

    usersList.push('<div>', Y.Escape.html(user), '</div>');
};
var argument7 = true;
var argument8 = null;
var base_0 = [618,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test18.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)