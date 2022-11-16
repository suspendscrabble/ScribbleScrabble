# currently fronting

A web app for displaying a [PluralKit](https://pluralkit.me/) system's current public fronters.

The index automatically redirects to an example page, but folks can find their system or a friend's at `https://front.plural.codes/system-id-here`. Just replace `system-id-here` with the system ID in question. Our page, for example, is available at https://front.plural.codes/gtyvg.

## query parameters

An interface for configuring query parameters is coming soon<sup>er than you& might think</sup>[^0.2.0]! Until then, below are a list of currently available query parameters for configuring the layout of your& link, along with their acceptable values. Any unacceptable value will result in the default being used instead.

- `s`: System (requires an additional query to the PluralKit server, slightly increasing load times)
  - `true`: Display a system card at the end of the member list
  - `false` _default_: Do not display a system card (default for performance reasons)
- `a`: Avatar
  - `none`: Do not display avatars
  - `right`: Display avatars to the right of text
  - `center`: Display avatars centered above text
  - `left` _default_: Display avatars to the left of text
- `b`: Banner
  - `none`: Do not display banners
  - `text`: Display banners as backgrounds for all non-description text ([core content](#road-to-version-020))
  - `bottom`: Display banners below text
  - `top` _default_: Display banners above text

## query parameter examples

https://front.plural.codes/gtyvg?b=text&a=none: **Banners as backgrounds, no avatars**

https://front.plural.codes/gtyvg?a=none&b=none: **No banners, no avatars**

https://front.plural.codes/gtyvg?s=true&b=bottom&a=right: **System card, banners on the bottom, avatars on the right**

https://front.plural.codes/gtyvg: Default settings (no parameters)

## privacy policy

Requests to the [PluralKit API](https://pluralkit.me/api/) are made client-side, with responses cached client-side and automatically invalidated when data changes through an implementation of [SWR](https://swr.vercel.app/). When fronters for a system update, the cache invalidates. Upon the site's return to focus, it updates the page automatically to display the new data. The page also refreshes the cache in the background on an interval, as long as the browser tab remains in focus. This app only accesses publicly available data on fronters.

To be clear: This app _does_ store data in your& browser, and it relies on that capability in order to enable automatic refreshes of fronters. None of this data is shared with any other application or website. You may opt to disable web storage APIs for this application at any time through your& browser settings. The site will still work with manual refreshes of the tab in your& browser if you disable storage, but automatic refreshes will not be possible without a client-side cache to compare against.

This app uses [Vercel Analytics](https://vercel.com/analytics) to generate aggregate performance metrics via Web Vitals. (We do _not_ use Vercel Analytics Audiences.) IP addresses are not logged; nor are device manufacturers or models. Vercel Analytics only logs the broad device categories of phone, tablet and PC, along with the necessary data points to calculate [Web Vitals](https://web.dev/vitals/). The URL visited is also logged. Having access to this data is immensely helpful, both in encouraging us to keep developing (since we can determine the approximate number of systems being viewed in a given week, a number that is steadily increasing); and in measuring the overall performance benefit or detriment of implementing specific changes.

That said, if you'd prefer to opt out of this type of analytical reporting entirely, we understand. We recommend installing [uBlock Origin](https://github.com/gorhill/uBlock) in that case, which will eliminate possibilities for third-party tracking on a vast host of websites. (It should be noted, however, that some sites are nonfunctional without third-party JavaScript enabled, and others have their functionality reduced.) Vercel Analytics is _not_ free software despite implmenting the open Web Vitals standard, something which very much bothers us. We are planning to migrate to an open source performance metrics platform in the near future as part of a larger migration of this app to an alternate hosting platform.

This app is currently hosted on [Vercel](https://vercel.com/).

## bug reporting and feature requests

If you& encounter an issue with the app, please feel free to file a GitHub issue in this project[^discord]. Similarly, feel free to do the same if you& would like to see a particular feature implemented in the future.

## road to version `0.2.0`

That's right! We plan to implement an entirely new set of features for [currently fronting](https://front.plural.codes)! We'd like to give you& a sneak peak at what we've mapped out and will soon be preparing for deployment, as a special thanks for sticking with us this far into the depths of our documentation.

1. Yes! There will indeed be an interface for configuring query parameters for a system's fronters page, released as part of `0.2.0`!
2. There will also be two new query parameters implemented before `0.2.0` is released!

- `c`: Core content (name, display name, pronouns and birthday)
  - `none`: Do not display core content
  - `right`: Right-align core content
  - `center` _default_: Center-align core content
  - `left`: Left-align core content
- `d`: Description
  - `none`: Do not display descriptions
  - `right`: Right-align descriptions
  - `center`: Center-align descriptions
  - `left` _default_: Left-align descriptions
  - `justify`: Justify descriptions

3. And finally...

The aforementioned exciting news! The homepage of https://front.plural.codes will no longer redirect to [PluralKit Example System](https://front.plural.codes/exmpl). Instead, it will route to the query parameter configuration interface, of course... But that interface will also allow the configuration of a followed systems list!

When visiting the homepage after the `0.2.0` update, users will be granted the option to install the web app as a progressive web app. If it is installed, users will be granted the option to configure push notifications for front updates from followed systems, summarized at an interval of the user's choice.

Despite all these advanced capabilities, though, zero data will be processed server-side by our application. As has been the case, any server-side processing will occur solely on the PluralKit servers. This will rely on the same client-side cache as our current automatic update system. If installed as a progressive web app, the app will be able to update in the background to trigger the notifications.

If not installed as a PWA, the query parameter configuration interface will remain available, as will a new summarized view of followed systems (just without push notification capabilities).

We sincerely hope this is exciting for all of you& reading this as it is for us to develop.

## future projects and integrations

We're in the process of spinning up a public Matrix space for some of our development work. As for why that's relevant... Well, for those of you& monitoring this project, just be aware that we have some interesting ideas in mind for future projects. The description for [the GitHub organization responsible for maintaining this project](https://github.com/systemic-chaos) might give you& something to ponder. It's definitely still early days, and there's no guarantee that our plans will come to fruition. But as always, stay tuned!

## copyright and license notice

Copyright 2022 [Arcana](https://github.com/ArcanaOfSouls) and contributors

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see https://www.gnu.org/licenses/.

## endnotes

[^0.2.0]: If you& ended up here through the endnote provided in [query paramaters](#query-parameters), congratulations! We appreciate you& taking the the time to follow our project's development. We know things have been a little slow here, but life has a way of catching up with folks, and things have indeed been hectic for our system lately. That said, we have both [an exciting news item](#road-to-version-020) and a (most likely, as far as anyone knows) unsubstantiated [rumor of possible future development](#future-projects-and-integrations) to share with those of you& who somehow wound up in this far-flung section buried at the bottom of a `README`.
[^discord]: We used to provide Discord contact information as a way to request support, but that was dependent on us being members of the PluralKit support server on Discord (which we are not at this time). For our own security, we don't accept Discord friend requests from users we don't share servers with. GitHub issues are currently the best way to contact us with feature requests and/or bug reports, at least until [our Matrix space is ready for access by users at large](#future-projects-and-integrations). We appreciate your& understanding in this regard.
