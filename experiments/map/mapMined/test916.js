





var callbackArguments = [];
var argument1 = function (elem) {
 callbackArguments.push(arguments) 

    return elem.replace(/\\"/g, '"');
};
var argument2 = {"59":893,"1.0782087277772865e+308":1.240602923391889e+308,"9.203585517299925e+307":49,"1.660787653066699e+308":403,"":"B","ht1R":"","1.3276466738196832e+308":""};
var argument3 = function (word) {
 callbackArguments.push(arguments) 

    return {
        caption: word,
        value: word,
        score: wordScore[word],
        meta: 'local'
    };
};
var argument4 = function (el) {
 callbackArguments.push(arguments) 

    if (el) {
        var value = parseInt(el.slice(0, 2)) || 0;
        switch (el[el.length - 1]) {
        case 'h':
            value = value * 3600;
            break;
        case 'm':
            value = value * 60;
            break;
        }
        ;
        return value;
    }
    return 0;
};
var argument5 = r_2;
var argument6 = function (call) {
 callbackArguments.push(arguments) 

    return call.object;
};
var argument7 = true;
var base_0 = [783,893,122,595,403,100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,893,122,595,403,100]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,893,122,595,403,100]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,893,122,595,403,100]
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
require("fs").writeFileSync("./experiments/map/mapMined/test916.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)