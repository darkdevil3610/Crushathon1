import { useRef, useState, useContext, useEffect } from "react";
import { useChat } from "../hooks/useChat";
import "../css/UI.css";
import { AnimationContext } from "./AnimationContext";

export const UI = ({ hidden, ...props }) => {
  const input = useRef();
  const { chat, message, text } = useChat();
  const [loading, setLoading] = useState(false);
  const [lastLoadingState, setLastLoadingState] = useState(false);
  const [showText, setShowText] = useState(false);
  const [visible, setVisible] = useState(true);
  const { playAnimation } = useContext(AnimationContext);

  const speakText = () => {
    const toSpeak = text;
    const utterance = new SpeechSynthesisUtterance(toSpeak);
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(voice => voice.name.toLowerCase().includes('female'));
    utterance.voice = femaleVoice || voices[0];
    speechSynthesis.speak(utterance);
  };

  const sendMessage = () => {
    const text = input.current.value;
    console.log(text);
    if (!message) {
      setLoading(true);
      chat(text).finally(() => {
        setLoading(false);
        input.current.value = "";
      });
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (!loading && lastLoadingState) {
      handleButtonClick("Talk");
      setTimeout(() => {
        handleButtonClick("Idle");
      }, 9000);
    }
    setLastLoadingState(loading);
  }, [loading, lastLoadingState]);

  useEffect(() => {
    if (text) {
      speakText();
      setShowText(true);
      const timer = setTimeout(() => {
        setShowText(false);
      }, 11000);
      return () => clearTimeout(timer);
    }
  }, [text]);

  const handleButtonClick = (animationName) => {
    playAnimation(animationName);
  };

  if (hidden) {
    return null;
  }

  const github = () => {
    window.open("https://www.instagram.com/gouravinnov8or/", "_blank");
  };

  return (
    <>
      <div className="inputField">
        <input
          placeholder="Type a message..."
          ref={input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <button disabled={message || loading} onClick={sendMessage}>
          {loading ? <div className="loader"></div> : "Send"}
        </button>
      </div>
      

      <div className="card">
        <p>
          <strong>Ai virtual Girlfriend</strong>
        </p>
        <div className="sameline">
          <span style={{ fontSize: "10px" }}></span>&nbsp;
          <span className="material-symbols-outlined arrow" onClick={github}>
            north_east
          </span>
        </div>
      </div>
      {showText && (
        <div className="container">
          <pre className="text">{text}</pre>
        </div>
      )}

      {visible && (
        <div className="alert info" onClick={handleClose}>
          <span className="closebtn">&times;</span>  
          <strong>Note:</strong>  For the initial response, expect a delay of 30-45 seconds.
          <br /> In the meantime, enjoy exploring the animations!
        </div>
      )}
    </>
  );
};
