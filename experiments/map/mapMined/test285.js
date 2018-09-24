





var callbackArguments = [];
var argument1 = function (pb) {
 callbackArguments.push(arguments) 

    pb.causesPostBack = true;
    return pb;
};
var argument2 = true;
var argument3 = function (x) {
 callbackArguments.push(arguments) 

    return x.shift();
};
var argument4 = function (m) {
 callbackArguments.push(arguments) 

    return HLP.readMPI(m);
};
var argument5 = ["k8ppc","n","4",")&"];
var argument6 = true;
var argument7 = function (context) {
 callbackArguments.push(arguments) 

    return getMessage(context, that.v);
};
var argument8 = r_2;
var base_0 = ["Q<",0,"%8LQ",":",82]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Q<",0,"%8LQ",":",82]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Q<",0,"%8LQ",":",82]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Q<",0,"%8LQ",":",82]
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
require("fs").writeFileSync("./experiments/map/mapMined/test285.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)