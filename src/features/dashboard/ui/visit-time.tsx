import { getFormatTime } from "@/shared/model/hooks";
import React, { useEffect, useState } from "react";

interface VisitTimeProps {
  date: string | number | Date;
}

const VisitTime = ({ date }: VisitTimeProps) => {
  const [displayTime, setDisplayTime] = useState(() => getFormatTime(date).formatted);
  useEffect(() => {
    const time = setInterval(() => {
        setDisplayTime(getFormatTime(date).formatted)
    }, 1000)

    return () => clearInterval(time);
  }, [])
  return <>
    {displayTime}
  </>;
};

export default VisitTime;
