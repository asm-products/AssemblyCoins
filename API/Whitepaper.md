#AssemblyShares
by Andrew Barisser at Assembly
July 29, 2014

##Introduction

####	Assembly
At Assembly, we provide an environment for individuals to collaborate on products from around the world.  As
 members make contributions to specific tasks, called bounties, they earn ownership stakes in the
  corresponding product.  These ownership stakes are represented by AssemblyShares.  If and when the product
  later makes money, its profits are distributed as royalties to shareholders proportionate to their
  holdings.  Payments are issued monthly as long as the product remains profitable.  

Assembly shareholders are already receiving regular, monthly cash payments from profitable products.  As
 members get paid, we are working to expand their capabilities as owners.  We currently store everyone’s
  product shares on our servers but are excited about the advent of blockchain-based technologies and their
   potential in revolutionizing digital ownership.  As a platform where members create companies, Assembly
   aims to reinvent the way businesses are built.  This means being an innovator in finance as well as
   software.  We see decentralizing the instruments of ownership as the next big step forward.

####	What we are doing with Bitcoin

Assembly is putting members' AppCoins, currently their stakes in individual products, on the Blockchain.  As digital
 tokens on a distributed, decentralized, and cryptographically secure system, users will have more tools
  at their disposable in exercising ownership.  As the original and most popular exemplar of cryptocurrencies,
   Bitcoin is the ideal platform to inscribe important ownership information in an enduring way.  Satoshi's
    central innovation of proof-of-work and decentralization has a lot more potential than has
    so far been implemented.  We are building Bitcoin 2.0 tools that utilize new aspects of the Blockchain
     beyond currency.  Assembly is the perfect marriage of technological opportunity with market need.  As
      a site where members contribute digitally and own assets digitally, we have the ideal platform to
     capitalize on the latest developments in cryptocurrency.

#### This is not another Altcoin

Assembly is not making another Altcoin.  Colored coins are a metacoin on top of the Bitcoin blockchain,
 not a separate blockchain.  This means the data recording asset ownership is much more secure and enduring
 than a newly invented, seldom used, parallel blockchain.  The Bitcoin network itself is the most
 mature option with the most stakeholders, stability, and existing architecture.  Your ownership
 isn't getting written in a meme-coin.  

We are not selling anything.  Colored coins is an open protocol which we are using to enhance
the Assembly platform's value for our users.  There is no premining, no presale.  There is no internal
 currency with a separate Bitcoin exchange rate.  There is no intermediary between you and AssemblyShares.  Because
 our sole incentive is the maximize the experience of our users, we approached the
   design of ownership crypto-representation so as to produce the most sensible tool and not necessarily the
    most profitable one.  This stands in stark contrast to many other 'Bitcoin 2.0' technologies out there,
     designed from the bottom up to raise money before real work gets done.  Our products already make money,
      so AssemblyShares themselves will immediately have value based on real-world revenue streams.

Our AssemblyShares tools will be completely open-source and there are no barriers to entry.  If you like it,
fork it and make it better.  We're making this service because we want to consume it.


##Colored Coins

The idea behind colored coins, which has been around for some time in the Bitcoin community, is
that assets besides bitcoins can be represented as abstractions on the Bitcoin Blockchain.  Whereas
bitcoins natively are indistinguishable from one another, colored coins are distinguishable abstractions
 represented on the Bitcoin Blockchain, consisting of more than just Satoshi.  Colored coins have been
 specially labelled in such a way that they retain that label through all subsequent transactions.  They
  come in quantities which may not coincide with their value in Satoshi.  And they come labelled with
  their ‘issuing address’, which states the ‘identity’ or ‘type’ of each colored coin.

Colored coins are a powerful concept for several reasons.  Because they exist on the Bitcoin Blockchain,
 they enjoy all the benefits therein.

- Since colored coins can represent a wide variety of items, new services can be designed around the transparency of their ownership.

- Colored coins can be easily transferred from one address to another, quickly and at low cost.  Ownership has never has never been so easy to move around.

