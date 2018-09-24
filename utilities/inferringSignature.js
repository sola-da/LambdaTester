var fs = require('fs');
var esprima = require('esprima');
var estraverse = require('estraverse');
var execSync = require('child_process').execSync;
var Decisions = require('./randomGenerator.js').Decisions;
var decisions = new Decisions();
var maxTests = 100;


var f = 'var f = function () { console.log("I am executed");}';


function findPositions(setupCode,names){
    var positions = []
    for (var i = 0; i<names.length; i++){
        var name = names[i]

        var p = {'name':name,'positions':[]};
        var counts =[1,1,1,1,1];

        while(maxTests>=0){
            var basePools = getDefinedVal(setupCode);
            var baseObj;
            if (basePools.length>0){
                baseObj = pickRandomElement(basePools);

            }else{
                baseObj = JSON.stringify(pickRandomElement(getRandomVal(name)));

            }

            if (baseObj){
                var position = getPositions(counts)
                var testStr = constructString(setupCode,name,baseObj,position)

               var feedback = execute(testStr);
                if (feedback === true){
                    if (p.positions.indexOf(position)===-1){
                        p.positions.push(position)

                    }

                }

              counts[position]++;


            }


            maxTests --;
        }
        positions.push(p)
        maxTests = 100;

   }

   return positions;



}

function getPositions(counts){
    //find minimal count
    var min ={'index':0,'count':counts[0]} ;
    for (var i = 1; i<counts.length; i++){
        if (counts[i]<min.count) min = {'index':i,'count':counts[i]}
    }

    return min.index;
}

function getDefinedVal(setupCode){
    var pool =[];
    var ast = esprima.parse(setupCode);
    estraverse.traverse(ast, {
        enter: function (node, parent) {

            if (node.type === 'VariableDeclarator' && node.init && (!node.init.callee || node.init.callee.name !== 'require')) {

                pool.push(node.id.name)
            }

        }
    })
    return pool;
}

function getRandomVal(fnName){
    var randomVal = [];
    for (var i = 0; i < decisions.constantTypes.length; i++) {

        var type = decisions.constantTypes[i];
        var randomObj = decisions.pickRandomConstant(type);

        if (randomObj && randomObj[fnName] && typeof randomObj[fnName] === 'function') {

            randomVal.push(randomObj);
        }
    }
    return randomVal;

}

function getValue(setupCode){
    var pool = getDefinedVal(setupCode).concat(decisions.constantTypes);
    var randomEl = pickRandomElement(pool);
    if (decisions.constantTypes.indexOf(randomEl)>-1){
        return decisions.pickRandomConstant(randomEl);
    }else {
        return randomEl;
    }

}

function execute(str){
    try{

        fs.writeFileSync('./testPosition.js',str);
        var output = execSync('node testPosition.js')
        var feedback = output.indexOf('I am executed') >-1
        return feedback;

    }catch(e){
        return false;
    }


}

function createAssignment(val){
    return
}


function constructString(setupCode, apiName, baseObj, position) {
    //setup code
    var str = setupCode + '\n';
    str+=f+'\n';
    str+='var base ='+baseObj+'\n';
    str+='try{ +\n'
    str += 'base.' + apiName + '(';
    for (var i = 1; i <= position; i++) {
        if (i === position) {
            str += 'f';

        } else {
            var type = pickRandomElement(decisions.constantTypes);
            str += JSON.stringify(getValue(setupCode))+ ',';
        }
    }
    str += ')';
    str+='}catch(e){\n'
    str+='};\n'

    return str;
}



function pickRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

exports.findPositions = findPositions;


