#AssemblyCoins
by Andrew Barisser at Assembly
July 29, 2014


##Introduction

####	Assembly
At Assembly, we provide an environment for individuals to collaborate on products from around the world.  As
 members make contributions to specific tasks, called bounties, they earn ownership in the
  corresponding product.  This ownership is represented by AssemblyCoins.  If and when the product
  later makes money, its profits are distributed as royalties to Coinholders proportionately.  Payments
  are issued monthly as long as the product remains profitable.  

Assembly contributors are already receiving regular, monthly cash payments from profitable products.  As
 members get paid, we are working to expand their capabilities as owners.  While we currently store all product information
 on our servers, we are excited about the potential of blockchain-based technologies in revolutionizing digital ownership.
 As a platform where members create companies, Assembly is well-placed to reinvent the way businesses are built.  This
 means innovating in finance as well as software.  We see decentralizing the instruments of ownership as the next big step forward.

####	What we are doing with Bitcoin

Assembly is putting members' ownership in individual products on the Bitcoin Blockchain.  A 'metacoin' existing as a layer
on top of Bitcoin, AssemblyCoins are digital ownership tokens with all the advantages of Bitcoin and none of the currency risk.  We aim
to give users the best tools, extending to cryptographic guarantees of control, such that ownership is no longer a
matter of trust, but mathematically self-evident.  Satoshi's
    central innovation of proof-of-work and decentralization has a lot more potential than has
    so far been implemented.  We are building Bitcoin 2.0 tools that utilize new aspects of the Blockchain
     beyond currency.  As a site where members contribute digitally and own assets digitally, Assembly is an ideal platform to
     capitalize on the latest developments in cryptocurrency.

#### This is not another Altcoin

Assembly is not making another Altcoin.  Colored coins are a metacoin on top of the Bitcoin blockchain,
 not a separate blockchain.  This means the data recording asset ownership is much more secure and enduring
 than a newly invented, seldom used, parallel blockchain.  The Bitcoin network itself is the most
 mature option with the most stakeholders, stability, and existing architecture.  Your ownership
 isn't getting written in a meme-coin.  

We are not selling anything.  Colored coins is an open protocol which we are using to enhance
the Assembly platform's value for our users.  There is no premining, no presale.  There is no internal
 currency with a separate Bitcoin exchange rate.  There is no intermediary between you and AssemblyCoins.  Because
 our sole incentive is the maximize the experience of our users, we approached the
   design of ownership crypto-representation so as to produce the most sensible tool and not necessarily the
    most profitable one.  This stands in stark contrast to many other 'Bitcoin 2.0' technologies out there,
     designed from the bottom up to raise money before real work gets done.  Our products already make money,
      so AssemblyCoins themselves will immediately have value based on real-world revenue streams.

Our AssemblyCoins tools will be completely open-source and there are no barriers to entry.  If you like it,
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

####	AssemblyCoins vs Colored Coins

While colored coins are a general concept with an existing protocol and several groups working on their
features, AssemblyCoins is a specific implementation of the colored coin concept.  In that sense
it inherits from colored coins, which are of wide-ranging purpose, and applies them to a particular use
 case.  AssemblyCoins represent ownership in Assembly products and a portion of their profits.

Because AssemblyCoins inherits from colored coins, our API will be designed for the most general use of
 colored coins.  A user should be able to manipulate all Open Assets-compliant colored coins with Assembly tools.  Conversely, it should not be obligatory to use Assembly's API to manage AssemblyCoins.  We hold no unique information; it's all on the Blockchain.

####	Example AssemblyCoins Lifecycle

- Bart creates a new Product called "Doogle".  With the Assembly API, which automates this task, Bart issues
 an encrypted statement declaring the issuance of AssemblyCoins which represent ownership in "Doogle". The
 initial issuing declaration states:
	- The name of the product
	- The metadata that will identify "Doogle" AssemblyCoins in future Bitcoin transactions.


- A special AssemblyCoins issuing address is generated via the Assembly API.  In the future it may be a
multisig address in which the controlling keys are distributed to product stakeholders.
As the issuer, this address controls the supply of this particular variety of colored coins.
  - The issuing address's private keys are used to encrypt Bart's issuance declaration, proving
   the founders' control over that address.  His declaration includes metadata corresponding to the product.


- As the first founder, Bart receives an initial 6000 AssemblyCoins of
"Doogle", as is done presently.  These are sent to his personal address, not the issuing address, as
 a specially marked Bitcoin transaction.  His ownership of "Doogle" AssemblyCoins is now an uncontested
 fact for all to see.  The issuance of AssemblyCoins, as well as checking an address's assets, are available
 as Assembly API calls in addition to being open source.  

