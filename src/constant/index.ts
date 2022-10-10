export type Currency = {
    name: string;
    rate: number;
    fiat: string;
}
export type GiftCard = {
    name: string;
    currencies: Currency[]
}

export const BTCRate: number = 670;
export const BTC2USDRate: number = 19485.50;
export const USDRate: number = 690;

export const whatsAppUrl: string =  `https://api.whatsapp.com/message/GD7E24XH7PLUJ1?autoload=1&app_absent=0`;

export const giftCards: GiftCard[] = [
    {
        name: 'Steam Rate',
        currencies: [
            {
                name: 'US',
                rate: 522,
                fiat: 'N/$'
            },
            {
                name: 'UK',
                rate: 590,
                fiat: 'N/$'
            },
            {
                name: 'CAD',
                rate: 384,
                fiat: 'N/$'
            },
            {
                name: 'CHF',
                rate: 537,
                fiat: 'N/$'
            },
            {
                name: 'EUR',
                rate: 517,
                fiat: 'N/$'
            },
            {
                name: 'AUD',
                rate: 339,
                fiat: 'N/$'
            },
            {
                name: 'NZD',
                rate: 302,
                fiat: 'N/$'
            },
        ]
    },

    {
        name: 'Google Play Rate',
        currencies: [
            {
                name: 'EUR',
                rate: 451,
                fiat: 'N/$'
            },
            {
                name: 'BRAZIL',
                rate: 82,
                fiat: 'N/$'
            },
            {
                name: 'MXN',
                rate: 14,
                fiat: 'N/$'
            },
            {
                name: 'MYR',
                rate: 82,
                fiat: 'N/$'
            },
        ]
    },

    {
        name: 'Itunes/Apple rate',
        currencies: [
            {
                name: '100 PIC',
                rate: 389,
                fiat: 'N/$'
            },
            {
                name: '50-450 pic',
                rate: 369,
                fiat: 'N/$'
            },
            {
                name: '25-499 pic',
                rate: 348,
                fiat: 'N/$'
            },
        ]
    },

    // {
    //     name: 'Itunes Other Country',
    //     currencies: [
    //         {
    //             name: 'Portugal',
    //             rate: 584,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: 'Greece',
    //             rate: 584,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: 'AED',
    //             rate: 139,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: 'Demark',
    //             rate: 61.5,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: 'Saudi',
    //             rate: 118,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: 'Luxembourg',
    //             rate: 584,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: 'MXN',
    //             rate: 18,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: 'South Afica',
    //             rate: 29.7,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: 'Norway',
    //             rate: 50.2,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: 'Hongkong',
    //             rate: 73.8,
    //             fiat: 'N/$'
    //         },
    //     ]
    // },
    // {
    //     name: 'Ebay rate',
    //     currencies: [
    //         {
    //             name: 'US pic 100-200',
    //             rate: 425,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: 'US pic 50-99',
    //             rate: 389,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: 'US pic 25-49',
    //             rate: 369,
    //             fiat: 'N/$'
    //         },
    //     ]
    // },
    // {
    //     name: 'Amazon rate',
    //     currencies: [
    //         {
    //             name: 'US pic 50-100',
    //             rate: 430,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: 'US pic 25-500',
    //             rate: 410,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: 'US code 25-300',
    //             rate: 0,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: 'Cash receipt',
    //             rate: 0,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: 'EUR CAD AUD UK',
    //             rate: 0,
    //             fiat: 'N/$'
    //         },
    //     ]
    // },
    // {
    //     name: 'Apple slow rate 30 minutes',
    //     currencies: [
    //         {
    //             name: '200-450 pic',
    //             rate: 522,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: '500-2000 pic',
    //             rate: 533,
    //             fiat: 'N/$'
    //         },
    //     ]
    // },
    // {
    //     name: 'Apple slow rate 1-2 hours',
    //     currencies: [
    //         {
    //             name: '300-400',
    //             rate: 0,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: '500-2000',
    //             rate: 0,
    //             fiat: 'N/$'
    //         },
    //     ]
    // },
    // {
    //     name: 'American express 3779',
    //     currencies: [
    //         {
    //             name: '100',
    //             rate: 0,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: '200',
    //             rate: 0,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: '300',
    //             rate: 0,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: '400',
    //             rate: 0,
    //             fiat: 'N/$'
    //         },
    //         {
    //             name: '500',
    //             rate: 0,
    //             fiat: 'N/$'
    //         },
    //     ]
    // },
    // {
    //     name: 'Razer gold US',
    //     currencies: [
    //         {
    //             name: '50-500',
    //             rate: 563,
    //             fiat: 'N/$'
    //         }
    //     ]
    // },
    // {
    //     name: 'Sephora',
    //     currencies: [
    //         {
    //             name: '100-500',
    //             rate: 451,
    //             fiat: 'N/$'
    //         }
    //     ]
    // },
    // {
    //     name: 'Nordstrom',
    //     currencies: [
    //         {
    //             name: '100-500',
    //             rate: 461,
    //             fiat: 'N/$'
    //         }
    //     ]
    // },
    // {
    //     name: 'Macy',
    //     currencies: [
    //         {
    //             name: '100-200',
    //             rate: 492,
    //             fiat: 'N/$'
    //         }
    //     ]
    // },
    // {
    //     name: 'FootLooker',
    //     currencies: [
    //         {
    //             name: '100-500',
    //             rate: 492,
    //             fiat: 'N/$'
    //         }
    //     ]
    // },
    // {
    //     name: 'Nike',
    //     currencies: [
    //         {
    //             name: '100-500',
    //             rate: 451,
    //             fiat: 'N/$'
    //         }
    //     ]
    // },
    // {
    //     name: 'EDD transfer',
    //     currencies: [
    //         {
    //             name: '1000+',
    //             rate: 0,
    //             fiat: 'N/$'
    //         }
    //     ]
    // },
    // {
    //     name: 'Walmart transfer',
    //     currencies: [
    //         {
    //             name: '500+',
    //             rate: 471,
    //             fiat: 'N/$'
    //         }
    //     ]
    // },
    // {
    //     name: 'Go bank transfer',
    //     currencies: [
    //         {
    //             name: '500+',
    //             rate: 492,
    //             fiat: 'N/$'
    //         }
    //     ]
    // },
]