





var callbackArguments = [];
var argument1 = function (childChart) {
 callbackArguments.push(arguments) 

    childChart._setSmallLayout({
        left: childChart.smallColIndex * li.width,
        top: childChart.smallRowIndex * li.height,
        width: li.width,
        height: li.height,
        margins: this._buildSmallMargins(childChart, smallMargins, mi),
        paddings: smallPaddings
    });
};
var argument2 = function (s) {
 callbackArguments.push(arguments) 

    var el = $(s);
    var status;
    if (!el.length) {
        status = 'does not exist';
    } else if (el.is(':visible')) {
        status = 'visible';
    } else {
        status = 'hidden';
    }
    print(s, ':', status);
};
var argument3 = [100,100,-1,460,242,100];
var argument4 = "S$";
var argument5 = function (word, idx) {
 callbackArguments.push(arguments) 

    if (!word || word === currentWord)
        return;
    var distance = Math.abs(prefixPos - idx);
    var score = words.length - distance;
    if (wordScores[word]) {
        wordScores[word] = Math.max(score, wordScores[word]);
    } else {
        wordScores[word] = score;
    }
};
var argument6 = 5e-324;
var argument7 = "";
var argument8 = function (klass, i) {
 callbackArguments.push(arguments) 

    if (klass && klass.length > 0) {
        className += (i > 0 ? ' ' : '') + klass + suffix;
    }
};
var base_0 = [213,"D*","#{",403,893,"=",893,242,"e"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,"D*","#{",403,893,"=",893,242,"e"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,"D*","#{",403,893,"=",893,242,"e"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,"D*","#{",403,893,"=",893,242,"e"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test194.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)