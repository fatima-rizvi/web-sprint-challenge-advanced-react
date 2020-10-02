import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
    //Arrange -render the form
    render(<CheckoutForm />)
    //Act - query the header
    const header = screen.getByText(/checkout form/i);
});

test("form shows success message on submit with form details", async () => {
    //Arrange - render form
    render(<CheckoutForm />)

    //Assert- query input ans submit
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const submitButton = screen.getByRole("button", {name:/checkout/i});
    //Fill out the inputs and submit
    fireEvent.change(firstNameInput, {target: {name: 'firstName', value: 'Fatima'}});
    fireEvent.change(lastNameInput, {target: {name: 'lastName', value: 'Rizvi'}});
    fireEvent.change(addressInput, {target: {name: 'address', value: '4545 Wavertree Dr'}});
    fireEvent.change(cityInput, {target: {name: 'city', value: 'Sugarland'}});
    fireEvent.change(stateInput, {target: {name: 'state', value: 'TX'}});
    fireEvent.change(zipInput, {target: {name: 'zip', value: '95477'}});
    fireEvent.click(submitButton);
    //Assert
    const renderSuccessOne = await screen.findByText(/You have ordered some plants! Woo-hoo!/i);
    const renderSuccessTwo = await screen.getByText(/Your new green friends will be shipped to:/i);
    const renderFullName = await screen.getByText(/Fatima Rizvi/i);
    const renderAddressLineOne = await screen.getByText(/4545 Wavertree Dr/i);
    const renderAdressLineTwo = await screen.getByText(/Sugarland, TX 95477/i)
});
