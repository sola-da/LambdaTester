





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = true
return a+b*c*d
};
var argument2 = "";
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['w'] = {"59":213,"242":"*>#","4.1143757978598243e+307":"","1.4091397437066827e+308":"","1.325727814780353e+308":2.2591788626060755e+305,"y1":"","1.422868092544328e+308":"=Vs8","":"jqJ"}
base_1['length'] = {"627":"","893":1.5251153960460016e+308,"bCTj^":"","1.6005409529284827e+308":9.911628866658162e+306,"":"","7.124177472956005e+306":618,"q":714,"d":"","7)":7.13988264894397e+307}
argument4[1] = {"100":893,"460":"Y","969":"","1.6704092135681893e+308":618,"M":"!h","":4.0649391405044915e+307,"1.0968970006100329e+308":"q|","2.7464366819492874e+307":"","8.005009658253139e+307":"]","A":1.2536845720303016e+308}
return a/b-c/d
};
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = {"100":-1,"705":7.081588958053765e+307,"843":783,"JQ":843,"":"","8.186014678037549e+307":5.061883133793313e+307}
return a-b+c+d
};
var argument6 = r_0;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['K'] = {"460":1.7976931348623157e+308,"":618,";":242,"4.4024437858098647e+307":1.7615205041740177e+308,"-1":7.426113475533005e+307}
argument7 = "}"
return a+b+c+d
};
var argument8 = r_2;
var argument9 = r_0;
var base_0 = ["}",0,"Pt+",0,"e:","r",")","E)"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["}",0,"Pt+",0,"e:","r",")","E)"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["}",0,"Pt+",0,"e:","r",")","E)"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["}",0,"Pt+",0,"e:","r",")","E)"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test273.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)