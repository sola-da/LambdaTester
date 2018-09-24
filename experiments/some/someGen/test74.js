





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = {"213":1.0465910557042383e+308,"969":5.221005931540078e+307,"":1.4873245569411044e+308}
base_0[8] = ""
argument2 = null
return a-b-c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = 1.507416513609454e+308
base_1[2] = ""
return a/b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = [1.7976931348623157e+308,157]
base_2[1][3] = ["v-= H","[8k"]
argument6[1] = ["h","|z8"]
return a+b+c
};
var argument5 = [607,-1,59,122];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][8] = {"607":"","":1.0708030633719312e+308,"1.0217356273296604e+308":5.122795157089233e+307,"g":25,"Y":"7I;","^ ":"o","8.942033545152817e+307":"x"}
argument7[9] = {"59":1.0481797599457545e+308,"":25,"1.6856339281610902e+308":1.6211862347331925e+308,"-1":1.4205972444974577e+308}
return a+b/c
};
var base_0 = [0,82,1.7976931348623157e+308,-1,705,893,969,823]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,82,1.7976931348623157e+308,-1,705,893,969,823]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,82,1.7976931348623157e+308,-1,705,893,969,823]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,82,1.7976931348623157e+308,-1,705,893,969,823]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test74.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)