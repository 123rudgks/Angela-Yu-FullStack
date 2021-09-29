//module.exports = getDate;
// 자바스크립트의 호이스팅 때문에 변수 선언은 호이스팅이 되지만 함수 구현부로의 초기화는 호이스팅이 안되어서
// 오류가 난다.
//  const getDate = ()=>{
//     return "function is running well";
// };


exports.getDay = ()=>{
    let day = new Date();
    return day.getDay();
}
 
exports.getDate = ()=>{
    let date = new Date();

    let option = {
        era: "long",
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "2-digit",
    }

    return date.toLocaleDateString("en-US", option);
}
