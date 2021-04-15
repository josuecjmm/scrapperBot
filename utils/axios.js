const axios = require('axios');

exports.response = async api => {
    try {
        const response = await axios.get(api);
        return response.data
    } catch (error) {
        console.error(error);
    }
};

exports.post = async (api, body) => {
    try {
        const response = await axios.post(api, body);
        return response.data
    } catch (error) {
        console.error(error);
    }
};