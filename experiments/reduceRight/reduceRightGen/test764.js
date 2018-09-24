





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.921533274132203e+307] = [969,618,59,157,-100,122,607]
argument2[2] = [0,460,49,843,-100,122]
return a/b*c+d
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8] = {"3.355609001060768e+306":1.7229817517230804e+308,"":")","J":4.566833717345581e+307}
return a/b*c+d
};
var argument5 = "";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['St'] = [607,714,213,59,969,100,595,82,843]
return a*b+c-d
};
var argument7 = r_0;
var argument8 = {"0":"#l","59":1.1381683672021875e+308,"242":1.7699913131683138e+308,"1.057554402091974e+308":"","[5]:Z":8.153295688697705e+306,"yU":8.25958033952004e+306,"":"<","-":1.4906830445407756e+308,"1.2683469639797119e+308":49};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[100] = 8.712101662176456e+307
argument11[8] = "T"
argument11['8('] = [-1,157]
return a+b/c*d
};
var argument10 = r_0;
var argument11 = {"714":"Y","893":"","":" (","2.8249550770282716e+306":"","8.494403024124749e+307":"","4.459898723250818e+306":4.603953709040044e+307,"7F{":""};
var base_0 = [-100,893,-100,969,82,122,403,242,-100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,893,-100,969,82,122,403,242,-100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,893,-100,969,82,122,403,242,-100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,893,-100,969,82,122,403,242,-100]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test764.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)