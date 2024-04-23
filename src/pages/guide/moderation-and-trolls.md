---
title: Moderation and Trolls
layout: "../../layouts/GuideLayout.astro"
description: Learn how to moderate your coworking streams!
order: 6
---

# Moderation and Trolls

---

## Moderation Team

Having a good moderation team is important for coworking streamers, since most of the time we are focused on our own work and not chat! This is why it's particularly important to have a good moderation team to help you out so you don't get distracted. 

Consider these three main things when choosing your mods:

- How well do they all get along with each other?
- What is their availability?
- Are they good at staying calm and being reasonable?

As well as this, it is ideal if mods are welcoming and active in your community - you can't always be there to say hi to everyone while your working so it's great to have a friendly mod team to welcome new people and answer questions!

:::note
How you invite your mods is a personal choice! And don't feel bad if you ask someone and they say no - not everyone is up for the job! If you know someone you'd like as a mod you could DM them with a personal invite, otherwise you could create an application form if that suits you and your community better!
:::


---

## Bots and trolls

As with any social media platform, you may encounter trolls and bots while you stream. If this happens, it is best to stay calm and work with your mods to resolve the situation; most of the time it is just annoying and won't result in anything serious. The following section is not an exhaustive list and this only meant as friendly advice. Please make sure you have read twitch TOS and only do what makes you feel comfortable and safe.

- ### Generic Trolls

    For trolls that enter your chat and immediately send very inappropriate messages (e.g. hateful/sexual content) it is best to ignore them, ban them straightaway and move on. Giving them attention may create a negative atmosphere in your stream and make others feel unsafe. Try not to take these comments personally - it is unlikely to be targeted and they probably just want to get a reaction out of you. 

- ### Promotional bots

    This is when several bot accounts post in your chat with the same message, usually advertising a "get famous quick" scam. To stop this, you can put your chat in follower only mode by typing `/followers` in your chat. Usually they will go away quickly and you can type `/followersoff` to change it back.

    You can also make use of the AutoMod feature by banning phrases like "bigfollow", so their messages get automatically removed. You can find this in your Dashboard Settings → Moderation. If you would like, you can also block hyperlinks in the same page or a stream bot (NightBot, StreamElements, etc.)

- ### Follow bots/raids

    This is when several bot accounts follow your channel all at the same time. It can be anywhere from 10-10k. If this happens, stay calm, and turn off follower alerts to stop the alert spam. Sometimes the bots will also send messages all at once so you put your chat in subscriber mode to prevent this if you wish (type <span class="code-highlight">/subscribers</span> in your chat).

    To get rid of bots, you can use [CommanderRoot's follower removal tool](https://twitch-tools.rootonline.de/follower_remover.php). Follow the instructions on his home page to remove accounts between a certain timeframe (you'll need to know what time the bots followed to avoid removing real people). Alternatively, you can just wait and Twitch will delete the accounts after a few days. Your follower count will drop suddenly but this is good - you don't want bots following you!

- ### Donation trolls

    These are particularly nasty trolls. They donate money, anywhere from $10-$200 or more, maybe repeatedly, and will not talk very much in the chat, aside from making some request in exchange for the money they just donated. They then will ask for a chargeback (if youre using paypal). You can try and fight the case but there is a good change you will not win, and if you lose you have to pay $14 chargeback fee each time. This can add up over time. If you suspect someone is a Dono troll, you can block them from donating:

    Go to your [donation page](https://streamlabs.com/dashboard#/donations). There should be a list of names and donations:

    <img src="/images/moderation-and-trolls/donation-troll.webp" alt="Donation troll" loading="lazy" />

    <br> 
    Also in Settings > Donation settings, make sure you've ticked "Login Required":

    <img src="/images/moderation-and-trolls/donation-settings.webp" alt="Donation settings" loading="lazy" />

---

## How to moderate streams

Here's some tips for streamers and moderators who want to effectively moderate streams.

- ### Get familiarized with Mod View
    To enter moderator view for a stream you're able to moderate, click on the sword icon next to the chat or open `https://twitch.tv/moderator/[username]`. Get familiar with icons including Unban Requests, Predictions, Activity Feed etc.

- ### Turn on Show Mod Icons
    Showing Mod Icons can allow you to quickly ban, timeout or delete message sent by a user in chat. To activate "Show Mod Icons":
    1. Open any chat on Twitch (For example, open `https://twitch.tv/RythonDev/chat`)
    2. Click on Chat Settings (Gear icon)
    3. Find "Show Mod Icons" then switch it on

- ### Learn useful slash commands
    Here are some useful slash commands! 
    - `/ban [user] (reason)` 
        
        Example: `/ban JohnDoeTTV suspicious account`
        
        Bans users, reason is optional.

    - `/timeout [user] [duration] (reason)`
        
        Example: `/timeout JohnDoeTTV 100 inappropriate comments`
        
        Times out users for a certain duration (default: seconds), reason is optional.

    - `/followers (duration)`
        
        Example: `/followers 1h`
        
        Turns on followers-only mode in chat. Do `/followers` to allow chatters to speak immediately after they follow the channel.
    
    - `/shield`
        
        Activates Shield Mode on chat. Only activate it when you're getting harassed by bots or spammers. [Learn more 
        about Shield Mode](https://safety.twitch.tv/s/article/Protect-your-channel-with-Shield-Mode?language=en_US).

    - `/slow [duration]`
        
        Example: `/slow 3s`

        Activates Slow Mode for a specified duration.

    - `/pin [message]`
        
        Example: `/pin This is a coworking stream. !pomo and !about for more info`
        
        Pins a message in chat.

    - `/poll, /prediction`
        
        Opens a setup menu to create a poll/prediction.