- Colored coins provide proof-of-ownership of whatever they represent.  This opens doors for other uses not appropriate to Bitcoin, such as voting.

- Colored coins are trustless once minted.  While the issuer of a particular colored coin must be trusted, the transmission and ownership of Colored Coins are not susceptible to any third parties.

- Colored coins will be secure; it will be cryptographically impossible to forge a transaction from the private key holder.

####	AssemblyShares vs Colored Coins

While colored coins are a general concept with an existing protocol and several groups working on their
features, AssemblyShares is a specific implementation of the colored coin concept.  In that sense
it inherits from colored coins, which are of wide-ranging purpose, and applies them to a particular use
 case.  AssemblyShares represent ownership in Assembly products and a portion of their profits.

Because AssemblyShares inherits from colored coins, our API will be designed for the most general use of
 colored coins.  A user should be able to manipulate all Open Assets-compliant colored coins with Assembly tools.  Conversely, it should not be obligatory to use Assembly's API to manage AssemblyShares.  We hold no unique information; it's all on the Blockchain.

####	Example AssemblyShares Lifecycle

- Bart creates a new Product called "Doogle".  With the Assembly API, which automates this task, Bart issues
 an encrypted statement declaring the issuance of AssemblyShares which represent ownership in "Doogle". The
 initial issuing declaration states:
	- The name of the product
	- The metadata that will identify "Doogle" AssemblyShares in future Bitcoin transactions.
	- The issuance policy for "Doogle"
	- The normal terms of service with Assembly


- A special AssemblyShares issuing address is generated via the Assembly API.  In the future it may be a
multisig address in which the controlling keys are distributed to product stakeholders or core team members.
As the issuer, this address controls the supply of this particular variety of colored coins.
  - The issuing address's private keys are used to encrypt Bart's issuance declaration, proving
   the founders' control over that address.  His declaration includes metadata corresponding to the product.


- As the first founder, Bart receives an initial 6000 AssemblyShares of
"Doogle", as is done presently.  These are sent to his personal address, not the issuing address, as
 a specially marked Bitcoin transaction.  His ownership of "Doogle" AssemblyShares is now an uncontested
 fact for all to see.  The issuance of AssemblyShares, as well as checking an address's assets, are available
 as Assembly API calls in addition to being open source.  

- Mildred comes along and helps build Doogle.  Bart and other Core Team members award her a bounty
 on Assembly for that task, simultaneously signing a multisig transaction issuing Mildred new Doogle
  AssemblyShares.  Within a few minutes, Mildred has cryptographic control over her AssemblyShares.

- Soon Doogle is a smashing commercial success, receiving dollar-denominated profits through Assembly.  
Since Doogle's ownership stakes are plainly visible on the Blockchain, Assembly distributes royalties
to all the AssemblyShare holders.  Those desiring distributions in dollars receive them through regular
channels.  Others receive bitcoins directly to their shareholding public addresses.  There is a direct
 and immediate link between ownership of AssemblyShares on the blockchain and payment by Assembly.

- Mildred sends her shares to another Bitcoin address that she controls.  That's fine.
  Bitcoins are awarded to whichever address holds the relevant AssemblyShares.

Perhaps down the road Bart and Mildred will have the following capabilities:

- Managing the Doogle product involves lots of small but important business decisions.  Cryptographic voting
from the private keys of shareholders, wherever they might be, is a trustless and provable way to
demonstrate consensus.  

- Doogle is really taking off, but in order to hire the services of advertisers, marketers, and other
3rd party contractors, a collective pot of money is required.  To manage money in a trustless way,
Mildred, Bart, and other shareholders in Doogle create a multisignature Bitcoin address.  To spend this money, some fraction of the keyholders must sign off on each outgoing transaction.  This voting fraction does not have to be a majority,it could be 2 out of 1000, or 4 out of 5, whatever they agree to.
Now the product can control money safely.

