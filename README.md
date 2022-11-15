# Description

There is a Node.js server application that connects to a PostgreSQL database and takes 3 environment variables, `DATABASE_URL`, `PORT` and `NODE_ENV`.
The application has to be accessible via a public URL and when /health is hit we should get a response as follows:

```json
{
  "status": "OK",
  "environment": "production"
}
```

## Testing Skills

- Docker
- Kubernetes
- IaC - Terraform / Pulumi
- Best practices, e.g. security

## Expectations

We want you to:

- Dockerise the application
- Ensure environment variables are provided to the application
- Create configurations (using Kustomize) to deploy the application to a Kubernetes cluster
- Create configuration(s) to deploy the PostgreSQL database with Terraform / Pulumi, which should not be accessible publicly
- Live deployments are not required

### Environment File

Created `.env` file with the following environment variables

```env
NODE_ENV: development # String
DATABASE_ENDPOINT: postgresql://<username>:<password>@<host>:<db_port>/<database_name> # String
PORT=3000 # Number
```
