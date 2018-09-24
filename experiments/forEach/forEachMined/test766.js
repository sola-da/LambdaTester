





var callbackArguments = [];
var argument1 = function (et) {
 callbackArguments.push(arguments) 

    _run(et);
};
var argument2 = "";
var argument3 = {};
var argument4 = function (obj) {
 callbackArguments.push(arguments) 

    if (obj) {
        for (var key in obj) {
            result[key] = obj[key];
        }
    }
};
var argument5 = "@";
var argument6 = function (src) {
 callbackArguments.push(arguments) 

    var isCDN = !!src.match(/^(http)?s?:?\/\//), sSrc = './' + sBaseUri + '/' + dep + '/' + (src[0] === '.' ? src.substr(1) : src), sTarget = './' + oData.dest + '/' + sSrcBase + (src[0] === '.' ? src.substr(1) : src);
    if (!isCDN) {
        copyFile(sSrc, sTarget);
    }
};
var argument7 = 1.5225427665492287e+307;
var argument8 = function (ep) {
 callbackArguments.push(arguments) 

    request.put(ep, { form: { version: version } }, function (err, res) {
        console.log('notified endpoint', ep, res.statusCode, err);
    });
};
var argument9 = 1.7976931348623157e+308;
var argument10 = "";
var base_0 = ["3&%","8Z","nt(t","pY4wZs","!",")M$v","q8","{Z","*1o","F,D"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3&%","8Z","nt(t","pY4wZs","!",")M$v","q8","{Z","*1o","F,D"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3&%","8Z","nt(t","pY4wZs","!",")M$v","q8","{Z","*1o","F,D"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3&%","8Z","nt(t","pY4wZs","!",")M$v","q8","{Z","*1o","F,D"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test766.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)