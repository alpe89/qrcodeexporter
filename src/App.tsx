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
    <>
      <QrContainer ref={qrRef}>
        <QRCode value={value} />
      </QrContainer>
      <Input value={value} onChange={inputChangeHandler} />
      <Button componentRef={qrRef}>Salva QR!</Button>
    </>
  );
}

export default App;
