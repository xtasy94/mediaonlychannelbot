# Media-Only Channel Bot

A Discord bot that enforces media-only content in a designated channel by automatically removing text-only messages.

## Overview

This Discord bot monitors a specified channel and deletes messages without attachments, ensuring the channel remains dedicated to media sharing.

## Features

- Automatic removal of text-only messages
- Channel-specific filtering
- Configurable and easy to deploy

## Prerequisites

- Node.js (v16.9.0+)
- Discord Bot Token
- Administrative access to a Discord server

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/xtasy94/mediaonlychannelbot.git
   cd mediaonlychannelbot
   ```

2. Install dependencies:
   ```bash
   npm install discord.js
   ```

## Configuration

1. Open `index.js`
2. Replace `'your-channel-id'` with the target channel's ID
3. Replace `'your-bot-token'` with your Discord bot token

### Obtaining Credentials

- **Channel ID**: Right-click the channel (Developer Mode enabled) and select "Copy Channel ID"
- **Bot Token**: [Discord Developer Portal](https://discord.com/developers/applications) > Your Application > Bot > Copy Token

## Deployment

```bash
node index.js
```

## Bot Permissions

Ensure the bot has:
- Read Messages
- Send Messages
- Manage Messages