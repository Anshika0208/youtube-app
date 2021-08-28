import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title : 'What is React?',
        content: 'React is frontend JS framework.'
    },
    {
        title : 'How is it used?',
        content: 'It is used by using reusable components'
    },
    {
        title : 'Any one feature of JS?',
        content: 'It uses virtual DOM for fast rendering'
    }
]

export default () => {
    return <Accordion items = {items}/>;
}