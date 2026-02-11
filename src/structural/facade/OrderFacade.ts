import { Warehouse } from './Warehouse';
import { PaymentGateway } from './PaymentGateway';
import { LogisticsDept } from './LogisticsDept';

export class OrderFacade {
    private warehouse: Warehouse;
    private payment: PaymentGateway;
    private logistics: LogisticsDept;

    constructor() {
        // Фасад сам створює або отримує посилання на підсистеми
        this.warehouse = new Warehouse();
        this.payment = new PaymentGateway();
        this.logistics = new LogisticsDept();
    }

    // ОДИН простий метод замість трьох складних
    public placeOrder(productId: string, amount: number): void {
        console.log('--- Початок обробки замовлення (через Фасад) ---');

        // 1. Перевіряємо склад
        if (!this.warehouse.checkStock(productId)) {
            console.log('Помилка: Немає на складі.');
            return;
        }

        // 2. Проводимо оплату
        if (!this.payment.processPayment(amount)) {
            console.log('Помилка: Оплата не пройшла.');
            return;
        }

        // 3. Пакуємо і відправляємо
        this.warehouse.packageItem(productId);
        this.logistics.arrangeTransport(productId);

        console.log('--- Замовлення успішно завершено! ---\n');
    }
}
