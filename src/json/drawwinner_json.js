const drawwinnerAbi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_accumulative_money",
        "type": "uint256"
      }
    ],
    "name": "add_accumulative_money",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_ball_money",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_committee_value",
        "type": "uint256"
      }
    ],
    "name": "add_ball_committee_money",
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
      },
      {
        "internalType": "uint256",
        "name": "_claimed_money",
        "type": "uint256"
      }
    ],
    "name": "add_claimed_money",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "epoch",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "_newhashrandom",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "_blockhashs",
        "type": "bytes32"
      }
    ],
    "name": "draw_winner_alternate_committee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "epoch",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "_newhashrandom",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32[10]",
        "name": "_blockhashs",
        "type": "bytes32[10]"
      }
    ],
    "name": "draw_winner_current_committee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "epoch",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "_newhashrandom",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "_blockhashs",
        "type": "bytes32"
      }
    ],
    "name": "draw_winner_developer",
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
    "name": "get_epoch_calculate_money",
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
        "internalType": "uint256",
        "name": "_epoch",
        "type": "uint256"
      }
    ],
    "name": "get_epoch_money",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "ball_money",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "committee_money",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "calculate_accumulative_money",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "claimed_money",
            "type": "uint256"
          }
        ],
        "internalType": "struct DrawWinner.EpochMoney",
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
        "internalType": "uint256",
        "name": "from",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "to",
        "type": "uint256"
      }
    ],
    "name": "get_epoch_reward_info_list",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "epoch",
            "type": "uint256"
          },
          {
            "internalType": "uint256[6]",
            "name": "epoch_prize1_members",
            "type": "uint256[6]"
          },
          {
            "internalType": "uint256",
            "name": "jackpot",
            "type": "uint256"
          },
          {
            "internalType": "uint256[3]",
            "name": "epoch_prize123_value",
            "type": "uint256[3]"
          },
          {
            "internalType": "uint32[6]",
            "name": "reward_nums",
            "type": "uint32[6]"
          }
        ],
        "internalType": "struct DrawWinner.EpochRewardInfo[]",
        "name": "",
        "type": "tuple[]"
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
    "name": "get_epoch_reward_number",
    "outputs": [
      {
        "internalType": "uint32[6]",
        "name": "",
        "type": "uint32[6]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "get_total_accumulative_money",
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
        "internalType": "address",
        "name": "_owner",
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
    "name": "myHashBall",
    "outputs": [
      {
        "internalType": "contract MyHashBall",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
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
    "name": "mypool",
    "outputs": [
      {
        "internalType": "contract MyPool",
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
        "name": "_myaddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_true_false",
        "type": "bool"
      }
    ],
    "name": "set_authorize_alternate_submit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_myaddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_true_false",
        "type": "bool"
      }
    ],
    "name": "set_authorize_committee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_myaddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_true_false",
        "type": "bool"
      }
    ],
    "name": "set_authorize_community",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_myaddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_true_false",
        "type": "bool"
      }
    ],
    "name": "set_authorize_current_submit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_myaddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_true_false",
        "type": "bool"
      }
    ],
    "name": "set_authorize_developer_submit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_myaddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_true_false",
        "type": "bool"
      }
    ],
    "name": "set_authorize_hashball",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_myaddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_true_false",
        "type": "bool"
      }
    ],
    "name": "set_authorize_playball",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_myhashball",
        "type": "address"
      }
    ],
    "name": "set_hashball",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_init_money",
        "type": "uint256"
      }
    ],
    "name": "set_init_total_accumulative_money",
    "outputs": [],
    "stateMutability": "nonpayable",
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
        "name": "_mypool",
        "type": "address"
      }
    ],
    "name": "set_mypool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export default drawwinnerAbi