- Mildred comes along and helps build Doogle.  Bart and other Core Team members award her a bounty
 on Assembly for that task, simultaneously signing a multisig transaction issuing Mildred new Doogle
  AssemblyCoins.  Within a few minutes, Mildred has cryptographic control over her AssemblyCoins.

- Soon Doogle is a smashing commercial success, receiving dollar-denominated profits through Assembly.  Since
 Doogle's ownership is plainly visible on the Blockchain, Assembly distributes royalties
to all the AssemblyCoins owners.  Those desiring distributions in dollars receive them through regular
channels.  Others receive bitcoins directly to their coinholding public addresses.  There is a direct
 and immediate link between ownership of AssemblyCoins on the blockchain and payment by Assembly.

- Mildred sends her AssemblyCoins to another Bitcoin address that she controls.  That's fine.
  Bitcoins are awarded to whichever address holds the relevant AssemblyCoins.

Perhaps down the road Bart and Mildred will have the following capabilities:

- Managing the Doogle product involves lots of small but important business decisions.  Cryptographic voting
from the private keys of coinholders, wherever they might be, is a trustless and provable way to
demonstrate consensus.  

- Doogle is really taking off, but in order to hire the services of advertisers, marketers, and other
3rd party contractors, a collective pot of money is required.  To manage money in a trustless way,
Mildred, Bart, and other coinholders in Doogle create a multisignature Bitcoin address.  To spend this money, some fraction of the keyholders must sign off on each outgoing transaction.  This voting fraction does not have to be a majority,it could be 2 out of 1000, or 4 out of 5, whatever they agree to.
Now the product can control money safely.

- Doogle may raise funds, to be owned cryptographically by the product and not any individual member, by issuing new AssemblyCoins.  Issuance would require consent via cryptographic voting of existing owners.

- The entire financial history related to the product, from assets, to royalty payments, and to revenue generated via Bitcoin, can be provably audited within seconds.  


## The Legal Status of AssemblyCoins
Assembly is a partnership in which members have contributed work and
thereby receive ownership.  That ownership is represented by AssemblyCoins.  Profit distributions are royalties from
individual products.  Coinholders may transfer their assets
between addresses they control, or between existing stakeholders.  Tax
information should be registered, for withholding purposes, for each member.  Each AssemblyCoins revenue stream can thus be associated with a member's tax information for IRS compliance.
Payments in Bitcoin will be reported as with dollars.  Because AssemblyCoins represent partnership stakes, AssemblyCoin holders must
exercise partners' responsibilities, such as participiating in products at least once a year.


##The AssemblyCoins API

### Description

The AssemblyCoins API will exist as an independent service that provides general tools for navigating the world of colored coins.
It is designed to appeal to the broadest set of developers interested in leveraging the Open Assets protocol.  As such, many of the queries
developers use on the Bitcoin Blockchain have colored analogs here.  It has tools for interacting with
 addresses, blocks, transactions, colored coin metadata, encrypted messaging, and multisignature features.
  Most of these API calls are not currently available in an easy-to-use API online.

Assembly will be a consumer of the colored coins API as it implements AssemblyCoins.  But the same AssemblyCoins
 could be manipulated with a separate service, a forked version, or via handcrafted Bitcoin transactions.  It
 should never be obligatory to use the Assembly API to handle AssemblyCoins.  

##Behavior of the Protocol

