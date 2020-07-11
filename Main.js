var {CronJob} = require('cron');
const got = require('got');
const moment = require('moment');
site = '(자가진단 사이트)?rtnRsltCode=SUCCESS&qstnCrtfcNoEncpt=(자신의 개인 인증 Token 아직 자동화가 이루어지지 않은 부분입니다.)&rspns01=1&rspns02=1&rspns07=0&rspns08=0&rspns09=0'
console.log("==============================================")
console.log("\n\n매 7시 30분 마다 코드가 반복됩니다 (주말 제외)\n\n")
console.log("==============================================\n\n [로그] \n")
async function JGGD(){
    const get = await got.post(site);
    data = JSON.parse(get.body);
        if(data.resultSVO.rtnRsltCode == "SUCCESS"){
            d = moment(get.req.timings.end).tz('Asia/Seoul');
            console.log(`성공적으로 자가진단을 완료 했습니다. ${data.resultSVO.schulNm} ${data.resultSVO.stdntName} ${d}`);
        } else  {
            console.log(get);
        }
}
job = new CronJob('00 30 7 * * 1-5', JGGD() ,null,true,'Asia/Seoul');
job.start();
