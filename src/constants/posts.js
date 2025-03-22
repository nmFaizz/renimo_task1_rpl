export const defaultPosts = [
    {
        id: 1,
        user: {
            username: 'Shino Asada',
            avatar: '/sinon.jpeg',
        },
        createdAt: 'Tuesday, June 1, 2021',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec neque ac nisi lacinia fermentum.',
        likes: 10,
        isLiked: false,
        isEditable: true,
        comments: {
            total: 3,
            data: [
                {
                    id: 1,
                    user: {
                        username: 'kirito',
                        avatar: '/users/kirito.jpeg',
                    },
                    content: 'Nice!',
                    createdAt: 'Tuesday, June 1, 2021',
                },
                {
                    id: 2,
                    user: {
                        username: 'asuna',
                        avatar: '/users/asuna.jpeg',
                    },
                    content: 'Cool!',
                    createdAt: 'Tuesday, June 1, 2021',
                },
                {
                    id: 3,
                    user: {
                        username: 'leafa',
                        avatar: '/users/leafa.jpeg',
                    },
                    content: 'Awesome!',
                    createdAt: 'Tuesday, June 1, 2021',
                },
            ],
        },
    },
    {
        id: 2,
        user: {
            username: 'Eugeo',
            avatar: '/users/eugeo.jpeg',
        },
        createdAt: 'Wednesday, June 2, 2021',
        content: 'Lets go somewhere place',
        likes: 15,
        isLiked: false,
        isEditable: false,
        comments: {
            total: 2,
            data: [
                {
                    id: 1,
                    user: {},
                },
                {
                    id: 2,
                    user: {
                        username: 'klein',
                        avatar: '/users/klein.jpeg',
                    },
                    content: 'Great post!',
                    createdAt: 'Wednesday, June 2, 2021',
                },
            ],
        },
    },
    {
        id: 3,
        user: {
            username: 'Ichiko Aoba',
            avatar: '/users/ichiko-aoba.jpeg',
        },
        createdAt: 'Thursday, June 3, 2021',
        content: 'New album is out now!, check it out',
        likes: 20,
        isLiked: false,
        isEditable: false,
        comments: {
            total: 1,
            data: [
                {
                    id: 1,
                    user: {
                        username: 'agil',
                        avatar: '/users/agil.jpeg',
                    },
                    content: 'Well said!',
                    createdAt: 'Thursday, June 3, 2021',
                },
            ],
        },
    }
];
