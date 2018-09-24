





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var iframe = $(this);
    return $('<div>').css({
        position: 'absolute',
        width: iframe.outerWidth(),
        height: iframe.outerHeight()
    }).appendTo(iframe.parent()).offset(iframe.offset())[0];
};
var argument2 = {"49":"hH","213":"","403":"6","Z_NN":595,"4.372935644650765e+307":1.6389829599925175e+308,"V":242,"^_":"]","":1.2052978646330261e+308,"Ft":"","1.0146434406876084e+308":"qn"};
var argument3 = "D";
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    return self.normalize(e);
};
var argument5 = function (n) {
 callbackArguments.push(arguments) 

    return id(n) + ':' + (n.innerHTML || n.nodeValue);
};
var argument6 = r_1;
var argument7 = null;
var argument8 = function (langPair) {
 callbackArguments.push(arguments) 

    langPair = langPair.split('=');
    return {
        name: langPair[0],
        value: langPair[1]
    };
};
var argument9 = null;
var base_0 = [823,-1,213,59,893,607]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,-1,213,59,893,607]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,-1,213,59,893,607]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,-1,213,59,893,607]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test76.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)