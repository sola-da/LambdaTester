





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    return element;
};
var argument2 = null;
var argument3 = 4.484403719466681e+307;
var argument4 = function (tab) {
 callbackArguments.push(arguments) 

    if (tab.get('selected')) {
        selection = tab;
        return true;
    }
};
var argument5 = null;
var argument6 = function (match) {
 callbackArguments.push(arguments) 

    return match.route.props.ignoreScrollBehavior;
};
var argument7 = null;
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    return start >= item.start && end <= item.end;
};
var argument9 = {"59":1.7397172082414543e+307,"82":5e-324,"627":"",">0":"2)","2.5848964599143364e+307":"s[:e","9.683443093553462e+307":"","-1":7.476006143863615e+307,"3.039901393825401e+307":1.2120924144009725e+308,"":1.852635685395701e+307,"7.257004418299005e+307":655};
var base_0 = [126,705]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,705]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,705]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,705]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test21.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)