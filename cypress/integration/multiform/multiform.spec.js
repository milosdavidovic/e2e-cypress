import { name, internet, lorem, address } from "faker";

const user = {
  firstName: name.firstName(),
  lastName: name.lastName(),
  email: internet.email(),
  occupation: lorem.words(3),
  city: address.city(),
  bio: lorem.sentence(),
};
const { firstName, lastName, email, occupation, city, bio } = user;

beforeEach(() => {
  cy.openNewUserForm();
});

describe("New user flow", () => {
  it("can navigate through steps", () => {
    cy.findByText(/enter user details/i);
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.findByRole("button", { name: /continue/i }).click();
    cy.findByText(/enter personal details/i);
    cy.findByRole("button", { name: /continue/i }).click();
    cy.findByText(/confirm user data/i);
    cy.findByRole("button", { name: /back/i }).click();
    cy.findByText(/enter personal details/i);
    cy.findByRole("button", { name: /back/i }).click();
    cy.findByText(/enter user details/i);
  });

  it("can create new user using multi step form", () => {
    cy.findByText(/enter user details/i);
    cy.get("#firstName").type(firstName, { delay: 20 });

    cy.get("#lastName").type(lastName, { delay: 20 });
    cy.get("#email").type(email, { delay: 20 });
    cy.findByRole("button", { name: /continue/i }).click();
    cy.findByText(/enter personal details/i);

    cy.findAllByLabelText("Occupation").type(occupation);
    cy.findAllByLabelText("City").type(city);
    cy.findAllByLabelText("Bio").type(bio).pause();
    cy.findByRole("button", { name: /continue/i }).click();
    cy.findByText(/confirm user data/i);
    Object.getOwnPropertyNames(user).forEach((a) => {
      cy.findByText(user[a]);
    });
    cy.findByRole("button", { name: /confirm/i }).click();
    cy.findByText(/success/i);
  });
});
