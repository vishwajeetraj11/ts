import 'reflect-metadata';

import { AppRouter } from '../../appRouter';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './methods';

export function controller(routePrefix: string) {
    return function (target: Function) {
        const router = AppRouter.getInstance();
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata('path', target.prototype, key);
            const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);

            if (path) {
                router[method](`${routePrefix}${path}`, routeHandler);
            }
        }
    }
}