# Snyk get projects action

This action deactivate a project in Snyk given the ID

## Inputs

  token:
    description: 'Snyk API token'
    required: true
  project_id:
    description: "Snyk project id"
    required: true
    default: "-"
  org_id:
    description: "Snyk Organization ID"
    required: true
    default: "-"

## `api_token`

**Required** The API token to access Snyk.

## `project_id`

**Required** The Snyk project id. Default `"-"`.

## `org_id`

**Required** The Snyk organization ID. Default `"-"`.

## Example usage

uses: actions/snyk-deactivate-project-action@v1.0.0
with:
  token: '1234'
  project_id: '32432432'
  org_id: 'asd123'