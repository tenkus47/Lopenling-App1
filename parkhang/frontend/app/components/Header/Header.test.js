import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Header, LoginControls, LoggedInControls } from './Header'
import User, { getAnonymousUser } from 'lib/User'

configure({ adapter: new Adapter() });

test('Anonymous Header', () => {
    const anonymous = getAnonymousUser();

    const header = shallow(
        <Header user={anonymous} />
    );

    expect(
        header.contains(<LoginControls/>)
    ).toEqual(true);
});

const userName = 'Test User';

test('Logged-in user Header', () => {
    const user = new User(1, userName);

    const header = shallow(
        <Header user={user} />
    );

    expect(
        header.contains(<LoggedInControls user={user} />)
    ).toEqual(true);

    const controls = shallow(
        <LoggedInControls user={user} />
    );

    expect(
        controls.contains(<a href="/accounts/logout/">Logout</a>)
    ).toEqual(true);

    expect(
        controls.contains(userName)
    ).toEqual(true);
});