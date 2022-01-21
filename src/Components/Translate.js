import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];


//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
        </div>
      </div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
        label={"Select Language"}
      />


      <hr />

      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language}/>
    </div>
  );
};

export default Translate;
