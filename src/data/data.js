let faker = require('faker');

export const data = {
    excursion: [
        {
    country: 'Iceland',
    description: 'Travel the famous ring road of Iceland in a small group. ' +
    'Visit some of the most amazing destinations around Iceland.',
    transportType: {
        plane: {cost: 100, days: 1},
        bus: {cost: 70, days: 2},
        train: {cost: 50, days: 2}
    },
    meals: {
        'bed and breakfast': {cost: 20},
        'full board': {cost: 100},
        'all inclusive': {cost: 200},
        'only bed': {cost: 0}
    },
    startDuration: 10,
    startCost: 250
},
        {
    country: 'United Kingdom',
    description: 'Oxford, Stratford-upon-Avon, and Warwick Castle, traveling to three of England’s most-popular locations.',
    transportType: {
        plane: {cost: 120, days: 2},
        bus: {cost: 50, days: 5},
        train: {cost: 30, days: 4}
    },
    meals: {
        'bed and breakfast': {cost: 20},
        'full board': {cost: 100},
        'all inclusive': {cost: 200},
        'only bed': {cost: 0}
    },
    startDuration: 8,
        startCost: 300
},
        {
            country: 'Spain',
            description: 'Segovia and Toledo from Madrid with Cathedral and Alcazar Access',
            transportType: {
                plane: {cost: 100, days: 1},
                bus: {cost: 70, days: 2},
                train: {cost: 50, days: 2}
            },
            meals: {
                'bed and breakfast': {cost: 20},
                'full board': {cost: 100},
                'all inclusive': {cost: 200},
                'only bed': {cost: 0}
            },
            startDuration: 10,
            startCost: 250
        },
        {
            country: 'Norway',
            description: 'The tour starts in Hellesylt, a small village with a spectacular waterfall, ' +
            'situated at the very end of the Sunnylvsfjord.',
            transportType: {
                plane: {cost: 150, days: 1},
                bus: {cost: 70, days: 2},
                train: {cost: 50, days: 2}
            },
            meals: {
                'bed and breakfast': {cost: 20},
                'full board': {cost: 100},
                'all inclusive': {cost: 200},
                'only bed': {cost: 0}
            },
            startDuration: 7,
            startCost: 400
        }
        ],
    shopping: [
        {
            country: 'Poland',
            description: 'Discover Polish culture through our handmade products! This Krakow tour will take you to the shops and galleries you’d never' +
            ' find on your own, and connect you with the people it’d be impossible to meet without a guide by your side.',
            transportType: {
                plane: {cost: 100, days: 1},
                bus: {cost: 40, days: 3},
                train: {cost: 20, days: 2}
            },
            meals: {
                'bed and breakfast': {cost: 20},
                'full board': {cost: 100},
                'all inclusive': {cost: 200},
                'only bed': {cost: 0}
            },
            startDuration: 3,
            startCost: 50
        },
        {
            country: 'China',
            description: 'Excellent shopping as well as an illuminating and interesting day' +
            ' out in the fascinating city of Shanghai',
            transportType: {
                plane: {cost: 300, days: 1}
            },
            meals: {
                'bed and breakfast': {cost: 20},
                'full board': {cost: 100},
                'all inclusive': {cost: 200},
                'only bed': {cost: 0}
            },
            startDuration: 12,
            startCost: 100
        },
        {
            country: 'Italy',
            description: 'Shop \'til you drop (and save money while doing it) on this day trip ' +
            'to Serravalle Designer Outlet from Milan',
            transportType: {
                plane: {cost: 100, days: 1},
                bus: {cost: 70, days: 2},
                train: {cost: 50, days: 2}
            },
            meals: {
                'bed and breakfast': {cost: 20},
                'full board': {cost: 100},
                'all inclusive': {cost: 200},
                'only bed': {cost: 0}
            },
            startDuration: 10,
            startCost: 250
        }
    ],
    hiking: [
        {
            country: 'Georgia',
            description: 'Visit the old capital of Georgia – Mtskheta and explore the heart province of Georgia – Kartli. Visit the ancient Uplistsikhe ' +
            'cave town and the Soviet dictator Stalin’s home town where you can explore Stalin’s life and house where he lived.',
            transportType: {
                plane: {cost: 200, days: 1},
                bus: {cost: 70, days: 2},
                train: {cost: 100, days: 2}
            },
            meals: {
                'all inclusive': {cost: 200}
            },
            startDuration: 12,
            startCost: 130
        },
        {
            country: 'United Kingdom, Scotland',
            description: 'The Isle of Skye is a truly magical place. ' +
            'The largest of the Inner Hebrides, its home to The Cuillin a rugged mountain range with fabulous hiking and climbing. ',
            transportType: {
                plane: {cost: 400, days: 1},
                train: {cost: 150, days: 2}
            },
            meals: {
                'bed and breakfast': {cost: 20},
                'full board': {cost: 100}
            },
            startDuration: 10,
            startCost: 290
        },
        {
            country: 'Russia',
            description: 'Klyuchevskaya Sopka is one of the most active volcanoes not only in Kamchatka',
            transportType: {
                plane: {cost: 200, days: 1},
                train: {cost: 150, days: 2}
            },
            meals: {
                'only bed': {cost: 0}
            },
            startDuration: 10,
            startCost: 50
        }
    ],
    'beach rest': [
        {
            country: 'Greece',
            description: `Beach holiday in Greece`,
            transportType: {
                plane: {cost: 100, days: 1},
                bus: {cost: 70, days: 2},
                train: {cost: 50, days: 2}
            },
            meals: {
                'bed and breakfast': {cost: 20},
                'full board': {cost: 100},
                'all inclusive': {cost: 200},
                'only bed': {cost: 0}
            },
            startDuration: 10,
            startCost: 250
        }
    ],
    'festivals and fests': [
        {
            country: 'Germany, Munich',
            description: 'Every September and October, over 6.4 million ' +
            'visitors from around the world mingle with locals to celebrate Bavarian culture, cuisine, and - of course - beer.',
            transportType: {
                plane: {cost: 100, days: 1},
                bus: {cost: 70, days: 2},
                train: {cost: 50, days: 2}
            },
            meals: {
                'bed and breakfast': {cost: 20},
                'only bed': {cost: 0}
            },
            startDuration: 14,
            startCost: 90
        }
        ]
}
