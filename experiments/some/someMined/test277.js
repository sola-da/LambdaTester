





var callbackArguments = [];
var argument1 = function (attr) {
 callbackArguments.push(arguments) 

    return attr.name === 'Name' && attr.value === baseTypeName;
};
var argument2 = ["(0g","A","TTl","7"];
var argument3 = function (entity) {
 callbackArguments.push(arguments) 

    return entity.entityAspect.isBeingSaved;
};
var argument4 = {"82":"9k","607":"T?LS{J"," ":893,"":"V","h":1.9887810608221318e+307,"7.918015620340516e+307":3.090116693462502e+307};
var argument5 = function (v, i) {
 callbackArguments.push(arguments) 

    if (!(v instanceof Deferred)) {
        cancel(i);
        x.callback(v);
        return true;
    }
    return false;
};
var argument6 = null;
var argument7 = "gD8 ?";
var argument8 = function (meal) {
 callbackArguments.push(arguments) 

    if (meal.id === this.meal) {
        mealLabel = meal.label;
        return true;
    }
};
var argument9 = r_0;
var argument10 = r_0;
var base_0 = [242,59,25,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,59,25,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,59,25,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,59,25,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someMined/test277.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)