"use client";

import React, { useState, useEffect } from "react";
import { Project } from "../lib/models/Project";
import { set } from "mongoose";

export const Typewriter = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delay = 1000,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? deleteSpeed : speed);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    loopNum,
    texts,
    speed,
    deleteSpeed,
    delay,
    typingSpeed,
  ]);

  return <span className="text-light fw-bold">{currentText}</span>;
};

// Testing
// const texts = ["Hello", "World", "React"];
// let loopNum = 0;

// // First iteration:
// let i = loopNum % texts.length; // 0 % 3 = 0 → i = 0 (first text: "Hello")

// // Second iteration:
// loopNum++;
// i = loopNum % texts.length; // 1 % 3 = 1 → i = 1 (second text: "World")

// // Third iteration:
// loopNum++;
// i = loopNum % texts.length; // 2 % 3 = 2 → i = 2 (third text: "React")

// // Fourth iteration:
// loopNum++;
// i = loopNum % texts.length; // 3 % 3 = 0 → i = 0 (back to the first text: "Hello")

// string.substring(startIndex, endIndex);
