





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return productName == item.item;
};
var argument2 = {"0":893,"823":"b","969":3.4649012756673684e+306,"5.486218132910182e+307":"3","":59,"*":"l"};
var argument3 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument4 = function (ln) {
 callbackArguments.push(arguments) 

    return ln.indexOf('[') === 0 && ln.indexOf(']') > 0;
};
var argument5 = "";
var argument6 = {"25":3.024391710992694e+306,"157":"Ug=<Y","823":3.6369288211151505e+307,"uGMM@":"","9.334937075819395e+307":"","":"Q","2.0663400047922938e+307":"(V","3.923581699300517e+307":"","9.962450969920737e+307":9.559299470061702e+307};
var argument7 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument8 = "";
var argument9 = r_1;
var base_0 = ["g-Dqc","6+mzJm","P","dh","if:*","X","@","Gi","O"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["g-Dqc","6+mzJm","P","dh","if:*","X","@","Gi","O"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["g-Dqc","6+mzJm","P","dh","if:*","X","@","Gi","O"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["g-Dqc","6+mzJm","P","dh","if:*","X","@","Gi","O"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test992.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)