- Doogle may raise funds, to be owned cryptographically by the product and not any individual member, by issuing new shares.  Issuance would require stakeholder consent via cryptographic voting.

- The entire financial history related to the product, from assets, to royalty payments, and to revenue generated via Bitcoin, can be provably audited within seconds.  


## The Legal Status of AssemblyShares
Assembly is a partnership in which members have contributed work and
thereby receive ownership.  That ownership is represented by AssemblyShares.  Profit distributions are royalties from
individual products.  Shareholders may transfer their assets
between addresses they control, or between existing stakeholders.  Tax
information should be registered, for withholding purposes, for each member.  Each AssemblyShares revenue stream can thus be associated with a member's tax information for IRS compliance.
Payments in Bitcoin will be reported as with dollars.


##The AssemblyShares API

### Description

The AssemblyShares API will exist as an independent service that provides general tools for navigating the world of colored coins.
It is designed to appeal to the broadest set of developers interested in leveraging the Open Assets protocol.  As such, many of the queries
developers use on the Bitcoin Blockchain have colored analogs here.  It has tools for interacting with
 addresses, blocks, transactions, colored coin metadata, encrypted messaging, and multisignature features.
  Most of these API calls are not currently available in an easy-to-use API online.

Assembly will be a consumer of the colored coins API as it implements AssemblyShares.  But the same shares
 could be manipulated with a separate service, a forked version, or via handcrafted Bitcoin transactions.  It
 should never be obligatory to use the Assembly API to handle AssemblyShares.  

###	Proposed API Calls

####Addresses
- Query public address for colored coin assets
```
GET  /addresses/{address}/{asset_address}
	Arguments
	address: string
		Bitcoin Public Address
	asset_address: string
		Colored Coin Asset Address, if blank returns all known colors

	Example Response
	[
      {
        ‘asset_address’:’6ef7d4b09b100c118a9450fd054a3ea3f638307235acb0ed71799343360b795d’,
        ‘amount’:5000
      },
      {
        'asset_address':'b3d06310a50657c06c26b3e8edb7d5024eab20e2a260d76cbd074f00b39d1f00',
        'amount'=1337
      }
    ]
```

- Query particular address's colored coin asset history
```
GET /addresses/{address}/{asset_address}/history
	Arguments
	address: string
		Bitcoin Public Address
	asset_address: string
		Colored Coin Asset Address, if blank returns all

	Example Response
    Each entry represents the new asset quantity at address starting at that date
    New entries override previous ones for the same asset address

  [
    {
      'asset_address':'7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451',
      'date': '9-3-2014',
      'amount': 9013
    },
    {
      'asset_address':'4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
      'date': '12-1-2014',
      'amount': 50
    },
    {
      'asset_address':'7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451',
      'date': '1-3-2015',
      'amount': 9407            #NOTE THAT THIS IS THE SAME ADDRESS ADDRESS AS FIRST ENTRY, AMOUNT HAS BEEN UPDATED FROM 9013 TO 9407
    }
  ]
```

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

####Transactions

- Query Bitcoin Transaction for parsed colored coin activity
```
GET /transactions/{transaction_hash}
	Arguments
	transaction_hash: string
		“The Transaction’s identifying hash”

	Example Response
  {
    'transaction_hash': 'ad29315920dad04ccf806c63d35b0f3f7cde95eea81a476acfc90b9a9072a05b',
    'block_height': '325000',
    'inputs': [
                {
                  'previous_transaction_hash': 'e5206c0b261dd5915f183fa759d1caddd2488eab665991bb5ca51f8d2158fc1e',
                  'source_address': '1D2T8LPpPxUJiNTvtGk6j54pXW6X7QMTJs',
                  'asset_address': '5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9',
                  'amount': '3000'
                }
              ]
              },
    'outputs': [
                {
                  'destination_address': '1NEt1pe5BiPyL4LhYHzAxTbX2XBigF4d6Q',
                  'asset_address': '5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9',
                  'amount': '1000'
                },
                {
                  'destination_address': '1KGJoyN2BiFmM1SbtLeDCv9QrqMsZRdABr',
                  'asset_address': '5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9',
                  'amount': '2000'
                }
              ],
    'metadata': {
                  'protocol': 'Open Assets',
                  'version': 0100,
                  'asset_quantities': [3000],
                  'other': 'arbitrary data here'
                },
    'fee': 0.00002
  }
```

