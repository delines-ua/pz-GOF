import { OrderFacade } from './OrderFacade';

// Клієнту не треба знати про Warehouse, PaymentGateway чи LogisticsDept.
// Він просто спілкується з Фасадом.

const facade = new OrderFacade();

// Простий виклик складного процесу
facade.placeOrder('iPhone 15', 35000);

facade.placeOrder('MacBook Pro', 95000);