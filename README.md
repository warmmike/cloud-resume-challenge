# Cloud Resume Challenge

## After doing [my github Kubernetes Resume Challenge](https://github.com/warmmike/kubernetes-resume-challenge) I decided to take on the [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/).

### This is a work in progress at the moment, but [check it out](https://www.mikecarman.cloud.s3-website-us-east-1.amazonaws.com/)!

The Cloud Resume Challenge has you create a static HTML page of your resume and put it in the cloud.

I've established the CI/CD (Github Actions Workflow and AWS terraform), so I could hit the ground running this time.

I grabbed a template for the html and once again used ChatGPT for the css heavy lifting.  At some point I will add a menu to make the page support navigaton.

CloudFront is next followed by DNS.  Then Javascript page counter and associated Lambda + DB.  More to come!