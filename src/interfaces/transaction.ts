export interface Transaction {
    transaction: {
        id: number;
        userId: number;
        amount: string;
        category: string;
        status: string;
        user_bets_id: number;
    }
}