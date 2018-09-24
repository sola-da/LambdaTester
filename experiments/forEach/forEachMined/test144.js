





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    customApi._getAttachment(attachments[key], {
        encode: true,
        ctx: ctx
    }, function (err, data) {
        doc._attachments[key].data = data;
        if (!--count) {
            call(callback, null, doc);
        }
    });
};
var argument2 = null;
var argument3 = function (e) {
 callbackArguments.push(arguments) 

    e.regex = new RegExp(e.source, 'gi');
    CHANNEL.emotes.push(e);
};
var argument4 = [82,403,607];
var argument5 = function (animation) {
 callbackArguments.push(arguments) 

    animation.fn && animations.push(animation);
};
var argument6 = function (astralLetter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('^\\p{L}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\p{Letter}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\pL$').test(astralLetter)).toBe(false);
};
var argument7 = r_1;
var argument8 = "";
var base_0 = [595,"q!:2O4","J",714,"Y","<"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,"q!:2O4","J",714,"Y","<"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,"q!:2O4","J",714,"Y","<"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,"q!:2O4","J",714,"Y","<"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test144.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)