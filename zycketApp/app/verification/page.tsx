"use client";


export default function VerifyToken(){
    return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8">
          <div className="w-128 h-32 bg-gray-200">
            <img alt="Barcode" className="w-full h-full object-contain" src="barcode.svg" />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-gray-700">ZYCKET VERIFICATION CODE</h2>
        </div>
      </main>
    )
}