export function Logger(player: 'YOU' | 'ADVERSARY') {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const fallback = originalMethod.apply(this, args);
            console.log(`${player} chose: ${fallback};`);
            fallback
        };
        return descriptor;
    }
}
