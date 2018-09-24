





var callbackArguments = [];
var argument1 = function (el, i) {
 callbackArguments.push(arguments) 

    if (matchesSelector && matchesSelector.call(el, ':focus'))
        index = i;
};
var argument2 = 1.172564573726222e+308;
var argument3 = null;
var argument4 = function (sk) {
 callbackArguments.push(arguments) 

    if (sk[1] && sk[1].sendmacused)
        self.oldMacKeys.push(sk[1].sendmac);
    if (sk[1] && sk[1].rcvmacused)
        self.oldMacKeys.push(sk[1].rcvmac);
};
var argument5 = r_1;
var argument6 = function (record) {
 callbackArguments.push(arguments) 

    if (record.get('protoId') == 'text' || record.get('protoId') == 'summary') {
        record.set('localizable', true);
        record.set('searchable', true);
    } else if (record.get('protoId') == '51234e09c0e0516a0b00000d') {
        record.set('localizable', false);
        record.set('searchable', true);
    }
};
var argument7 = "w";
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    $(item).detach();
};
var argument9 = r_2;
var argument10 = r_2;
var base_0 = ["kn","&",">","d","I","S","4<"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["kn","&",">","d","I","S","4<"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["kn","&",">","d","I","S","4<"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["kn","&",">","d","I","S","4<"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test115.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)