import { createTrans, getAllTrans, getFilteredTrans} from "../controllers/transactionController";

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
    },
    {
        method: 'GET',
        path: "/transactions/filtered",
        handler: getFilteredTrans
    }

]
