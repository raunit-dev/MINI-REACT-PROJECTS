import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function Qrcode() {
  const [text, setText] = useState("https://www.google.com");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text to encode"
      />
      <br />
      <QRCodeCanvas value={text} size={256} level="H" />
    </div>
  );
}

export default Qrcode;
