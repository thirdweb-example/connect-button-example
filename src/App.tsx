import { createThirdwebClient } from "thirdweb";
import { ethers5Adapter } from 'thirdweb/adapters/ethers5';
import { ethers } from 'ethers';
import "./App.css";
import { ConnectButton, useActiveAccount } from "thirdweb/react";

const koshaNFTFactoryAbi = [
  {
    "type": "constructor",
    "name": "",
    "inputs": [
      {
        "type": "address",
        "name": "_addressRegistry",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "error",
    "name": "AlreadyInitialized",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ApproverUnauthorized",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "EmptyAssetProvided",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "EmptyURIProvided",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "EvolverUnauthorized",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "InsufficientSpinoffRoyaltyMinValue",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "InvalidCurrentTokenOwner",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "InvalidOwner",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "InvalidOwnerNotApproved",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NotApprovedForSpinoff",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NotEnoughNFTsForDistribution",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NotValidPaymentToken",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NotValidRoyaltyPayToken",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "OwnedUnauthorized",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "OwnedZeroAddressProvided",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "Pausable_NotPaused",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "Pausable_Paused",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "PayTokenNotApplied",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "PriceCanNotBeZero",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ReceiverLengthCanNotBeZero",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "Registry__TokenNotRegistered",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "SpinoffRequestRequiredCreatorApproval",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "SpinoffRequestRequiredCreatorValidation",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "SpinoffUnauthorized",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ZeroAddressProvided",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ZeroExpirationTimestamp",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "event",
    "name": "EndKoshaProxyDeployed",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "deployedProxy",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Paused",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "StartKoshaProxyDeployed",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "deployedProxy",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Unpaused",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "addressRegistry",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract IAddressRegistry"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "deployEndKoshaProxy",
    "inputs": [
      {
        "type": "address",
        "name": "_creator",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
      },
      {
        "type": "tuple",
        "name": "_metadata",
        "components": [
          {
            "type": "string",
            "name": "tokenURI",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "tokenAsset",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "licenseURI",
            "internalType": "string"
          }
        ],
        "internalType": "struct TokenMetadata"
      },
      {
        "type": "tuple",
        "name": "_principalRoyaltyInfo",
        "components": [
          {
            "type": "address",
            "name": "receiver",
            "internalType": "address"
          },
          {
            "type": "uint24",
            "name": "royaltyShare",
            "internalType": "uint24"
          },
          {
            "type": "address",
            "name": "payToken",
            "internalType": "address"
          },
          {
            "type": "uint256",
            "name": "minValue",
            "internalType": "uint256"
          }
        ],
        "internalType": "struct PrincipalRoyaltyInfo"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "deployKoshaProxy",
    "inputs": [
      {
        "type": "address",
        "name": "_creator",
        "internalType": "address"
      },
      {
        "type": "tuple",
        "name": "_metadata",
        "components": [
          {
            "type": "string",
            "name": "tokenURI",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "tokenAsset",
            "internalType": "string"
          },
          {
            "type": "string",
            "name": "licenseURI",
            "internalType": "string"
          }
        ],
        "internalType": "struct TokenMetadata"
      },
      {
        "type": "tuple",
        "name": "_principalRoyaltyInfo",
        "components": [
          {
            "type": "address",
            "name": "receiver",
            "internalType": "address"
          },
          {
            "type": "uint24",
            "name": "royaltyShare",
            "internalType": "uint24"
          },
          {
            "type": "address",
            "name": "payToken",
            "internalType": "address"
          },
          {
            "type": "uint256",
            "name": "minValue",
            "internalType": "uint256"
          }
        ],
        "internalType": "struct PrincipalRoyaltyInfo"
      },
      {
        "type": "tuple",
        "name": "_spinoffRoyaltyInfo",
        "components": [
          {
            "type": "uint24",
            "name": "royaltyShare",
            "internalType": "uint24"
          },
          {
            "type": "address",
            "name": "payToken",
            "internalType": "address"
          },
          {
            "type": "uint256",
            "name": "minValue",
            "internalType": "uint256"
          }
        ],
        "internalType": "struct SpinoffRoyaltyInfo"
      },
      {
        "type": "uint8",
        "name": "_stateRequestApproval",
        "internalType": "enum KoshaNFT.StateRequestApproval"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "exists",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "pause",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "paused",
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "renounceOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferOwnership",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "unpause",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateAddressRegistry",
    "inputs": [
      {
        "type": "address",
        "name": "_addressRegistry",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
];

const client = createThirdwebClient({
  // If not using Vite, then use `process.env.NEXT_PUBLIC_CLIENT_ID`
  clientId: import.meta.env.VITE_CLIENT_ID,
});


function App() {
  const  account = useActiveAccount();

  const handleEthersSigner = async () => {
    if (!account) {
      return;
    }
    const ethersSigner = ethers5Adapter.signer.toEthers({
      client,
      chain: { id: 80002, rpc: 'https://rpc-amoy.polygon.technology/' },
      account: account,
    });
  
    const signer = await ethersSigner;
    const fee = (await signer.getGasPrice()).toNumber();
    console.log(fee);

    const koshaNFTFactory = new ethers.Contract("0x489bc07071CdDd476F4AF388197dc2f55d940cD0", koshaNFTFactoryAbi, signer);
    console.log(koshaNFTFactory.address);

    const tx = await koshaNFTFactory.owner();
    console.log(tx);

    const metadata = {
      tokenURI: "https://gateway.pinata.cloud/ipfs/QmZo1D6z3bW8Q5y7Z4ZB2v2n2r5Zo5Z8zL9q6Z2z",
      tokenAsset: "https://gateway.pinata.cloud/ipfs/QmZo1D6z3bW8Q5y7Z4ZB2v2n2r5Zo5Z8zL9q6Z2z",
      licenseURI: "https://gateway.pinata.cloud/ipfs/QmZo1D6z3bW8Q5y7Z4ZB2v2n2r5Zo5Z8zL9q6Z2z"
    }

    const principalRoyaltyInfo = {
      receiver: "0x489bc07071CdDd476F4AF388197dc2f55d940cD0",
      royaltyShare: 100,
      payToken: "0x0000000000000000000000000000000000000000",
      minValue: 0
    }

    console.log("deploying proxy");

    const tx2 = await koshaNFTFactory.deployEndKoshaProxy(
      await signer.getAddress(),
      1,
      metadata,
      principalRoyaltyInfo,
      { gasPrice: fee, gasLimit: 10000000 },
    );

    tx2.wait().then((receipt: any) => {
      console.log(receipt);
    });
  
  }
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
      <div>
        {account ? (
          <div>
            <div>Account: {account.address}</div>
            <button onClick={() => 
              { 
                handleEthersSigner();
              }}>Do Ethers</button>
          </div>
        ) : (
          <div>Not connected</div>
        )}
      </div>
    </div>
  );
}

export default App;
