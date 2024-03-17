import React, { useEffect, useRef, useState } from 'react';
import Quagga from 'quagga';

const BarcodeScanner = () => {
  const [barcode, setBarcode] = useState('');
  const videoRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init({
        inputStream: {
          type: "LiveStream",
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment", // or "user" for the front camera
          },
          target: videoRef.current, // Pass the video element as target
        },
        decoder: {
          readers: ["code_128_reader", "ean_reader", "ean_8_reader", "code_39_reader", "code_39_vin_reader", "codabar_reader", "upc_reader", "upc_e_reader", "i2of5_reader"],
          // Include "qr_code_reader" in the readers array if you want to scan QR codes too
        },
        locate: true, // Try to locate the barcode in the image
      }, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      });

      Quagga.onDetected((data) => {
        console.log(data.codeResult.code);

        setBarcode(data.codeResult.code);

        Quagga.stop(); // Stop scanning after the first barcode is detected
        
      });
    }

    return () => Quagga.stop(); // Cleanup after component unmounts
  }, []);

  return (
    <div>
      <div ref={videoRef} /> 
      {barcode && <p>Barcode Detected: {barcode}</p>}
    </div>
  );
};

export default BarcodeScanner;
