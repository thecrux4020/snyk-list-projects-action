const core = require('@actions/core');
const axios = require('axios')


async function api_call() {
    try {

        const config = {
            headers: {
                'Authorization': 'token ' + core.getInput('api_token')
            }
        }
        const url = 'https://snyk.io/api/v1/org/' + core.getInput('org_id') + '/project/' + core.getInput('project_id') + '/deactivate'

        const response = await axios.post(url, {}, config)
        if (response.status !== 200) { core.setFailed("Error. API response code: " + response.status) }
    
    } catch(err) {
        core.setFailed(err.message);
    }
       
}

api_call()