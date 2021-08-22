export const config = {
  "dev": {
    "username": "postgres",
    "password": "abdelkrimawsadmin",
    "database": "udagramruttnerdev",
    "host": "udagramruttnerdev.chxy8beflbie.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-abdelkrim-dev"
  },
  "prod": {
    "username": "postgres",
    "password": "abdelkrimawsadmin",
    "database": "udagramruttnerdev",
    "host": "udagramruttnerdev.chxy8beflbie.us-east-1.rds.amazonaws.com",
    "dialect": "postgres"
  },
  "jwt": {
      "secret": "helloworld"
  }
}
