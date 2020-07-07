export default {
    state: {
        coffees: [
            {
                id: 123451,
                code: 'espresso',
                name: 'Еспресо',
                composition: ['1 порція еспресо'],
                image: '/coffees/espresso.png',
                price: 12,
                available: true,
            },
            {
                id: 123452,
                code: 'americano',
                name: 'Американо',
                composition: ['1 порція еспресо', '2 частини гарячої води'],
                image: '/coffees/americano.png',
                price: 15,
                available: true,
            },
            {
                id: 123453,
                code: 'cappuccino',
                name: 'Капучино',
                composition: ['1 порція еспресо', '1 частина молока на пару', 'молочна піна'],
                image: '/coffees/cappuccino.png',
                price: 27,
                available: true,
            },
            {
                id: 123454,
                code: 'latte',
                name: 'Лате',
                composition: ['1 порція еспресо', '2 частини пропареного молока'],
                image: '/coffees/latte.png',
                price: 30,
                available: true,
            },
        ],
    },
    getters: {
        getCoffees(state) {
            return state.coffees;
        },
    },
    mutations: {},
    actions: {},
};
