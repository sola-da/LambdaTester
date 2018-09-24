





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    if ('endPoint' in d.d3plus && d.d3plus.endPoint === vars.depth.value) {
        d.d3plus.icon = false;
    }
    return true;
};
var argument2 = null;
var argument3 = function (c) {
 callbackArguments.push(arguments) 

    leftToFetch--;
    var ret = utils.filterChange(opts)(c);
    if (ret) {
        if (returnDocs) {
            results.results.push(c);
        }
        utils.call(opts.onChange, c);
    }
    return ret;
};
var argument4 = function (v) {
 callbackArguments.push(arguments) 

    return !(v instanceof Comment);
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    return regex.test($(this).children('a').text());
};
var argument6 = true;
var argument7 = null;
var base_0 = ["P",")4","1","1","#"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P",")4","1","1","#"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P",")4","1","1","#"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P",")4","1","1","#"]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test827.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)