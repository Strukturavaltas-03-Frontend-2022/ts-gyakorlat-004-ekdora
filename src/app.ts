// Importáld be a HumanHero és TransformerHero osztályokat.

import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";


/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
       {id: 1, name: 'Marie', sex: 'female', age: 1, health: 100},
       {id: 2, name: 'Toulouse', sex: 'male', age: 3, health: 95},
       {id: 3, name: 'Berlioz', sex: 'male', age: 5, health: 92},
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    {id: 1, name: 'Első', wings: 2, wheels: 4, clan: 'Ez'},
    {id: 2, name: 'Második', wings: 4, wheels: 2, clan: 'Az'},
    {id: 3, name: 'Harmadik', wings: 6, wheels: 0, clan: 'Amaz'},
];
