import { createThirdwebClient } from "thirdweb";
import "./App.css";
import { ConnectButton } from "thirdweb/react";

const client = createThirdwebClient({
  // If not using Vite, then use `process.env.NEXT_PUBLIC_CLIENT_ID`
  clientId: import.meta.env.VITE_CLIENT_ID,
});
function App() {
  return (
    <div>
      <div style={{ marginBottom: "12px", maxWidth: "420px" }}>
        This repo shows how simple it is to add wallet connection to your web3
        apps using thirdweb SDK.
        <br /> To learn how to customize the ConnectButton, check out the{" "}
        <a
          href="https://thirdweb.com/dashboard/connect/playground"
          target="_blank"
        >
          Playground
        </a>
      </div>
      <ConnectButton client={client} />
    </div>
  );
}

export default App;
