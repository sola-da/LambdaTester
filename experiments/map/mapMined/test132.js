





var callbackArguments = [];
var argument1 = function (model) {
 callbackArguments.push(arguments) 

    return model.toJSON();
};
var argument2 = function (cache) {
 callbackArguments.push(arguments) 

    return path.join(this.conf.get('cache'), cache, '.cache.json');
};
var argument3 = function (r) {
 callbackArguments.push(arguments) 

    return r.get(attribute);
};
var argument4 = false;
var argument5 = function (sym) {
 callbackArguments.push(arguments) 

    return make_node(AST_String, sym, { value: sym.name });
};
var argument6 = r_1;
var argument7 = "s";
var base_0 = [843,403,783,0]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,403,783,0]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,403,783,0]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,403,783,0]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test132.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)