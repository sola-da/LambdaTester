





var callbackArguments = [];
var argument1 = function (expr) {
 callbackArguments.push(arguments) 

    return expr.visit(context);
};
var argument2 = function (match) {
 callbackArguments.push(arguments) 

    return new Range(i, match.offset, i, match.offset + match.length);
};
var argument3 = ["t","W","J$","6","r","f2","6","Tg1ngHQb","C2T"];
var argument4 = function () {
 callbackArguments.push(arguments) 

    return {
        label: $(this).text(),
        value: this.value
    };
};
var argument5 = function (line) {
 callbackArguments.push(arguments) 

    return '   ' + line;
};
var argument6 = false;
var base_0 = [82,157,100,25,157,157,783,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,157,100,25,157,157,783,595]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,157,100,25,157,157,783,595]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,157,100,25,157,157,783,595]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test127.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)