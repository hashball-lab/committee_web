const committeesAbi = [
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
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
    "name": "Committee_Margin",
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
    "name": "MAX_COMMITTEE",
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
    "name": "become_committee",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "become_committee_insert",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_status",
        "type": "uint8"
      }
    ],
    "name": "change_bet_alternate_status",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_status",
        "type": "uint8"
      }
    ],
    "name": "change_bet_status",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_status",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "_committee_index",
        "type": "uint256"
      }
    ],
    "name": "change_committee_commit_status",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_committee_index",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_committee",
        "type": "address"
      }
    ],
    "name": "check_alternate_commit_random",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
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
        "name": "_committee_index",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_committee",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_current",
        "type": "bool"
      }
    ],
    "name": "check_current_alternate_commit_hashrandom_changestatus",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_committee_index",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_committee",
        "type": "address"
      }
    ],
    "name": "check_current_commit_random",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
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
    "name": "check_epoch_ball",
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
    "inputs": [],
    "name": "get_current_epoch_starttime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
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
    "name": "get_epoch_bet_status",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "get_info_for_first_page",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
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
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "get_playball_info",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "margin",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "committee",
            "type": "address"
          },
          {
            "internalType": "uint48",
            "name": "status",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "commit_status",
            "type": "uint48"
          }
        ],
        "internalType": "struct Committees.Committee[]",
        "name": "",
        "type": "tuple[]"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "committee_index_start",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "committee_index_end",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "_is_committee",
            "type": "bool"
          }
        ],
        "internalType": "struct Committees.CommitteeInfo",
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
        "name": "_developer",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_third_party",
        "type": "address"
      },
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
    "name": "myattachsubmit",
    "outputs": [
      {
        "internalType": "contract MyAttachSubmit",
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
    "inputs": [],
    "name": "mydrawwinner",
    "outputs": [
      {
        "internalType": "contract MyDrawWinner",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "myevent",
    "outputs": [
      {
        "internalType": "contract MyEvent",
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
    "inputs": [],
    "name": "new_epoch",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "share_reward",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "epoch_committee_money",
        "type": "uint256"
      }
    ],
    "name": "punish_reward_init_committee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "remove_committee",
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
    "name": "set_authorize_bet_status",
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
    "name": "set_authorize_draw_winner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_myattachsubmit",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_mydevelopersubmit",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_mypool",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_mydrawwinner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_myevent",
        "type": "address"
      }
    ],
    "name": "set_contracts",
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
      }
    ],
    "name": "set_hashball_contract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "start",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]

export default committeesAbi