- Push Raw Bitcoin Transaction, Assembly will broadcast it.
```
POST /transactions

  Header
	Content-Type: ”text/plain”

	Body
	- transaction_hex: string
	 Hexadecimal encoded Bitcoin Transaction

  Example Response
  {
    'status': 'success',
    'transaction_hash': 'b1c27ed8cc6d9d990d7b20e0202fbba27463e0f11d05d919725850ee886c2ea7'
  }
```

- Write and Push Standard Bitcoin Transaction
```
	POST /transactions

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

		fee: integer
			transaction fee to be paid, in Satoshi

  Example Response
  {
    'status': 'success',
    'transaction_hash': 'b1c27ed8cc6d9d990d7b20e0202fbba27463e0f11d05d919725850ee886c2ea7'
  }
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

####Colored Coins

- Query Coin Color's Overview Data
```
	GET  /colors/{asset_address}/overview

	asset_address:
		Coin Color's Asset Address

  Example Response
  {
    'name': 'BucketCoins',
    'issuing_address': '1X1voSCduP1u5uB4Yqrt5CJp4ssjqTqaJ',
    'declaration_transaction': '3fdded12dc9fce5824521804663da5bde044c535274dfd5c4dde8489c1756eb7',
    'total_issued': 3523691,
    'first_issue_date': '2-3-2015',
    'declaration_info': 'arbitrary data here'   #from declaration transaction
  }
```

- Query all known Colored Coin Types, list names and issuing addresses
```
	GET /colors/overview

	Example Response
	{
    'BucketCoins': {
                      'issuing_address': '1X1voSCduP1u5uB4Yqrt5CJp4ssjqTqaJ',
                      'declaration_transaction': '3fdded12dc9fce5824521804663da5bde044c535274dfd5c4dde8489c1756eb7',
                      'total_issued': 3523691,
                      'first_issue_date': '2-3-2015',
                      'declaration_info': 'arbitrary data here'   #from declaration transaction
                    },
    'HelpfulCoins': {
                      'issuing_address': '17j6mQv7iTd6AaJxN6ckYUQoiS4hJvwW3Q',
                      'declaration_transaction': '57a01ad78caad34998f519735f70853558a8c2dc1e0d4a62641dc08dd9c19d16',
                      'total_issued': 36912,
                      'first_issue_date': '11-17-2014',
                      'declaration_info': 'arbitrary data here'   #from declaration transaction
                    },
    'CoderwallCoins': {
                      'issuing_address': '1DrWJtaa5iEWYShETZFMxTFjJL4HZZ74Wj',
                      'declaration_transaction': '2038f2cd2c49baf99adba723a45cd53fac2cacd3892bcb0cd05e2fa02ae6d9be',
                      'total_issued': 693741,
                      'first_issue_date': '9-8-2014',
                      'declaration_info': 'arbitrary data here'   #from declaration transaction
                    }
  }  
```

- Write and Push Open Assets-compliant Colored Coin Transaction
```
	POST /transactions/colored

	Body:
		OPENSSL ENCRYPTED (see below)

		private_key: string
			Private Key of Sender's Address

    outputs: dictionary
      {
        'destination/string':
                      {
                        'asset_address': string,
                        'amount': integer
                      }
      }
		fee: integer
			transaction fee to be paid, in Satoshi
```

- List Ownership of a particular Colored Coin
	 - Returns large array list of public addresses with Colored Coin Assets

 ```
	GET /colors/{asset_address}

	asset_address: string
		Coin Color's Asset Address

	Example Response:
    {
      'color_name':'BucketCoins',
      'owners': [
                  {
                    'address': '1DrWJtaa5iEWYShETZFMxTFjJL4HZZ74Wj',
                    'amount': 531
                  },
                  {
                    'address': '1X1voSCduP1u5uB4Yqrt5CJp4ssjqTqaJ',
                    'amount': 12000
                  }
                ]
    }
