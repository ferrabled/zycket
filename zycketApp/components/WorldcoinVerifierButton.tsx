
"use client" ;

import { IDKitWidget, VerificationLevel } from '@worldcoin/idkit'

export function WorldcoinVerifierButton() {

  // const [isVerified, setIsVerified] = React.useState(false);

  const onSuccess = (data: any) => {
    // setIsVerified(true);
  }

  const handleVerify = (data: any) => {
  }

  const worldcoinClientId = process.env.NEXT_PUBLIC_WORLDCOIN_CLIENT_ID || "";

  return (
    <div className="m-10">

        <IDKitWidget
            app_id="app_staging_076310dcce051afae1c72d80c9122b42" // obtained from the Developer Portal
            action="verification" // this is your action id from the Developer Portal
            onSuccess={onSuccess} // callback when the modal is closed
            handleVerify={handleVerify} // optional callback when the proof is received
            verification_level={VerificationLevel.Device}>
            {({ open }) => <button onClick={open}>Verify with World ID</button>}
        </IDKitWidget>        

    </div>
  );
}