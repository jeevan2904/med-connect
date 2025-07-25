"use client";

import { FC, useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

export const TransitionalText: FC<{ textArr: string[] }> = ({ textArr }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000); // For every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <TextTransition springConfig={presets.wobbly}>
        {textArr[index % textArr.length]}
      </TextTransition>
    </>
  );
};
