## react-jwplayer [![Build Status](https://travis-ci.org/noahfeder/react-jwplayer.svg?branch=master)](https://travis-ci.org/noahfeder/react-jwplayer)

A simple React component for JWPlayer embedded players

### Installation

`npm i -S react-jwplayer`

### Usage

First, make sure to import the component.

`import JWPlayer from 'react-jwplayer';`

react-jwplayer creates a `<div>` wrapping an `<iframe>` and does NOT currently provide access to JWPlayer's JavaScript API.

It has one mandatory prop, `videoId`, which is the MediaID (or KEY in the KEY-PLAYER pair) found in your JWPlayer Dashboard. 

Simplest Example:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import JWPlayer from 'react-jwplayer';

ReactDOM.render(
  <JWPlayer videoId="<your-id-here>" />,
  document.body
);
```

The default player is in 16:9 aspect ratio and uses the Glow design.

Other players can be selected with the 'player' prop, which takes a string. 

There are four valid options:

```
* '16' (default): A 16:9 player in the Glow theme.
* '4': A 4:3
 player in the Glow theme.
* '16loop': An autostarting, looping, chromeless 16:9 player, suitable for background video.
* '4loop': An autostarting, looping, chromeless 4:3 player, suitable for background video.
```

```javascript
//This will output a 4:3 ratio player instead.
<JWPlayer videoId="<your-id-here>" player="4" />
```
