var {CronJob} = require('cron');
const got = require('got');
const moment = require('moment');

site = {https://eduro.sen.go.kr/stv_cvd_co00_000.do?k=YGOQ9fXozUO%2FxzNNtKhfKw%3D%3D}
token = {자신의 토큰}
day = {1-5} 

yee = `${site}?rtnRsltCode=SUCCESS&qstnCrtfcNoEncpt=${token}&rspns01=1&rspns02=1&rspns07=0&rspns08=0&rspns09=0`
console.log("==============================================")
console.log("\n\n매 7시 30분 마다 코드가 반복됩니다.\n\n")
console.log("==============================================\n\n [로그] \n")
async function JGGD(){
    const get = await got.post(yee);
    data = JSON.parse(get.body);
        if(data.resultSVO.rtnRsltCode == "SUCCESS"){
            d = moment(get.req.timings.end).tz('Asia/Seoul');
            console.log(`성공적으로 자가진단을 완료 했습니다. ${data.resultSVO.schulNm} ${data.resultSVO.stdntName} ${d} ${int}`);
        } else  {
            console.log(get);
        }
}
JGGD() //프로그램을 키면 바로 요청이 갑니다. 원하시면 지우셔도 무관합니다.
job = new CronJob(`00 30 7 * * ${day}`,() => { 
            JGGD()
    });
job.start();
