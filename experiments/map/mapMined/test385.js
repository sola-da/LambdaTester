





var callbackArguments = [];
var argument1 = function (subdoc) {
 callbackArguments.push(arguments) 

    return transform(subdoc, ruleTree);
};
var argument2 = function (a) {
 callbackArguments.push(arguments) 

    var argValue = '';
    if (a.name) {
        argValue += a.name + ':';
    }
    if (a.value.toCSS) {
        argValue += a.value.toCSS();
    } else {
        argValue += '???';
    }
    return argValue;
};
var argument3 = [",",";","`Ug","q{","|xU"];
var argument4 = [-1,-1,49,714,25,460];
var argument5 = function (attribute) {
 callbackArguments.push(arguments) 

    return {
        caption: attribute,
        snippet: attribute + '="$0"',
        meta: 'attribute',
        score: Number.MAX_VALUE
    };
};
var argument6 = {"25":"","T":"q","":"V!"};
var argument7 = function (pp) {
 callbackArguments.push(arguments) 

    return pp.replace('.', '_');
};
var base_0 = ["6",618,"%5",59,714,403,"?"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["6",618,"%5",59,714,403,"?"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["6",618,"%5",59,714,403,"?"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6",618,"%5",59,714,403,"?"]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test385.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)