```

####Blocks
- Query Block info, Colored Coin behavior in Block is parsed for you, Bitcoin data also passed
```
	GET /blocks/{block_height}/{asset_address}

	Arguments
	block_height: integer
		The Block Height as an integer, main chain only will be returned

	asset_address: string
		The asset address of the coin color
		If blank the call returns ALL known coin color behavior in block

  Example Response:  
  [
    {
      'transaction_hash': 'ad29315920dad04ccf806c63d35b0f3f7cde95eea81a476acfc90b9a9072a05b',
      'block_height': '325000',
      'inputs': [
                  {
                    'previous_transaction_hash': 'e5206c0b261dd5915f183fa759d1caddd2488eab665991bb5ca51f8d2158fc1e',
                    'source_address': '1D2T8LPpPxUJiNTvtGk6j54pXW6X7QMTJs',
                    'asset_address': '5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9',
                    'amount': '3000'
                  }
                ]
                },
      'outputs': [
                  {
                    'destination_address': '1NEt1pe5BiPyL4LhYHzAxTbX2XBigF4d6Q',
                    'asset_address': '5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9',
                    'amount': '1000'
                  },
                  {
                    'destination_address': '1KGJoyN2BiFmM1SbtLeDCv9QrqMsZRdABr',
                    'asset_address': '5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9',
                    'amount': '2000'
                  }
                ],
      'metadata': {
                    'protocol': 'Open Assets',
                    'version': 0100,
                    'asset_quantities': [3000],
                    'other': 'arbitrary data here'
                  },
      'fee': 0.00002
    },
    {
      'transaction_hash': 'eab01a4aa00f2d82245a36b4feaad00db904e2ae571e42431d12f38bfa1debdc',
      'block_height': '325000',
      'inputs': [
                  {
                    'previous_transaction_hash': 'e5206c0b261dd5915f183fa759d1caddd2488eab665991bb5ca51f8d2158fc1e',
                    'source_address': '16pb4VbAhWZbkYD1mJeSRPt7MSPDbdMz99',
                    'asset_address': 'b281bc2c616cb3c3a097215fdc9397ae87e6e06b156cc34e656be7a1a9ce8839',
                    'amount': '100'
                  }
                ]
                },
      'outputs': [
                  {
                    'destination_address': '1NEt1pe5BiPyL4LhYHzAxTbX2XBigF4d6Q',
                    'asset_address': 'b281bc2c616cb3c3a097215fdc9397ae87e6e06b156cc34e656be7a1a9ce8839',
                    'amount': '80'
                  },
                  {
                    'destination_address': '1Nbw6uqqcz1trbiNuUfbpvNjm2N5AG6UXk',
                    'asset_address': 'b281bc2c616cb3c3a097215fdc9397ae87e6e06b156cc34e656be7a1a9ce8839',
                    'amount': '20'
                  }
                ],
      'metadata': {
                    'protocol': 'Open Assets',
                    'version': 0100,
                    'asset_quantities': [100],
                    'other': 'arbitrary data here'
                  },
      'fee': 0.0001
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

####Multisignature

- Create Multisignature Bitcoin Address with specific Public Addresses
```
	POST /addresses/multisig

	Body:
		Array of Public Addresses: string[]
			Public Addresses with which to create Multisig Address, each will have a key

		Signature Minimum: integer
			Out of N public addresses with keys, how many are needed to sign an outgoing transaction?

	Example Response:
    {
      'multisig_public_address': '34CRZpt8j81rgh9QhzuBepqPi4cBQSjhjr',
      'signature_minimum': 3
    }
```

