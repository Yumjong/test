const scores = {
    '생활속의회계': 'C',
    '논리적글쓰기': 'B',
    '독일문화의이해': 'B+',
    '기초수학': 'D+',
    '영어회화': 'C+',
    '인지발달심리학': 'A+',
}

const requiredClasses = ['영어회화', '기초수학', '공학수학', '컴퓨터과학개론']


const convert ={
    'A+':4.5,
    'A':4,
    'B+':3.5,
    'B':3,
    'C+':2.5,
    'C':2,
    'D+':1.5,
    'D':1,
    'F':0,
};


function getExamResult(scores,requiredClasses){

    const result = {}
    const scrArr = Object.keys(scores);
    const noIncludeArr = requiredClasses.filter(item => !scrArr.includes(item))
    for(let i in noIncludeArr){
        scores[noIncludeArr[i]] = 'F'
        for(const key in scores){
            const scrValue = scores[key]
            const scrValue2 = convert[scrValue]
            result[key] = scrValue2
        }
    }

    return result
}


console.log(getExamResult(scores,requiredClasses))