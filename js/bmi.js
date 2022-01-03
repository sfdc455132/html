const nameEl = document.querySelector('#name')
const heightEl = document.querySelector('#height')
const weightEl = document.querySelector('#weight')
const bmi_btnEl = document.querySelector('#bmi_btn')
const printEL = document.querySelector('#printdata')
const bmi_comments = [
    { 'bmi': 18.5, 'comment': '過輕' },
    { 'bmi': 27, 'comment': '正常範圍' },
    { 'bmi': 35, 'comment': '過重' },
]
// 過輕:BMI ＜ 18.5	
// 正常範圍	18.5≦BMI＜24
// 異常範圍	
// 過重：24≦BMI＜27
// 輕度肥胖：27≦BMI＜30
// 中度肥胖：30≦BMI＜35
// 重度肥胖：       BMI ≧35




function getBmi(height, weight, Point = 2) {
    bmi = weight / (height / 100) ** 2
    return bmi.toFixed(Point)
}









bmi_btnEl.addEventListener('click', () => {
    // console.log(nameEl.value, heightEl.value, weightEl.value)
    let bmi_value = getBmi(heightEl.value, weightEl.value)
    let bmi_comment = '哈哈哈  錯誤喔'
    for (let i = 0; i < bmi_comments.length; i++) {
        if (bmi_value <= bmi_comments[i]['bmi']) {
            bmi_comment = bmi_comments[i]['comment']
            break
        }
    }
    alert(`姓名:${nameEl.value} BMI數值為:${bmi_value}`)
    printEL.innerHTML = `<h2>姓名:${nameEl.value}  BMI數值為${bmi_value}</h2><br><h1>${bmi_comment}</h1>`
})