AssemblyCoins adopts the Open Assets protocol
(https://github.com/OpenAssets/open-assets-protocol/blob/master/specification.mediawiki).
 This is a convenient and open-ended way to label assets as a layer on top of Bitcoin.  

Colored Coins are originally born with a user creating a Bitcoin public address, the issuing address.  When a user writes a Bitcoin
transaction with the correct metadata from that issuing address, a hash can be generated from the Bitcoin script
in the first input of that transaction.  This hash is a unique identifier for the coin color.  Coin colors may
have human-readable names such as 'RedCoins', but they always also have a unique hash which we call the 'Asset Hash'. To
prevent confusion, our API responds to a colored coin's Asset Hash.  Other metadata about the coin color may then be queried.

Please see the original protocol for more useful information.

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

###Glossary
```
Open Assets - The Colored Coin protocol AssemblyCoins uses
Issuing Address - The address controlling the issuance of a Colored Coin.  Bitcoins sent from this address with the correct metadata become colored
Asset Hash -  A unique identifier for each coin color.  More technically, this is the RIPEMD-160 hash of the SHA-256 hash of the output script of the first input of the first transaction issuing the colored coin
AssemblyCoins - Ownership in an Assembly Product as represented on the Blockchain
Metadata -  additional information labelling bitcoins into colored coins.
```


###	Proposed API Calls

####Assembly Businesses
- Found a business
  - This issues colored coins from the address of the given public key.  It declares the name of the business written permanently in the Blockchain (as an OP_RETURN addressed to itself) .  It sends
  initial AssemblyCoins to specified founders' addresses.  The issuing address is also the business's money handling address.

```
POST /businesses

Body:
  OPENSSL Encrypted (see below)

  private_keys: array of strings
    Private Keys of Founders Address
    In most cases, just a single key, but may be multiple with multisig colored coin issuance

  name: string
    Name of the business

  initial_coins: integer
    Starting number of coins to be issued

  recipients: array of dictionaries
    List recipients of initial coins with percentages

    [
      {
        'address':'12A8ykC3hadJQpCqigDdAue5nJTCRayrDo',
        'percent_coins': 35
      },
      {
        'address':'1Ejuvv65j29Lc4T7xr69vfMRzMpbBocpix',
        'percent_coins': 65
      }
    ]

  Example Response:
  {
    'status': 'success',
    'declaration_transaction_hash': '91bd9735195c480f79108037a56c45684652be34e06b6c289630a6d35a153537',
    'transactions':
      {
        'coin_recipient': '12A8ykC3hadJQpCqigDdAue5nJTCRayrDo',
        'transaction_hash': '9e96c9f57c1ab6ac1ea29d2c11c60ba98b4f85b4fe8625ac760439a48844c869'
      },
      {
        'coin_recipient': '1Ejuvv65j29Lc4T7xr69vfMRzMpbBocpix',
        'transaction_hash': '5f0b67a61a990104e66e37ae3513cb093cda8de40814ce95d39943dad40c3f1b'
      }
  }
```

- Issue additional AssemblyCoins

```
POST /businesses/coins

Body:
  OPENSSL Encrypted (see below)

  private_keys: array of strings
    Private Keys of Founder's Address
    In most cases, just a single key, but may be multiple with multisig colored coin issuance

  more_coins: integer
    Number of additional coins to be issued

  coin_recipients: array of dictionaries
    List recipients of initial coins with percentages

    [
      {
        'address':'12A8ykC3hadJQpCqigDdAue5nJTCRayrDo',
        'percent_coins': 35
      },
      {
        'address':'1Ejuvv65j29Lc4T7xr69vfMRzMpbBocpix',
        'percent_coins': 65
      }
    ]

  Example Response:
  {
    'status': 'success',
    'transactions':
      {
        'coin_recipient': '1PCDYCXtyLdT1C1SYUNE1PTKUP3dKdaJup',
        'transaction_hash': '6fb06eb5cc04eaf092582beeb4733133a8b703af1ffc8fdc1f5af5cae0923daf'
      },
      {
        'coin_recipient': '1B8XzRxJQBoK6Q4ncpEsaqzU1yECTsTWTA',
        'transaction_hash': '9e3a18feabc28d144b176b0714a4d4d1629531197ae75e4a1a594e5db8ed0ea4'
      }
  }
```

- Distribute Bitcoin to Coinholders
  - Sends Bitcoin to all Coinholders of a particular business proportionately.  Must be above the transaction
  minimum per recipient.  This can be from any originating address, including a multisig address (such as the issuing address).  This
  may involve multiple transactions.  The amount debited from the originating Bitcoin address is the total_btc figure, actual amounts arriving are
  minus transaction fees.

```
POST /businesses/payments

Body:
  OPENSSL Encrypted (see below)

  private_keys: array of strings
    Private Keys of Founder's Address
    In most cases, just a single key, but may be multiple with multisig colored coin issuance

  total_btc: float
    Total bitcoin to transmit to all Coinholders

  fee_per_kb: float
    Bitcoin transaction fee, on a per kilobyte basis (if blank, Assembly chooses 0.00005 default)

  Example Response:
  {
    'status': 'success',
    'transactions_sent': 2,
    'total_fees': 0.0001,
    'payment_transactions': [
                              {
                                'transaction_hash': 'a8cc59f070c17ad595ede6557c37c0912a076b8f2e4ed114cbbea1c809206f93',
                                'amount_paid': 0.32,
                                'fee_paid': 0.00005
                              },
                              {
                                'transaction_hash': '55321ad55f82054444e543c78111d176ea01e6c8cdcf08e29feb0cfd5ea1da9d',
                                'amount_paid': 0.13,
                                'fee_paid': 0.00005
                              }
                            ]
  }
```

####Addresses
- Check a Bitcoin Public Address for Colored Coin Assets
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

####Colored Coins

- Query Coin Color's Overview Data
  - Gives metadata associated with the coin color.  The data originates from the Blockchain only.

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
  - Writes a colored coin transaction for you from scratch, also pushes it to the network

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

  Example Response:
  {
    'status': 'success',
    'transaction_id': 'fb35448ddc462f0c072313666ba0b5a9e662ba56ea94dec660a845a5d7928575'
  }
```

- List Ownership of a particular Colored Coin
   - Gives total list of all owners of particular Colored Coin

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
  - Use this to navigate the world of Colored Coins

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
