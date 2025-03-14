const attachsubmitAbi = [
  {
    "inputs": [],
    "name": "BET_DIFF",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "COMMIT_DIFF",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MAX_COMMIT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "VALID_COMMIT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_hashrandom",
        "type": "bytes32"
      }
    ],
    "name": "attach_commit_hashrandom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_random",
        "type": "string"
      }
    ],
    "name": "attach_commit_random",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "attach_update_hashrandom_blockhash",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_epoch",
        "type": "uint256"
      }
    ],
    "name": "check_attach_submit",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_epoch",
        "type": "uint256"
      }
    ],
    "name": "check_attach_submit_random",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_epoch",
        "type": "uint256"
      }
    ],
    "name": "get_attach_submit_hash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_epoch",
        "type": "uint256"
      }
    ],
    "name": "get_attach_submit_random",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "epoch",
        "type": "uint256"
      }
    ],
    "name": "get_submit_info",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32[]",
            "name": "current_submit_hash",
            "type": "bytes32[]"
          },
          {
            "internalType": "bytes32[]",
            "name": "alternate_submit_hash",
            "type": "bytes32[]"
          },
          {
            "internalType": "bool",
            "name": "attach_submit_hashrandom",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "attach_update_blockhash",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "attach_submit_random",
            "type": "bool"
          },
          {
            "internalType": "bytes32",
            "name": "attach_submit_hash",
            "type": "bytes32"
          },
          {
            "internalType": "bool",
            "name": "developer_submit_hashrandom",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "developer_update_blockhash",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "developer_submit_random",
            "type": "bool"
          },
          {
            "internalType": "bytes32",
            "name": "developer_submit_hash",
            "type": "bytes32"
          }
        ],
        "internalType": "struct AttachSubmit.SubmitInfo",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_third_party",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "myalternatesubmit",
    "outputs": [
      {
        "internalType": "contract MyAlternateSubmit",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mycommittee",
    "outputs": [
      {
        "internalType": "contract MyCommittee",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mycurrentsubmit",
    "outputs": [
      {
        "internalType": "contract MyCurrentSubmit",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mydevelopersubmit",
    "outputs": [
      {
        "internalType": "contract MyDeveloperSubmit",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_myalternatesubmit",
        "type": "address"
      }
    ],
    "name": "set_myalternatesubmit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_mycommittee",
        "type": "address"
      }
    ],
    "name": "set_mycommittee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_mycurrentsubmit",
        "type": "address"
      }
    ],
    "name": "set_mycurrentsubmit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_mydevelopersubmit",
        "type": "address"
      }
    ],
    "name": "set_mydevelopersubmit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }

]

export default attachsubmitAbi