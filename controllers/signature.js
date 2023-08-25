const crypto = require('crypto');


const controller = {
    getSignature: (req, res) => {
        const reference = Date.now().toString();
        const monto = req.query.monto;
        const currency = 'COP';
        const signatureIntegrity = '';

        const concatenatedValue = reference + monto + currency + signatureIntegrity;
        const hash = crypto.createHash('sha256').update(concatenatedValue).digest('hex');

        res.json({ hash: hashHex });
    }
};

module.exports = controller;