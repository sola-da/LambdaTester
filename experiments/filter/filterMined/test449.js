





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument2 = null;
var argument3 = function (c) {
 callbackArguments.push(arguments) 

    var source = c[vars.edges.source][vars.id.value], target = c[vars.edges.target][vars.id.value];
    return claimed.indexOf(source) < 0 && target == primaryId || claimed.indexOf(target) < 0 && source == primaryId;
};
var argument4 = ["8O",618,705,126];
var argument5 = function (p) {
 callbackArguments.push(arguments) 

    return p.id !== peer.id;
};
var argument6 = r_1;
var argument7 = function (item) {
 callbackArguments.push(arguments) 

    return resp.items.indexOf(item.data) !== -1;
};
var argument8 = false;
var base_0 = [595,607,618,893,49,893,460]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,607,618,893,49,893,460]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,607,618,893,49,893,460]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,607,618,893,49,893,460]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test449.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)