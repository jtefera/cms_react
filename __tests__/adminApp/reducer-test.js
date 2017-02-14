const reducers = require('../../src/adminApp/reducer');
const {
    postDeleted,
    addPost,
    editPost
} = require('../../src/adminApp/actions');

describe('reducer', function () {
    it('Should delete the appropiate post', () => {
        const initialState = {
            authors: {
                'author-90f208c0-f080-11e6-bbba-531992adcc2d': {
                    email: 'hello@jtefera.com',
                    id: 'author-90f208c0-f080-11e6-bbba-531992adcc2d',
                    name: 'Jonathan',
                    profilePicture: 'prof1.jpg'
                },
                'author-90f22fd0-f080-11e6-bbba-531992adcc2d': {
                    email: 'contact@jtefera.com',
                    id: 'author-90f22fd0-f080-11e6-bbba-531992adcc2d',
                    name: 'Nahum',
                    profilePicture: 'prof2.jpg'
                }
            },
            pageInfo: {
                admin: 'hello@jtefera.com',
                title: 'My CMS in React'
            },
            pages: {
                About: {
                    author: 'Nahum',
                    authorId: 'author-90f22fd0-f080-11e6-bbba-531992adcc2d',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                    title: 'About'
                }
            },
            posts: {
                /* + CHANGED HERE */
                'post-Kcv1h4atSb2VvSnC-qM': {
                    author: 'Author Test',
                    authorId: 'author-90f208c0-f080-11e6-bbba-531992adcc2d',
                    content: 'Content Test',
                    date: 1487049246372,
                    id: 'post-Kcv1h4atSb2VvSnC-qM',
                    title: 'Title Test'
                }
            }
        };
        const action = postDeleted('post-Kcv1h4atSb2VvSnC-qM');
        const state = reducers(initialState, action);
        const expectedState = {
            pageInfo: {
                admin: 'hello@jtefera.com',
                title: 'My CMS in React'
            },
            authors: {
                'author-90f208c0-f080-11e6-bbba-531992adcc2d': {
                    email: 'hello@jtefera.com',
                    id: 'author-90f208c0-f080-11e6-bbba-531992adcc2d',
                    name: 'Jonathan',
                    profilePicture: 'prof1.jpg'
                },
                'author-90f22fd0-f080-11e6-bbba-531992adcc2d': {
                    email: 'contact@jtefera.com',
                    id: 'author-90f22fd0-f080-11e6-bbba-531992adcc2d',
                    name: 'Nahum',
                    profilePicture: 'prof2.jpg'
                }
            },
            posts: { /* - CHANGED HERE */ },
            pages: {
                About: {
                    author: 'Nahum',
                    authorId: 'author-90f22fd0-f080-11e6-bbba-531992adcc2d',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                    title: 'About'
                }
            }
        };
        expect(state).toEqual(expectedState);
    });

    it('Should Add a new Post', () => {
        const initialState = {
            pageInfo: {
                admin: 'hello@jtefera.com',
                title: 'My CMS in React'
            },
            authors: {
                'author-90f208c0-f080-11e6-bbba-531992adcc2d': {
                    email: 'hello@jtefera.com',
                    id: 'author-90f208c0-f080-11e6-bbba-531992adcc2d',
                    name: 'Jonathan',
                    profilePicture: 'prof1.jpg'
                },
                'author-90f22fd0-f080-11e6-bbba-531992adcc2d': {
                    email: 'contact@jtefera.com',
                    id: 'author-90f22fd0-f080-11e6-bbba-531992adcc2d',
                    name: 'Nahum',
                    profilePicture: 'prof2.jpg'
                }
            },
            posts: { /*CHANGED HERE*/ },
            pages: {
                About: {
                    author: 'Nahum',
                    authorId: 'author-90f22fd0-f080-11e6-bbba-531992adcc2d',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                    title: 'About'
                }
            }
        };
        const action = {
            type: 'POST_ADDED',
            id: 'post-Kcv8TRw84FmIYq9mPRF',
            post: {
                id: 'post-Kcv8TRw84FmIYq9mPRF',
                title: 'New Post',
                author: 'Jonathan',
                authorId: 'author-90f208c0-f080-11e6-bbba-531992adcc2d',
                date: 1487051021390,
                content: 'Hello'
            }
        };
        const state = reducers(initialState, action);
        const expectedState = {
            pageInfo: {
                admin: 'hello@jtefera.com',
                title: 'My CMS in React'
            },
            authors: {
                'author-90f208c0-f080-11e6-bbba-531992adcc2d': {
                    email: 'hello@jtefera.com',
                    id: 'author-90f208c0-f080-11e6-bbba-531992adcc2d',
                    name: 'Jonathan',
                    profilePicture: 'prof1.jpg'
                },
                'author-90f22fd0-f080-11e6-bbba-531992adcc2d': {
                    email: 'contact@jtefera.com',
                    id: 'author-90f22fd0-f080-11e6-bbba-531992adcc2d',
                    name: 'Nahum',
                    profilePicture: 'prof2.jpg'
                }
            },
            posts: {
                /* CHANGED HERE: ADDED POST */
                'post-Kcv8TRw84FmIYq9mPRF': {
                    id: 'post-Kcv8TRw84FmIYq9mPRF',
                    title: 'New Post',
                    author: 'Jonathan',
                    authorId: 'author-90f208c0-f080-11e6-bbba-531992adcc2d',
                    date: 1487051021390,
                    content: 'Hello'
                }
            },
            pages: {
                About: {
                    author: 'Nahum',
                    authorId: 'author-90f22fd0-f080-11e6-bbba-531992adcc2d',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                    title: 'About'
                }
            }
        };
        expect(state).toEqual(expectedState);
    });
});