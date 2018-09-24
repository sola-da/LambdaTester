





var callbackArguments = [];
var argument1 = function callback(){callbackArguments.push(arguments)};
var argument2 = function callback(){callbackArguments.push(arguments)};
var argument3 = r_0;
var argument4 = function callback(){callbackArguments.push(arguments)};
var argument5 = false;
var argument6 = {"655":"","1.0258824601151357e+308":"z>","[":1.7962049832012956e+308,"$eDV":"<"};
var argument7 = function callback(){callbackArguments.push(arguments)};
var argument8 = ">";
var argument9 = {"0":893,"8.17796622281812e+307":"","2.1587517445830649e+307":1.1534930819651836e+308,"":1.4955241035241661e+308,"j":"",":I":"yO","9=Vq":"&","f":"z","Js":122};
var base_0 = ["t","H5>*m","Z","fA)y","(?","!7","OJ"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["t","H5>*m","Z","fA)y","(?","!7","OJ"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["t","H5>*m","Z","fA)y","(?","!7","OJ"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["t","H5>*m","Z","fA)y","(?","!7","OJ"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findEmpty/test271.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)