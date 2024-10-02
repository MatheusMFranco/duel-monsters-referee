import { Coin } from './coin.enum';
import { Jokenpo } from './jokenpo.enum';

export type SideKey = keyof typeof Coin | keyof typeof Jokenpo;