





var callbackArguments = [];
var argument1 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument2 = null;
var argument3 = 122;
var argument4 = function (model) {
 callbackArguments.push(arguments) 

    return model.get(attr);
};
var argument5 = ["Ja","{Ig",627,"o"," ",126,"%^"];
var argument6 = {"122":627,"126":"","783":"","":"","1.2370065553296267e+307":3.7668525981726295e+307};
var argument7 = function (pred) {
 callbackArguments.push(arguments) 

    return pred.visit(context);
};
var argument8 = r_1;
var argument9 = function (i, elem) {
 callbackArguments.push(arguments) 

    var val = jQuery(this).val();
    return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
        return {
            name: elem.name,
            value: val.replace(rCRLF, '\r\n')
        };
    }) : {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument10 = r_3;
var base_0 = [-1,460,460,59,823,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,460,460,59,823,627]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,460,460,59,823,627]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,460,460,59,823,627]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test16.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)