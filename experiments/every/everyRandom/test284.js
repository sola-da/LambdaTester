





var callbackArguments = [];
var argument1 = {"655":"7Q","":5e-324,"5e-324":"_A]0","o":1.0134827231626654e+308};
var argument2 = {"49":"","618":-1,"783":"","^":126,"":627,"1.0476328653556973e+308":595,"1.7976931348623157e+308":4.3746750152707355e+307,"1.5438362754566264e+308":627,"2Sk}h9,":""};
var argument3 = null;
var base_0 = ["N9n",-100,"-i","-5",0,"f3",843,"G","h",25]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
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
require("fs").writeFileSync("./experiments/every/everyRandom/test284.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)