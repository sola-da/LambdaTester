





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['St'] = {"":969}
base_0[0] = true
return a+b+c*d
};
var argument2 = 1.7976931348623157e+308;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['St'] = ["C",893,"E,v}",607,"iW>A",157,"b",714,-1]
argument3 = [0,627,122,595,100,823,59,25,893]
base_1 = ["pgnNJ","MjqG","N!","6m5p","-","Bi7W","Z"]
return a-b+c/d
};
var argument4 = "7N";
var argument5 = -1;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[100] = [618,100,82,122,100,783,893]
return a*b+c-d
};
var argument7 = {"122":"az!vM","893":"","+":2.4417512789518335e+307,"1.1174633079763848e+308":"!","":783,"'$Q":"","[":"","8.465011433681697e+306":"C"};
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['T'] = null
return a-b-c-d
};
var argument10 = null;
var base_0 = ["#NO","G","]","2","i","`[","S9"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#NO","G","]","2","i","`[","S9"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#NO","G","]","2","i","`[","S9"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#NO","G","]","2","i","`[","S9"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test838.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)