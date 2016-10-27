import React from 'react';
import ReactDOM from 'react-dom';
import JWPlayer from './JWPlayer';
import { mount, shallow, render } from 'enzyme';

function attr(cmp, sel) {
  return cmp.find(sel)[0].attribs;
}

describe('Mounts appropriate divs', () => {
  const app = mount(<JWPlayer />);

  it('mounts without crashing', () => {
  });

  it('mounts a jwplayer div', () => {
    expect(app.find('.jwplayer').length).toBe(1);
  });

  it('mounts an iframe', () => {
    expect(app.find('iframe').length).toBe(1);
  });
})

describe('Rendering a player without any props', () => {
  const app = render(<JWPlayer />);

  it('renders a 16:9 div without any props', () => {
    expect(attr(app, '.jwplayer').style).toMatch(/padding-bottom:56\.25%/)
  });

  it('renders a worthless iframe wihout a videoId prop', () => {
    expect(attr(app, 'iframe').src).toMatch(/undefined/)
  });
})


it('renders a 4:3 div with appropriate props', () => {
  const app = render(<JWPlayer player='4' />);
  expect(attr(app, '.jwplayer').style).toMatch(/padding-bottom:33\.33%/)
});


