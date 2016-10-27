## react-jwplayer [![Build Status](https://travis-ci.org/noahfeder/react-jwplayer.svg?branch=master)](https://travis-ci.org/noahfeder/react-jwplayer)

A simple React component for JWPlayer embedded players

### Installation

`npm install jwplayer -save`

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
  <JWPlayer videoId="yCP38IuY" />,
  document.body
);
```

The default player is in 16:9 aspect ratio and uses the Glow design.

To make a 4:3 player instead, just set a prop:

```javascript
//NOTE: player takes the STRING '4'.
//This will output a 4:3 ratio player instead.
<JWPlayer videoId="yCP38IuY" player="4" />
```
