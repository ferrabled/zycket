"use client";

import BarcodeScanner from "@/components/BarcodeScanner";

export default function VerifyToken(){
    return (
        <div>
            <h1>Verify Token</h1>
            <BarcodeScanner />
        </div>
    )
}