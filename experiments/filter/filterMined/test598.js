





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    leftToFetch--;
    var ret = utils.filterChange(opts)(c);
    if (ret) {
        if (returnDocs) {
            results.results.push(c);
        }
        utils.call(opts.onChange, c);
    }
    return ret;
};
var argument2 = "";
var argument3 = true;
var argument4 = function (o, i) {
 callbackArguments.push(arguments) 

    passedValues[i] = o;
    return true;
};
var argument5 = null;
var argument6 = r_0;
var argument7 = function (line) {
 callbackArguments.push(arguments) 

    return line.search('Active') >= 0;
};
var argument8 = true;
var argument9 = r_0;
var argument10 = function () {
 callbackArguments.push(arguments) 

    var type = this.message;
    return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
};
var argument11 = {"49":"2d=","403":"",";":460,"D":714,"1.69498175792665e+308":"","":627,"W":9.565898340562453e+306,"}t":9.533671009479324e+307,"L":607};
var argument12 = r_3;
var base_0 = ["h",">&ZkP","4","Qt","0","b9"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h",">&ZkP","4","Qt","0","b9"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h",">&ZkP","4","Qt","0","b9"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h",">&ZkP","4","Qt","0","b9"]
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test598.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)