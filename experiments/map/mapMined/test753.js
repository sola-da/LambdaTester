





var callbackArguments = [];
var argument1 = function (arg, i) {
 callbackArguments.push(arguments) 

    return make_node(AST_String, self.args[i], { value: arg.print_to_string() });
};
var argument2 = 126;
var argument3 = function (localizedSymbol) {
 callbackArguments.push(arguments) 

    return regexpEscape(localizedSymbol);
};
var argument4 = ["m","^=","I"];
var argument5 = false;
var argument6 = function (li, num) {
 callbackArguments.push(arguments) 

    return num !== index ? num : null;
};
var argument7 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument8 = "9";
var base_0 = ["=","R","6F)l","oV?"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=","R","6F)l","oV?"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=","R","6F)l","oV?"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=","R","6F)l","oV?"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test753.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)