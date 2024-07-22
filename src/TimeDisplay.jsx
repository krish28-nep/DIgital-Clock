import { useEffect, useState } from "react";
const TimeDisplay=()=>{
    const [time, setTime]= useState(new Date());
    useEffect(()=>{
        const timer= setInterval(()=>{
            setTime(new Date())
        },1000)
        return(()=>{
            clearInterval(timer)
        })
    },[]);
    const format=()=>{
        let hours= time.getHours();
        let minutes= time.getMinutes();
        let seconds= time.getSeconds();
        let meridim= hours>=12? "PM":"AM"
        hours=hours%12|| 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridim}`
    }

    const padZero=(n)=>{
        return n<10? "0"+n: n;
    }
    return(
        <div className="Clock-Container">
            <span>{format()}</span>
        </div>
    )
}
export default TimeDisplay