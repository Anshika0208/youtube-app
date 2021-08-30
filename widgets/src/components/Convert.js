import axios from "axios";
import React, { useState, useEffect } from "react";

const Convert = ({ text, language }) => {
  const [translatedText, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(()=> {
        setDebouncedText(text);
    },1000);

    return () => {
        clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [debouncedText, language]);

  return (
    <div>
      <h4>{translatedText}</h4>
    </div>
  );
};

export default Convert;
