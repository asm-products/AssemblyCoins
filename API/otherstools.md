
- Query OP_RETURN message history for address, outgoing and incoming
```
GET /addresses/{address}/messages
  Arguments
  address: string
    Bitcoin Public Address

  Example Response
  [
    {
      'transaction_id': 'a8bb1f9551b3a83641e7e2523b63494671121a07de02a610de3539a1bbaf8c8a',
      'destination': '1C2K9gnypQ4VgSZDA5UFkMwgHjs7Xo3Jqe',
      'message': 'My name is Red'
    },
    {
      'transaction_id': '7e86c966871bcfcf1117e024c1c7381d124e7028ef232b566a74c7b466a2c6c9',
      'destination': '1Esv34qbwy3XU2qLbaiWgMGhN5Z9fd3AM4',
      'message': 'What is going on?'
    }
  ]
```




- Query Block for OP_RETURN messages
```
  GET /blocks/{block_height}/message

   Arguments
     block_height: integer

   Example Response
   [
   {
    'transaction_hash': 'baaaa5e4f61fc80abb7a99b113255438ed40cc13b68ca42bff01fded29a9db0d',
    'destination': '1MV1YLVhUHS9asm29JxaJgzjZjrYnS6vEw',
    'message': 'Happy house of horrors'
   },
   {
     'transaction_hash': '75992a5ac67ff644d3063976c2effd10bdd93fcc109798e3d5c1acf2e530d01a',
     'destination': '19A6FaBfkiuMfwjNo41cwzS2wSM1c6HDED',
     'message': 'Lets watch Face Off'
   }
   ]
```



- Write and Push OP_RETURN Bitcoin Transaction
```
  POST /transactions/message

  Body:
    OPENSSL Encrypted (see below)

    private_key: string
      Private Key of Sender's Address

  outputs: array of dictionaries
        [
          {
            'destination':'16pb4VbAhWZbkYD1mJeSRPt7MSPDbdMz99',
            'amount': 561             #AMOUNTS IN SATOSHI
          }
        ]

    message: string
      Message to be written in Blockchain, must be equal to or under 40 bytes

    fee: integer
      transaction fee to be paid, in Satoshi

  Example Response
  {
    'status': 'success',
    'transaction_hash': 'b1c27ed8cc6d9d990d7b20e0202fbba27463e0f11d05d919725850ee886c2ea7'
  }
```
