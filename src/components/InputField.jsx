import React from "react";
import './InputField.css';

const InputField = () => {
  return (
    <div className="inputField">
      <div>
        <button> Speak 🎤 : </button>
      </div>

      <div>
        <textarea placeholder="Speak or type here..." rows="5" cols="50"></textarea>
      </div>

      <div>
        <select>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
          <option value="fr">French</option>
          <option value="ge">German</option>
        </select>
        <button>Translate</button>
      </div>
    </div>
  );
};

export default InputField;
