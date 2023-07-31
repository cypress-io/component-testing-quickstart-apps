import Stepper from './Stepper.svelte';

describe('Stepper', () => {
  it('mounts', () => {
    cy.mount(Stepper);
  });

  it('stepper should default to 0', () => {
    cy.mount(Stepper);
    cy.get('[data-cy=counter]').should('have.text', '0');
  });

  it('supports a "count" prop to set the value', () => {
    cy.mount(Stepper, { props: { count: 100 } });
    cy.get('[data-cy=counter]').should('have.text', '100');
  });

  it('when the increment button is pressed, the counter is incremented', () => {
    cy.mount(Stepper);
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=counter]').should('have.text', '1');
  });

  it('when the decrement button is pressed, the counter is decremented', () => {
    cy.mount(Stepper);
    cy.get('[data-cy=decrement]').click();
    cy.get('[data-cy=counter]').should('have.text', '-1');
  });

  it('clicking + fires a change event with the incremented value', () => {
    const changeSpy = cy.spy().as('changeSpy');
    cy.mount(Stepper).then(({ component }) => {
      component.$on('change', changeSpy);
    });
    cy.get('[data-cy=increment]').click();
    cy.get('@changeSpy').should('have.been.calledWithMatch', {
      detail: { count: 1 },
    });
  });
});
