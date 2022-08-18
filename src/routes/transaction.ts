import { createTrans, getAllTrans} from "../controllers/transactionController";

export const transRoutes = [
    {
        method: 'POST',
        path: "/transactions",
        handler: createTrans
    },
    {
        method: 'GET',
        path: "/transactions",
        handler: getAllTrans
    }
]
