import { DispatchCenter } from './DispatchCenter';
import { Driver } from './Driver';

console.log('--- Налаштування системи ---');
const center = new DispatchCenter();

const driver1 = new Driver('Іван (Bolt)');
const driver2 = new Driver('Олег (Uber)');
const driver3 = new Driver('Марія (Uklon)');

// 1. Водії виходять на лінію
center.subscribe(driver1);
center.subscribe(driver2);
center.subscribe(driver3);

// 2. Приходить замовлення
center.notify('Пасажир на вул. Хрещатик, 1');

// 3. Один водій йде додому
center.unsubscribe(driver2);

// 4. Нове замовлення отримують тільки ті, хто залишився
center.notify('Доставка піци на Поділ');