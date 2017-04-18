import React from 'react'
import { shallow } from 'enzyme'
import Header, { LoginControls, LoggedInControls } from './Header'



test('Anonymous Header', () => {
    global.USER_LOGGED_IN = false;

    const header = shallow(
        <Header />
    );

    expect(
        header.contains(<LoginControls/>)
    ).toEqual(true);
});

test('Logged-in user Header', () => {
    global.USER_LOGGED_IN = true;
    global.USER_NAME = 'Test User';

    const header = shallow(
        <Header />
    );

    expect(
        header.contains(<LoggedInControls/>)
    ).toEqual(true);

    const controls = shallow(
        <LoggedInControls/>
    );

    expect(
        controls.contains(<a href="/accounts/logout/">Logout</a>)
    ).toEqual(true);

    expect(
        controls.contains('Test User')
    ).toEqual(true);
});