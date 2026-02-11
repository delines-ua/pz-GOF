export class PaymentGateway {
    public processPayment(amount: number): boolean {
        console.log(`💳 Банк: Спроба списання ${amount} грн...`);
        console.log('💳 Банк: Оплата пройшла успішно.');
        return true;
    }
}