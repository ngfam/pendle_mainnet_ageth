import { EthChainId } from "@sentio/sdk/eth";

export const MISC_CONSTS = {
	ONE_E18: BigInt("1000000000000000000"),
	ONE_DAY_IN_MINUTE: 60 * 24,
	ONE_DAY_IN_SECONDS: 60 * 60 * 24,
	ONE_HOUR_IN_SECONDS: 60 * 60,
	ZERO_ADDRESS: "0x0000000000000000000000000000000000000000",
	AVERAGE_SECOND_PER_BLOCK: 12,
	MULTICALL: "0xca11bde05977b3631167028862be2a173976ca11",
};

export const CONFIG = {
	BLOCKCHAIN: EthChainId.ETHEREUM,
	SNAPSHOT_FREQUENCY: 24 * 60, // 1 day in minute
	TARGETED_TIMESTAMP: 27360,
	MULTICALL_BATCH: 250,
};

export const PENDLE_POOL_ADDRESSES = {
	SY: "0xb1b9150f2085f6a553b547099977181ca802752a",
	YT: "0x3568f1d2e8058f6d99daa17051cb4a2930c83978",
	LP: "0x6010676bc2534652ad1ef5fa8073dcf9ad7ebfbe",
	MULTICALL: "0xca11bde05977b3631167028862be2a173976ca11",
	START_BLOCK: 20566985,
	TREASURY: '0x8270400d528c34e1596ef367eedec99080a1b592',
	EQB_STAKING: '0x0000000000000000000000000000000000000000',
	PENPIE_RECEIPT_TOKEN: '0x0000000000000000000000000000000000000000',
	STAKEDAO_RECEIPT_TOKEN: '0x0000000000000000000000000000000000000000',
	LIQUID_LOCKERS: [
	  {
	    // Penpie
	    address: '0x0000000000000000000000000000000000000000',
	    receiptToken: '0x0000000000000000000000000000000000000000',
	  },
	  {
	    // EQB
	    address: '0x0000000000000000000000000000000000000000',
	    receiptToken: '0x0000000000000000000000000000000000000000',
	  },
	  {   // STAKEDAO
	      address: '0x0000000000000000000000000000000000000000',
	      receiptToken: '0x0000000000000000000000000000000000000000',
	  }
	],
};