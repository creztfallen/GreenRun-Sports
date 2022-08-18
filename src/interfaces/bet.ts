export interface Bet {
  bet: {
    id: number;
    bet_option: number;
    sport: string;
    status: string;
    name: string;
    event_id: string;
    odd: number;
    result: string;
  };
}