- Generate Random Multisignature Bitcoin Address with N of M keys, generates M private/public keypairs as well
```
	GET /addresses/multisig/{max_keys}/{sign_min}

	max_keys: integer
		Number of Public Addresses with Multisig keys

	sign_min: integer
		Minimum number of signatures needed to sign transactions

	Example Response:
	{
    'multisig_address': '34CRZpt8j81rgh9QhzuBepqPi4cBQSjhjr',
    'keypairs':
      [
        {
        'public': '1Mw7FXN7D7du9umtbkhov2ftELKQw1wFor',
        'private': '5JYVttUTzATan4zYSCRHHdN2nfJJHv6Nu1PB6VnhWSQzQRxnyLa'
        },
        {
        'public': '1HUBHMij46Hae75JPdWjeZ5Q7KaL7EFRSD',
        'private': '5KMWWy2d3Mjc8LojNoj8Lcz9B1aWu8bRofUgGwQk959Dw5h2iyw'
        },
        {
        'public': '1HZwkjkeaoZfTSaJxDw6aKkxp45agDiEzN',
        'private': '5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss'
        }
      ],
    'signature_minumum': 2
  }
```

- Write Multisignature Transaction
```
	POST /transactions/multisig

	Body:

    private_key[]: array of strings
      Set of private keys signing multisig

    outputs: array of dictionaries
        [
          {
            'destination':'16pb4VbAhWZbkYD1mJeSRPt7MSPDbdMz99',
            'amount': 561             #AMOUNTS IN SATOSHI
          }
        ]

    fee: integer
      transaction fee to be paid, in Satoshi

	Example Response:
	{
    'transaction_hex': '0100000001cf6d29ef50da2fbeeae26d3a9085b716c9bfdd4e6e0850b6305c2ccc92990f2d010000006b483045022100bf980ffad0dec07a3c06d92ee96facdb712fe386a0e1f16bf0f7e3ba9eb1f34602205166192bb3d2e655b8ba3d951af484d83e4a827588c80d6feb8e2d8355d10e11012102704948119279f2568b2db229e217bfc4a91af9ef785a514fc854563f27475145ffffffff023f6c0400000000001976a91418136363cb52e8a48e4c62911168894a01a3d2bd88ac6d5f2028000000001976a914b83683c843cda488a5441cc2be69c8412718a8be88ac00000000',
    'tx_status':'3/5'
    }
```


- Sign Existing Multisignature Transaction, can be Colored Transaction
````
	POST /transactions/multisig/

	Body:
		private_key[]: array of strings
			Array of private keys signing multisig transaction

		raw_tx: string
			Raw hex string of existing, incompletely signed transaction

	Example Response:
	{
    'transaction_hex':'0100000001c33ebff2a709f13d9f9a7569ab16a32786af7d7e2de09265e41c61d078294ecf010000008a4730440220032d30df5ee6f57fa46cddb5eb8d0d9fe8de6b342d27942ae90a3231e0ba333e02203deee8060fdc70230a7f5b4ad7d7bc3e628cbe219a886b84269eaeb81e26b4fe014104ae31c31bf91278d99b8377a35bbce5b27d9fff15456839e919453fc7b3f721f0ba403ff96c9deeb680e5fd341c0fc3a7b90da4631ee39560639db462e9cb850fffffffff0240420f00000000001976a914b0dcbf97eabf4404e31d952477ce822dadbe7e1088acc060d211000000001976a9146b1281eec25ab4e1e0793ff4e08ab1abb3409cd988ac00000000',
    'tx_status':'5/5'
    }
