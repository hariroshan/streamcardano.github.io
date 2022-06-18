---
layout: in-progress
title:  "StreamCardano API primer"
date:   2022-06-18 16:00:00 +0100
categories: [news, tutorials]
post_image: "/assets/images/streamcardano-logo.png"
---

Congratulations!

You have just got your first StreamCardano API key
to test!

## Check that service is online

I suggest that you start by testing our API is online:
```bash
STREAMCARDANO_HOST=test.streamcardano.dev
curl https://${STREAMCARDANO_HOST}/api/status
```

You should see something like this:
```json
{"postgresWorking":true
,"triggers":..
,"pgbouncerWorking":true
,"appVersion":"0.1.0.0"
,"appCommit":"ad2f9544d23ca2d93e0923695c761f1aeaf4763a"}
```

You can also use this endpoint to check you work on the latest version
of the application API library.

## Checking if StreamCardano is up-to-date with Cardano network?

You need to set API key for anything else:

```bash
export STREAMCARDANO_KEY=${STREAMCARDANO_KEY}
```

Then you can check how far behind the network is the test host:

```bash
curl https://${STREAMCARDANO_HOST}/api/v1/static/last/behind_by
```

Or what is the last timestamp recorded in the database:

```bash
curl https://${STREAMCARDANO_HOST}/api/v1/static/last/block
```

## List transactions of your smart contract

...

## Streaming live results

...




