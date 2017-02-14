const router = require('express').Router();
const firebaseAdmin = require('../../src/shared/firebase-admin');
const db = firebaseAdmin.database();
const root = db.ref();

router.post('/add_post', function (req, res) {
    const randomAuthor = 'author-90f208c0-f080-11e6-bbba-531992adcc2d';
    const allPostsRef = db.ref('/posts');
    const newKey = allPostsRef.push().key;
    const newPostId = 'post' + newKey;
    const newPostRef = allPostsRef.child(newPostId);
    const date = Date.now();
    let {
        title,
        author,
        content
    } = req.body;
    if (!title || !content) {
        res.status(400).json({
            error: 'Missing title or content in the request'
        });
        return;
    }
    if (!author) {
        author = 'Jonathan';
    }
    const post = {
        id: newPostId,
        title,
        author,
        authorId: randomAuthor,
        date,
        content
    };
    newPostRef.set(post).then(function afterAddPost(err) {
        if (err) {
            res.json({
                message: error
            });
        }
        res.status(200).json({
            message: 'Succesufully added to firebase',
            id: newPostId,
            post
        });
    });
});

router.put('/edit_post', function editPostApi(req, res) {
    let {
        title,
        author,
        content,
        id
    } = req.body;
    if (!id) {
        res.status(400).json({
            error: 'Missing post\'s id.'
        });
        return;
    }
    const postRef = db.ref('/posts/' + id);
    postRef.once('value', function recievedPost(snapshot) {
        if (!snapshot.exists()) {
            res.status(404).json({
                error: 'Post not found. Maybe deleted or changed or wrong key.'
            });
            return;
        }
        const post = snapshot.val();
        post.title = (title) ? title : post.title;
        post.author = (author) ? author : post.author;
        post.content = (content) ? content : post.content;
        post.lastEdited = Date.now();
        postRef.update(post)
            .then(function () {
                res.status(200).json({
                    message: 'Succesufully updated post in Firebase',
                    id,
                    post,
                });
            })
            .catch(function (err) {
                res.status(500).json({
                    error: err
                });
            })
    });
});

router.delete('/delete_post', function deletePostApi(req, res) {
    const id = req.body.id;
    if (!id) {
        res.status(400).json({
            error: 'Missing post\'s id.'
        });
        return;
    }
    const postRef = root.child('/posts/' + id);
    postRef.once('value', function recievedPost(snapshot) {
        if (!snapshot.exists()) {
            res.status(404).json({
                error: 'Post not found. Maybe deleted or changed or wrong key.'
            });
            return;
        }
        postRef.remove()
            .then(function () {
                res.status(200).json({
                    message: 'Succesufully deleted post in Firebase',
                    id,
                });
            })
            .catch(function (err) {
                res.status(500).json({
                    message: 'Post could not be deleted',
                    error: err
                });
            });
    });
});

router.put('/edit_page_info', function editPageInfo(req, res) {
    const newInfo = req.body;
    if (!newInfo) {
        res.status(400).json({
            error: 'No info sent'
        });
        return;
    }
    const pageInfoRef = root.child('/pageInfo');
    pageInfoRef.once('value', function infoReceived(snapshot) {
        if (!snapshot.exists()) {
            res.status(404).json({
                error: 'pageInfo has been moved or deleted in Firebase...'
            });
            return;
        }
        const oldInfo = snapshot.val();
        const newTitle = newInfo.title || oldInfo.title;
        const newDescription = newInfo.description || oldInfo.description;
        const newAdmin = newInfo.admin || oldInfo.admin;
        const updatedInfo = {
            title: newTitle,
            description: newDescription,
            admin: newAdmin
        };
        pageInfoRef.update(updatedInfo)
            .then(function () {
                res.status(200).json({
                    message: 'Succesufully updated Page Info',
                    pageInfo: updatedInfo
                });
            }).catch(function (err) {
                res.status(500).json({
                    message: 'pageInfo could not be updated',
                    error: err
                });
            });
    });
});
module.exports = router;