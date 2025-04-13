import { formatLastVisit } from "@/src/lib/utils";
import React, { useEffect, useState } from "react";

interface VisitTimeProps {
  date: string | number | Date;
}

const VisitTime = ({ date }: VisitTimeProps) => {
  const [displayTime, setDisplayTime] = useState(() => formatLastVisit(date).formatted);
  useEffect(() => {
    const time = setInterval(() => {
        setDisplayTime(formatLastVisit(date).formatted)
    }, 1000)

    return () => clearInterval(time);
  }, [])
  return <>
    {displayTime}
  </>;
};

export default VisitTime;
