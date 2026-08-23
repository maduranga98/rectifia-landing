# Cloud Functions

`bookDemo` sends the demo-booking confirmation email (via SMTP through
`mail.spacemail.com:465`, sender `maduranga@rectifia.com`) with the meeting
link. It's called from the site at `/api/book-demo`, which Firebase Hosting
rewrites to this function (see `firebase.json`).

## One-time setup

Set the SMTP password as a Firebase secret (never commit it):

```
firebase functions:secrets:set SMTP_PASSWORD
```

Then deploy:

```
firebase deploy --only functions,hosting
```

Outbound network access (required to reach the SMTP server) needs the
Firebase project to be on the Blaze (pay-as-you-go) plan.
