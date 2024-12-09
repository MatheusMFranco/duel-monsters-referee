import { LuckyGuy } from 'super-lucky-guy';

export function Randomize(target: any, propertyKey: 'coin' | 'jokenpo' | 'dice') {
    const lucky = new LuckyGuy();
    const starter = lucky[propertyKey]();
    const getter = function() {
        return `${starter}`.toUpperCase();
    };
    Object.defineProperty(target, propertyKey, {get: getter});
}
