





var callbackArguments = [];
var argument1 = function (m) {
 callbackArguments.push(arguments) 

    return HLP.readMPI(m);
};
var argument2 = 9.445301190266445e+307;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return this.elements ? jQuery.makeArray(this.elements) : this;
};
var argument5 = true;
var argument6 = null;
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    var curr = new ChainObservable(x);
    chain && chain.onNext(x);
    chain = curr;
    return curr;
};
var argument8 = function (leaf) {
 callbackArguments.push(arguments) 

    return leaf.rev;
};
var argument9 = [-100];
var base_0 = ["op","2Nd!(","$#1","B_","Jq","*:V","@","o(","?","JilS>"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["op","2Nd!(","$#1","B_","Jq","*:V","@","o(","?","JilS>"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test213.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)