```

- Write Multisignature Colored Coin Transaction
```

	Body:
    private_key[]: array of strings
      Set of private keys signing multisig

    outputs: array of dictionaries
        [
          {
            'destination':'16pb4VbAhWZbkYD1mJeSRPt7MSPDbdMz99',
            'btc_amount': 561             #AMOUNTS IN MINIMUM INCREMENT OF ASSET
            'asset_address': '9aaf689fbcdfe9f64a071f9cbe28ae44193fa218e72af24456f44bed64583b4d'  #Asset Address of Output, 0 for Bitcoin
          }
        ]

    fee: integer
      transaction fee to be paid, in Satoshi

	Example Response:
	{
    'transaction_hex':'0100000001cf6d29ef50da2fbeeae26d3a9085b716c9bfdd4e6e0850b6305c2ccc92990f2d010000006b483045022100bf980ffad0dec07a3c06d92ee96facdb712fe386a0e1f16bf0f7e3ba9eb1f34602205166192bb3d2e655b8ba3d951af484d83e4a827588c80d6feb8e2d8355d10e11012102704948119279f2568b2db229e217bfc4a91af9ef785a514fc854563f27475145ffffffff023f6c0400000000001976a91418136363cb52e8a48e4c62911168894a01a3d2bd88ac6d5f2028000000001976a914b83683c843cda488a5441cc2be69c8412718a8be88ac00000000',
    'tx_status':'1/3'
    }
```


######On Privacy and OPENSSL
Several of the API calls listed entail sending encrypted private keys to the Assembly service.  While we understand that some may be uncomfortable with a 3rd party having access to their private keys, Assembly will never retain them.
Since these tools are themselves open-source, they also may be forked and run independently at any time.

Our goal is to develop client-side tools to assist with processing requiring private keys.  

##Behavior of the Protocol

AssemblyShares adopts the Open Assets protocol (https://github.com/OpenAssets/open-assets-protocol/blob/master/specification.mediawiki).  This is a convenient and open-ended way to label assets as a layer on top of Bitcoin.  Please see the original protocol for more useful information.

There are certain important advantages to this protocol.  
- All necessary information is inscribed in the Bitcoin Blockchain.
- It harnesses all the advantages of the Bitcoin Blockchain, security, protection from double-spending, ease of use, transparency, pseudonymity.
- Tools that already exist for Bitcoin can be easily applied to Colored Coins.  
- Color coin assets are not tied to actual Bitcoin amounts, meaning asset transfers and creation are very cheap.
- There is basically no limit to the number of coin colors that can be issued.
- It is possible to move multiple kinds of Colored Coins to with multiple inputs and outputs in one transaction.
- There is no metacoin between Colored Coins and Bitcoin.  That means no pre-mining, presale, or other cheap gimmicks.
- This is not another Altcoin!  It exists on the Bitcoin Blockchain, which means it's going to endure.

Other services may not be directly available with Open Assets, but could be developed on top of it.
- Decentralized Exchanges are being built (Iridis).


##Our Vision of the Future
Assembly already innovates in the way products are built.  By connecting
makers
from all over the world, and incentivizing them with ownership stakes in future profits, new types of
businesses can be built on our platform.  But we want to go further.  Assembly intends to challenge the status quo in finance by distributing ownership via liberating technologies such as cryptocurrency.  We want to remove barriers to economic participation in profit-seeking enterprises.  

Assembly wants to be the financial clearinghouse that simplifies life for disparate, product-oriented developers.  This means getting out of your way and putting the best tools in your hands.  The hassles of incorporating a startup and keeping track of paperwork should be minimized as much as possible.  We handle a lot of the obstacles to executing a cool new idea.

While trust is critical in doing business, in practice, it is currently a very expensive thing to acquire.  Assembly wants to square the circle and deliver you that trust via ironclad cryptographic tools, which, we believe, are the way business will be done in the future.  Assurances that would require complicated legal frameworks will be obviated by elegantly complete mathematics.

Our vision of the future is one in which companies are transparently managed, fluidly created, disbursements are easy, paperwork is automated.  Let lawyers and accountants be redundant!  The friction that ordinarily interferes with the fruition of a great idea should be reduced as much as possible.  Your ownership will be cryptographic, which means undisputed by the awesome power of math. Decisions too, and money handling, the day-to-day of business, while easy to use on the front end, are underlied by strong cryptographic guarantees.  If anyone wants to peak under the hood, audit a company, poll the stakeholders, go over the entire financial history, it should be as trivial as clicking a button.  
