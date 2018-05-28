function digitalClock() {
    var today = new Date();
    var option = { timeZone: "Asia/Kolkata" };
    var time = today.toLocaleTimeString('en-US', option);
    document.getElementById('display').innerHTML = time;
}
digitalClock();
setInterval(digitalClock, 1000);
// Hello World App
/*

DataTypes in TypeScript

1.Boolean
2.Number
3.String
4.array[]
5.any

 */
