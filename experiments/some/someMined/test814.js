





var callbackArguments = [];
var argument1 = function (klass) {
 callbackArguments.push(arguments) 

    return $a.hasClass(klass);
};
var argument2 = null;
var argument3 = null;
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return start >= item.start && end <= item.end;
};
var argument5 = "Lda]";
var argument6 = {"100":8.344036560283269e+307,"595":969,"823":"","1.3443639915375035e+307":595,"":1.7583781793089559e+308,"3.2293345029682805e+307":"P","7.568243109486055e+306":"*","1.3683639110772883e+308":5.744576341331812e+307,"4.992141917887968e+307":""};
var argument7 = function (route) {
 callbackArguments.push(arguments) 

    return route.props.name === routeName;
};
var argument8 = [627,157,607,607,49,893,607,82,5e-324,82];
var argument9 = function (context) {
 callbackArguments.push(arguments) 

    return context.fn(context, self.v);
};
var base_0 = [0,655,595,100,705,100,"7"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,655,595,100,705,100,"7"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,655,595,100,705,100,"7"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,655,595,100,705,100,"7"]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test814.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)