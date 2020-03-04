// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import {render} from '@testing-library/react';
import ContactForm, {firstName, lastName} from './components/ContactForm';


test("ContactForm renders without crashing", () => {
    render(<ContactForm />);
});

test("first name exists", () => {
    const {getByText} = render(<ContactForm />);

    getByText(/first name/i);
})

test("last name exists", () => {
    const {getByText} = render(<ContactForm />);

    getByText(/last name/i);
})

describe("email is there", () => {
    it("email showing", () => {
        const {getByTestId} = render(<ContactForm />);

        getByTestId(/email/i);
    })
})

describe("message is showing", () => {
    it("message has been entered", () => {
        const {queryByText} = render(<ContactForm />);

        queryByText('message');
    })
})