# serverless-message-telegram

Send a contact message to your Telegram account.

## Install

Install according to the Serverless installation instructions:

- https://serverless.com/framework/docs/getting-started/

Then run after cloning this repository:

```bash
npm install
```

Set the environmental variables in _serverless.yml_ according to your values.

For example:

```bash
export TELEGRAM_API_KEY=xxxx
export TELEGRAM_CHAT_ID=xxxx
```

You can get your Telegram API key and chat ID by following this tutorial:

- https://djangostars.com/blog/how-to-create-and-deploy-a-telegram-bot/

## Offline Testing

```bash
sls offline
```

## Deploy

```bash
sls deploy
```

Note, after deploying there are costs associated with invoking the function depending on cloud provider.

## Remove

```bash
sls remove
```

## Notice

If internal server error occurs, run before deploy:

```bash
chmod -R +r node_modules/
```

## License

MIT
