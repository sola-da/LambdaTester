





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    cli.log('                             ' + util.pad(key, 10) + '   ' + pbjs.targets[key].description);
};
var argument2 = function (row) {
 callbackArguments.push(arguments) 

    row = this.renderRowHtml(row, this.token_);
    if (this.topAlign_) {
        this.element_.insertBefore(row, curRow);
    } else {
        this.dom_.appendChild(this.element_, row);
    }
    curRow = row;
};
var argument3 = {"100":7.323532442126835e+307,"460":"","714":"*","9.841824974743668e+307":"aZ1","":"UC","@":1.5159762682575343e+307,"1.4945223317317242e+308":2.2644180101362187e+306,"r(":"","1.101069988766152e+308":49,"1.336795683832682e+308":""};
var argument4 = function (astralLetter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('^\\P{L}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\P{Letter}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\PL$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\p{^L}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\p{^Letter}$').test(astralLetter)).toBe(false);
};
var argument5 = [")",":i","UF","z"];
var argument6 = function (fn) {
 callbackArguments.push(arguments) 

    fn.call(element, { preventDefault: noop });
};
var base_0 = [655,49,100,-1,59,655,0,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,49,100,-1,59,655,0,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,49,100,-1,59,655,0,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,49,100,-1,59,655,0,82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test646.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)