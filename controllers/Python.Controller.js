const db = require('../config/sequelize');
const pythonData = db.pythonData;

async function executePython() {
    const PythonShell = require('python-shell').PythonShell;

    PythonShell.run('py_script.py', null, function (err, results) {
        if (err)
            throw err;

        let data = JSON.parse(results)

        for (const key in data['final_word']) {
            pythonData.create(
                {
                    data: data['final_word'][key],
                });
        }
    });
}

exports.getPythonData = async (req, res) => {

    await executePython().then((result) => {
        return res.status(200).json(
            { "status": "success", "msg": "python script executed successfully & data inserted into database named singh" }
        );
    }).catch((err) => { 
        return res.status(422).json(
            { "status": "failure", "msg": "python script execution failed, please try again!", 'err': err }
        );
    })

}