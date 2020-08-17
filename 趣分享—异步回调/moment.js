// console.log('aa');
let moment = require('moment');
let aaDays = [];
function getAAdays (startDate, endDate) {
  let days = moment(endDate).diff(moment(startDate), 'days');
  // console.log(days);
  for (let i=0; i<= days - 1; i++) {
    console.log(i);
    aaDays.push(moment(startDate).add(i, 'days').format('YYYY-MM-DD'))
  }
  // days.forEach(day => {
  // })
  console.log(aaDays);
}
getAAdays('2019-03-30 00:00:00', '2019-04-23 24:00:00');
// console.log(moment().subtract(6, 'days').format('YYYY-MM-DD'));
// console.log(moment('2019-04-18 00:00:00').diff(moment('2019-04-23 24:00:00'), 'days'));