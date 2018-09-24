





var callbackArguments = [];
var argument1 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument2 = r_0;
var argument3 = function (arg, i) {
 callbackArguments.push(arguments) 

    return make_node(AST_String, self.args[i], { value: arg.print_to_string() });
};
var argument4 = null;
var argument5 = null;
var argument6 = function (extend) {
 callbackArguments.push(arguments) 

    return extend.eval(env);
};
var argument7 = r_0;
var argument8 = function (t, e) {
 callbackArguments.push(arguments) 

    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + '%'), t;
};
var argument9 = r_3;
var argument10 = r_3;
var base_0 = [1.7976931348623157e+308,82,843,82,783,126,969,595,893,242]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,82,843,82,783,126,969,595,893,242]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/map/mapMined/test29.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)