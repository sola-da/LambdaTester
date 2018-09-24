





var callbackArguments = [];
var argument1 = function (et) {
 callbackArguments.push(arguments) 

    return findOrCreateEntityGroup(em, et);
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    return {
        x: d.x,
        value: d.value,
        id: d.id
    };
};
var argument3 = null;
var argument4 = {"49":"","1.4901781336285262e+308":893,"3.865292017619513e+307":1.0032386322938247e+308,"k":""};
var argument5 = function (obj1) {
 callbackArguments.push(arguments) 

    return _.find(array2, function (obj2) {
        if (comparison != null) {
            return comparison(obj1, obj2);
        } else {
            return _.isEqual(obj1, obj2);
        }
    });
};
var argument6 = false;
var argument7 = function (i, cur) {
 callbackArguments.push(arguments) 

    while (cur && cur.ownerDocument && cur !== context) {
        if (pos ? pos.index(cur) > -1 : jQuery(cur).is(selectors)) {
            return cur;
        }
        cur = cur.parentNode;
    }
    return null;
};
var base_0 = ["h","aa","{dw","hzyxb","NC","(","!","B!e(w"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h","aa","{dw","hzyxb","NC","(","!","B!e(w"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h","aa","{dw","hzyxb","NC","(","!","B!e(w"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h","aa","{dw","hzyxb","NC","(","!","B!e(w"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test946.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)