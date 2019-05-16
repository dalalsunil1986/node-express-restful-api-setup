module.exports = (express) => {
    const studentsRouter = express.Router();

    studentsRouter.get("/", (req, res) => {
        res.json({
            'status': 1,
            'message': 'success',
            'data': [
                {
                    id: 1,
                    name: "Kartik"
                },
                {
                    id: 2,
                    name: "Alina"
                }
            ]
        });
    });

    studentsRouter.get("/:id", (req, res) => {
        console.log(req.params);

        res.json({
            'status': 1,
            'message': 'success',
            'data':
            {
                id: 1,
                name: "Kartik"
            }
        });
    });

    studentsRouter.post("/", (req, res) => {
        console.log(req.body);
        res.json({
            'status': 1,
            'message': 'success',
            'data': {
                id: 3
            }
        });
    });

    studentsRouter.put("/:id", (req, res) => {
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

    studentsRouter.delete("/:id", (req, res) => {
        console.log(req.params);
        res.json({
            'status': 1,
            'message': 'success',
            'data': ''
        });
    });
    return studentsRouter
};