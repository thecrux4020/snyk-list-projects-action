const core = require('@actions/core');
const axios = require('axios')


try {

    const config = {
        headers: {
            "Authorization": 'token ' + core.getInput('api_token')
        }
    }

    const response = await axios.post('https://snyk.io/api/v1/org/' + core.getInput('org_id') + '/projects', {
        'filters': {
            'name': core.getInput('project_name'),
            'origin': core.getInput('origin')
        }
    }, config)

    if (response.status !== 200) { core.setFailed("Error. API response code: " + response.status) }

    const responseData = response.data

    let projects = []

    responseData.projects.forEach(project => {
        projects.append(project.id)
    });

    core.setOutput("project_ids", projects);

} catch(err) {
    if(axios.isAxiosError(err)) {
        core.setFailed(error.message);
    }
}
