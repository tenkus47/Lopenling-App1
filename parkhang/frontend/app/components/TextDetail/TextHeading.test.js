import React from 'react'
import { shallow } from 'enzyme'
import TextHeading from './TextHeading'

const source1 = new Source(1, "Derge");
const source2 = new Source(2, "Narthang");
const source3 = new Source(3, "Pecin");

const text = new Text(1, "དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ");

test('Tabs', () => {
    const user = new User(1, userName);
    const baseWitness = new Witness(1, text, source1, "", true);
    const otherWitness = new Witness(2, text, source2);
    const anotherWitness = new Witness(3, text, source3);
    const witnesses = [baseWitness, otherWitness, anotherWitness];

    const heading = shallow(
        <TextHeading text={text} witnesses={witnesses} />
    );
});