





var callbackArguments = [];
var argument1 = function (invFkProp) {
 callbackArguments.push(arguments) 

    if (invFkProp.relatedNavigationProperty.inverse == null) {
        entityManager._updateFkVal(invFkProp, oldValue, newValue);
    }
    ;
};
var argument2 = 49;
var argument3 = function (event) {
 callbackArguments.push(arguments) 

    $$.fn[event] = function (callback) {
        return this.on(event, callback);
    };
};
var argument4 = function (line, index) {
 callbackArguments.push(arguments) 

    write('\x1B[' + self.scoreboardWidth + 'C');
    write(line.join(''));
    write('\n');
};
var argument5 = function (kind) {
 callbackArguments.push(arguments) 

    for (var i = 0, L = kindScope[kind]; L > i; i++) {
        var info = this._itemInfos[index], dimName = this._userIndexesToSingleDim[index];
        void 0 === dimName && (dimName = '');
        out.push(' ' + index + '    | ' + kind + '    | ' + (info.message ? 'number' : 'string') + ' | ' + def.string.padRight(info.name || '', maxName) + ' | ' + def.string.padRight(info.label || '', maxLabel) + ' | ' + dimName);
        index++;
    }
};
var base_0 = [122,-1,655,"`u","!",242,"J","*4","P1b"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,-1,655,"`u","!",242,"J","*4","P1b"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,-1,655,"`u","!",242,"J","*4","P1b"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,-1,655,"`u","!",242,"J","*4","P1b"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test920.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)