import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import {useState} from 'react'

function App() {
  const[textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard({textToCopy});
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const stopListening = () => SpeechRecognition.stopListening();
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="App">
      <div className="container">
      <h1>Speech to Text Converter</h1>
        <p>
          A React hook that converts speech from the microphone to text and
          makes it available to your React components.
        </p>

        <div className="inner">
        <div className="mainContent" onClick={()=>setTextToCopy(transcript)}>
        {transcript}
        </div>

        <div className="btnDiv">
          <button onClick={setCopied}>
            {isCopied ? "Copied!" : "Copy To Clipboard"}
          </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={stopListening}>Stop Listening</button>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
