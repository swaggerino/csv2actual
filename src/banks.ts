import {BelfiusBe} from './banks/belfius-be';
import {FintroBe} from './banks/fintro-be';
import {NeonEn} from './banks/neon-en';
import {SparkasseDe} from './banks/sparkasse-de';
import {ZkbDe} from './banks/zkb-de';
import {dkbVisa} from './banks/dkbVisa';

export const supportedBanks = {
    'belfius-be': BelfiusBe,
    'fintro-be': FintroBe,
    'sparkasse-de': SparkasseDe,
    'zkb-de': ZkbDe,
    'neon-en': NeonEn,
    'DKBvisa': dkbVisa,
};
