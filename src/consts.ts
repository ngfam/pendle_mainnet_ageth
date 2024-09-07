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
	MULTICALL_BATCH: 250,
};

export const PENDLE_POOL_ADDRESSES = {
	SY: "0xb1b9150f2085f6a553b547099977181ca802752a",
	YT: "0x3568f1d2e8058f6d99daa17051cb4a2930c83978",
	LP: "0x6010676bc2534652ad1ef5fa8073dcf9ad7ebfbe",
	MULTICALL: "0xca11bde05977b3631167028862be2a173976ca11",
	START_BLOCK: 20566985,
	TREASURY: "0x8270400d528c34e1596ef367eedec99080a1b592",
	EQB_STAKING: "0x64627901dadb46ed7f275fd4fc87d086cff1e6e3",
	PENPIE_RECEIPT_TOKEN: "0xd3b6650de413184c7b3721c8898e4673395417d2",
	STAKEDAO_RECEIPT_TOKEN: "0xd23fccec44923a0c5f7fa19bba89d09eea6416e3",
	LIQUID_LOCKERS: [
		{
			// Penpie
			address: "0x6e799758cee75dae3d84e09d40dc416ecf713652",
			receiptToken: "0xd3b6650de413184c7b3721c8898e4673395417d2",
		},
		{
			// EQB
			address: "0x64627901dadb46ed7f275fd4fc87d086cff1e6e3",
			receiptToken: "0x922a746c87809036bc1691b169bb38ae7a29acb0",
		},
		{
			// STAKEDAO
			address: "0xd8fa8dc5adec503acc5e026a98f32ca5c1fa289a",
			receiptToken: "0xd23fccec44923a0c5f7fa19bba89d09eea6416e3",
		},
	],
};
