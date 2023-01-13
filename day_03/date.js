// Date Object 

// let now=new Date()
// console.log(now)  // 2023-01-13T07:41:56.612Z

// let now=new Date(0)
// console.log(now)

// console.log(24 * 3600 * 1000)
// console.log(1440*60) // 86400 second * 1000 milisecond in second

// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log(Jan02_1970)


// date parse
// let date = new Date("2023-01-26");
// console.log(date)

// new Date(year, month, date, hours, minutes, seconds, ms)

// let date=new Date(2023,01,13)
// console.log(date)


// let date=new Date()
// console.log(date)
// console.log(date.getFullYear())
// console.log(date.getMonth()+1)
// console.log(date.getDate())
// console.log(date.getHours())
// console.log(date.getSeconds())

// get time stamps

// console.log(date.getTime())
// there is having set method to set date


// If we only want to measure time, we don’t need the Date object.
// console.log(Date.now())


// task Feb 20, 2012, 3:12am
// let date=new Date(2012,1,20,3,12)

// console.log(date)

const getWeekDay=()=>{
    let date=new Date(2012,0,20)
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()]
}

console.log(getWeekDay())