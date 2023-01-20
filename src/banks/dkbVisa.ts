import * as moment from 'moment';

import {Bank} from './base';

export class dkbvisa extends Bank {
    static description = 'DKBvisa';

    static requiredHeaders = [
        'belegdatum', 'beschreibung', 'betrag',
    ];

    static transformTransactions(transactions) {
        return transactions
            .filter(transaction => transaction.valutadatum)
            .map(obj => {
                const amount = parseFloat(obj.betrag.replace(',', '.')) || 0;
                const payee = obj['beschreibung'];

                // Read date as utc (w/out timezone) and convert to js date
                const date = moment.utc(obj.belegdatum, 'DD.MM.YYYY').format('YYYY-MM-DD');

                return {
                    notes: obj.beschreibung,
                    date,
                    amount,
                    payee_name: payee,
                    imported_payee: payee,
                };
            });
    }

}
