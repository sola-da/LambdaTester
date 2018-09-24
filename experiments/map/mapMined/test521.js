





var callbackArguments = [];
var argument1 = function (m) {
 callbackArguments.push(arguments) 

    return HLP.readMPI(m);
};
var argument2 = null;
var argument3 = function (edge) {
 callbackArguments.push(arguments) 

    return [
        edge[0] | 0,
        edge[1] | 0
    ];
};
var argument4 = function (cache) {
 callbackArguments.push(arguments) 

    return path.join(this.conf.get('cache'), cache, '.cache.json');
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    var data = d.__data__;
    return data.data ? data.data : data;
};
var argument6 = null;
var base_0 = [969,460,25,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,460,25,783]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,460,25,783]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test521.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)