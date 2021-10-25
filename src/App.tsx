import { ChangeEvent, useCallback, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { QrContainer, Input, Button } from "./components";

function App() {
  const [value, setValue] = useState<string>("");
  const qrRef = useRef<HTMLDivElement>(null);

  const inputChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    []
  );
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          marginTop: "8px",
          fontSize: "48px",
          textShadow: "0 0 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        QR Code Generator!
      </h1>
      <Input value={value} onChange={inputChangeHandler} />
      <QrContainer ref={qrRef}>
        <QRCode value={value} />
      </QrContainer>
      <Button componentRef={qrRef} currentText={value}>
        Download QR!
      </Button>
    </main>
  );
}

export default App;
