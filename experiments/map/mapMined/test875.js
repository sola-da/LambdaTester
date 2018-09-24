





var callbackArguments = [];
var argument1 = function (op) {
 callbackArguments.push(arguments) 

    if (op.value != null) {
        return op.value;
    } else {
        return '';
    }
};
var argument2 = function (word) {
 callbackArguments.push(arguments) 

    if (alphabetRegExp.test(word)) {
        return '(?:' + wrapAsPlaceHolder(lineObject.beforeChar) + '\\b' + representWord(word) + ')' + '|' + '(?:' + representWord(word) + '\\b' + wrapAsPlaceHolder(lineObject.afterChar) + ')';
    } else {
        return '(?:' + wrapAsPlaceHolder(lineObject.beforeChar) + representWord(word) + ')' + '|' + '(?:' + representWord(word) + wrapAsPlaceHolder(lineObject.afterChar) + ')';
    }
};
var argument3 = false;
var argument4 = function (a) {
 callbackArguments.push(arguments) 

    return jQuery.find(t, a);
};
var argument5 = false;
var argument6 = function (word) {
 callbackArguments.push(arguments) 

    return {
        name: word,
        value: word,
        score: 0,
        meta: 'keyword'
    };
};
var argument7 = r_2;
var base_0 = [126,618,823,100,893,126,618]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,618,823,100,893,126,618]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test875.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)