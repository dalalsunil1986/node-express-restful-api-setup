module.exports = (express) => {
    const router = express.Router();

    router.get("/", (req, res) => {
        res.json({
            'status': 1,
            'message': 'success',
            'data': [
                {
                    id: 1,
                    name: "Ronit"
                },
                {
                    id: 2,
                    name: "James"
                }
            ]
        });
    });

    router.get("/:id", (req, res) => {
        console.log(req.params);

        res.json({
            'status': 1,
            'message': 'success',
            'data':
            {
                id: 1,
                name: "Ronit"
            }
        });
    });

    router.post("/", (req, res) => {
        console.log(req.body)
        res.json({
            'status': 1,
            'message': 'success',
            'data': {
                id: 3
            }
        });
    });

    router.put("/:id", (req, res) => {
        console.log(req.params);
        console.log(req.body);
        res.json({
            'status': 1,
            'message': 'success',
            'data': {
                id: 3
            }
        });
    });

    router.delete("/:id", (req, res) => {
        console.log(req.params);
        res.json({
            'status': 1,
            'message': 'success',
            'data': ''
        });
    });
    return router
};