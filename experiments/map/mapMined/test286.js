





var callbackArguments = [];
var argument1 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument2 = {"242":3.6840256889479365e+307,"843":5.676170123903491e+307,"":1.3562174589140189e+308,"1.3494224945063471e+308":"","1.4050215341677837e+308":8.29930172380608e+307,"wC0'":"S2 ","7.745324096796015e+306":"","4.197475631446249e+307":5.760413581065182e+307};
var argument3 = function (value) {
 callbackArguments.push(arguments) 

    var item = {};
    item.value = value;
    item.selected = item.value == selectedValue;
    return item;
};
var argument4 = null;
var argument5 = function (v, i) {
 callbackArguments.push(arguments) 

    return {
        x: ht(i + rsegment.index + 1) + offsets.l,
        y: dim.height - offsets.b - vt(v),
        data: v
    };
};
var argument6 = 82;
var argument7 = function (v) {
 callbackArguments.push(arguments) 

    return v.eval(env);
};
var argument8 = true;
var argument9 = {"":403,"+Ft-d":1.208405733928313e+308,"1.7284389229217968e+308":607};
var base_0 = ["C",59]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C",59]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C",59]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C",59]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test286.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)