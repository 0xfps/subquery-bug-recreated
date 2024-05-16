import {
  EthereumProject,
  EthereumDatasourceKind,
  EthereumHandlerKind,
} from "@subql/types-ethereum";

import * as dotenv from 'dotenv';
import path from 'path';

const mode = process.env.NODE_ENV || 'production';

// Load the appropriate .env file
const dotenvPath = path.resolve(process.cwd(), `.env${mode !== 'production' ? `.${mode}` : ''}`);
dotenv.config({ path: dotenvPath });

// Can expand the Datasource processor types via the generic param
const project: EthereumProject = {
  specVersion: "1.0.0",
  version: "0.0.1",
  name: "arbitrum-one-starter",
  description:
    "This project can be use as a starting point for developing your new Arbitrum One SubQuery project",
  runner: {
    node: {
      name: "@subql/node-ethereum",
      version: ">=3.0.0",
    },
    query: {
      name: "@subql/query",
      version: "*",
    },
  },
  schema: {
    file: "./schema.graphql",
  },
  network: {
    /**
     * chainId is the EVM Chain ID, for Arbitrum One this is 42161
     * https://chainlist.org/chain/42161
     */
    chainId: process.env.CHAIN_ID!,
    /**
     * These endpoint(s) should be public non-pruned archive node
     * We recommend providing more than one endpoint for improved reliability, performance, and uptime
     * Public nodes may be rate limited, which can affect indexing speed
     * When developing your project we suggest getting a private API key
     * If you use a rate limited endpoint, adjust the --batch-size and --workers parameters
     * These settings can be found in your docker-compose.yaml, they will slow indexing but prevent your project being rate limited
     */
    endpoint: process.env.ENDPOINT!?.split(',') as string[] | string,
  },
  dataSources: [{
    // Arbitrum Bridged USDC (USDC.e).
    kind: EthereumDatasourceKind.Runtime,
    startBlock: 2609,
    options: {
      abi: 'Erc20Abi',
      address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
    },
    assets: new Map([['Erc20Abi', { file: './abis/erc20.abi.json' }]]),
    mapping: {
      file: './dist/index.js',
      handlers: [
        {
          handler: "handleTransferErc20AbiLogUSDC",
          kind: EthereumHandlerKind.Event,
          filter: {
            topics: [
              "Transfer(address,address,uint256)"
            ]
          }
        }
      ]
    }
  },
  {
    // Arbitrum USDT.
    kind: EthereumDatasourceKind.Runtime,
    startBlock: 228105,
    options: {
      abi: 'Erc20Abi',
      address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
    },
    assets: new Map([['Erc20Abi', { file: './abis/erc20.abi.json' }]]),
    mapping: {
      file: './dist/index.js',
      handlers: [
        {
          handler: "handleTransferErc20AbiLogUSDT",
          kind: EthereumHandlerKind.Event,
          filter: {
            topics: [
              "Transfer(address,address,uint256)"
            ]
          }
        }
      ]
    }
  },
  {
    kind: EthereumDatasourceKind.Runtime,
    startBlock: 1, // This is the block that the contract was deployed on
    options: {
      // Must be a key of assets
      abi: "erc20",
    },
    assets: new Map([["erc20", { file: "./abis/erc20.abi.json" }]]),
    mapping: {
      file: "./dist/index.js",
      handlers: [
        {
          kind: EthereumHandlerKind.Call,
          handler: "handleTransaction",
          filter: {
            function: "0x", // This picks up native token transfers
          },
        },
        {
          kind: EthereumHandlerKind.Event,
          handler: "handleTransferErc20AbiLogETH",
          filter: {
            /**
             * Follows standard log filters https://docs.ethers.io/v5/concepts/events/
             * address: "0x60781C2586D68229fde47564546784ab3fACA982"
             */
            topics: [
              "Transfer(address indexed from, address indexed to, uint256 amount)",
            ],
          },
        },
      ],
    },
  },
  {
    // Arbitrum WETH.
    kind: EthereumDatasourceKind.Runtime,
    startBlock: 55,
    options: {
      abi: 'Erc20Abi',
      address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    },
    assets: new Map([['Erc20Abi', { file: './abis/erc20.abi.json' }]]),
    mapping: {
      file: './dist/index.js',
      handlers: [
        {
          handler: "handleTransferErc20AbiLogWETH",
          kind: EthereumHandlerKind.Event,
          filter: {
            topics: [
              "Transfer(address,address,uint256)"
            ]
          }
        }
      ]
    }
  },
  {
    // Arbitrum WSTETH.
    kind: EthereumDatasourceKind.Runtime,
    startBlock: 19364208,
    options: {
      abi: 'Erc20Abi',
      address: '0x5979d7b546e38e414f7e9822514be443a4800529',
    },
    assets: new Map([['Erc20Abi', { file: './abis/erc20.abi.json' }]]),
    mapping: {
      file: './dist/index.js',
      handlers: [
        {
          handler: "handleTransferErc20AbiLogWSTETH",
          kind: EthereumHandlerKind.Event,
          filter: {
            topics: [
              "Transfer(address,address,uint256)"
            ]
          }
        }
      ]
    }
  },
  {
    // Arbitrum PXETH.
    kind: EthereumDatasourceKind.Runtime,
    startBlock: 185549499,
    options: {
      abi: 'Erc20Abi',
      address: '0x300d2c875c6fb8ce4bf5480b4d34b7c9ea8a33a4',
    },
    assets: new Map([['Erc20Abi', { file: './abis/erc20.abi.json' }]]),
    mapping: {
      file: './dist/index.js',
      handlers: [
        {
          handler: "handleTransferErc20AbiLogPXETH",
          kind: EthereumHandlerKind.Event,
          filter: {
            topics: [
              "Transfer(address,address,uint256)"
            ]
          }
        }
      ]
    }
  },
  {
    // Arbitrum APXETH.
    kind: EthereumDatasourceKind.Runtime,
    startBlock: 185871529,
    options: {
      abi: 'Erc20Abi',
      address: '0x16Ed8E219cde31E14a80dCb6C9127A5EC6e88e46',
    },
    assets: new Map([['Erc20Abi', { file: './abis/erc20.abi.json' }]]),
    mapping: {
      file: './dist/index.js',
      handlers: [
        {
          handler: "handleTransferErc20AbiLogAPXETH",
          kind: EthereumHandlerKind.Event,
          filter: {
            topics: [
              "Transfer(address,address,uint256)"
            ]
          }
        }
      ]
    }
  }
  ],
  repository: "https://github.com/subquery/ethereum-subql-starter",
};

// Must set default to the project instance
export default project;
