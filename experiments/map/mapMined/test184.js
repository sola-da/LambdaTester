





var callbackArguments = [];
var argument1 = function (m) {
 callbackArguments.push(arguments) 

    return HLP.readMPI(m);
};
var argument2 = ["G","C[",627,"nx","N",1.7976931348623157e+308,"VhU"];
var argument3 = {"2":618,"627":"","":1.585340262681923e+308,"-1":"","1.1665178431473182e+308":126,"1.7320073382810557e+308":1.75273847064817e+308,",":"","1.3525734672468675e+308":4.1249855321716053e+307};
var argument4 = function (user) {
 callbackArguments.push(arguments) 

    return user.channelNick(channel);
};
var argument5 = function (y, i2) {
 callbackArguments.push(arguments) 

    return resultSelector(x, y, i, i2);
};
var argument6 = 1.2471062902903562e+308;
var argument7 = "";
var argument8 = function (entry) {
 callbackArguments.push(arguments) 

    return that._handleFileTreeEntry(entry, path);
};
var argument9 = true;
var argument10 = false;
var base_0 = ["P",5e-324,"!J",126,823]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P",5e-324,"!J",126,823]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P",5e-324,"!J",126,823]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P",5e-324,"!J",126,823]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test184.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)