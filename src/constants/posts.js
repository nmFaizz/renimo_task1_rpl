export const defaultPosts = [
    {
        id: 1,
        user: {
            username: 'Shino Asada',
            avatar: 'src/assets/sinon.jpeg',
        },
        createdAt: 'Tuesday, June 1, 2021',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec neque ac nisi lacinia fermentum.',
        likes: 10,
        isLiked: false,
        comments: {
            total: 3,
            data: [
                {
                    id: 1,
                    user: {
                        username: 'kirito',
                        avatar: 'src/assets/users/kirito.jpeg',
                    },
                    content: 'Nice!',
                    createdAt: 'Tuesday, June 1, 2021',
                },
                {
                    id: 2,
                    user: {
                        username: 'asuna',
                        avatar: 'src/assets/users/asuna.jpeg',
                    },
                    content: 'Cool!',
                    createdAt: 'Tuesday, June 1, 2021',
                },
                {
                    id: 3,
                    user: {
                        username: 'leafa',
                        avatar: 'src/assets/users/leafa.jpeg',
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
            avatar: 'src/assets/users/eugeo.jpeg',
        },
        createdAt: 'Wednesday, June 2, 2021',
        content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
        likes: 15,
        isLiked: false,
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
                        avatar: 'src/assets/users/klein.jpeg',
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
            username: 'Yui',
            avatar: 'src/assets/users/yui.jpeg',
        },
        createdAt: 'Thursday, June 3, 2021',
        content: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
        likes: 20,
        isLiked: false,
        comments: {
            total: 1,
            data: [
                {
                    id: 1,
                    user: {
                        username: 'agil',
                        avatar: 'src/assets/users/agil.jpeg',
                    },
                    content: 'Well said!',
                    createdAt: 'Thursday, June 3, 2021',
                },
            ],
        },
    }
];
