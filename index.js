const core = require('@actions/core');
const request = require('request');

try {

    const options = {
        headers: {
              'Authorization': 'token ' + core.getInput('api_token'),
              'Content-Type' : 'application/json'
        },
        uri: 'https://snyk.io/api/v1/org/' + core.getInput('org_id') + '/projects',
        method: 'POST',
        json: {
            'filters': {
                'name': core.getInput('project_name'),
                'origin': core.getInput('origin')
            }
        }
    }

    request(options, (err, res, body) => {
        if (err) { core.setFailed(err); }

        let projects = []

        body.projects.forEach(project => {
            projects.append(project.id)
        });

        core.setOutput("project_ids", projects);

    })

} catch (error) {
    core.setFailed(error.message);
}
