/// <reference type='cypress'>

describe("Visualisar lista de livros.", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Deve exibir a lista de livros corretamente", () => {
    cy.get(".card").should("have.length.above", 0);
  });

  it("Deve apresentar uma lista de 12 itens.", () => {
    cy.get(".card").should("have.length", 12);
  });

  it("Deve mostrar o título da página corretamente", () => {
    cy.get("h2").should("contain.text", "Listagem de Livros");
  });

  it("Deve filtrar os livros por título", () => {
    cy.get('input[type="text"]').type("Harry Potter");
    cy.get(".card").should("have.length", 1);
    cy.get(".card").should("contain.text", "Harry Potter");
  });

  it("Deve atualizar o estado do filtro de termo corretamente", () => {
    cy.get('input[type="text"]').type("Harry Potter");
    cy.get('input[type="text"]').should("have.value", "Harry Potter");
  });

  it("Deve filtrar os livros por gênero", () => {
    cy.get("select").select("Realismo");
    cy.get(".card").should("have.length.above", 0);
    cy.get(".card").each(($card) => {
      cy.wrap($card).should("contain.text", "Realismo");
    });
  });

  it("Deve limpar o filtro de gênero corretamente", () => {
    cy.get("select").select("Ficção Filosófica");
    cy.get(".card").should("have.length.above", 0);
    cy.get("select").select("");
    cy.get(".card").should("have.length.above", 0);
  });

  it("Deve filtrar os livros corretamente após limpar o filtro de gênero", () => {
    cy.get('input[type="text"]').type("cem anos");
    cy.get(".card").should("have.length", 1);
    cy.get(".card").should(
      "contain.text",
      "Cem Anos de SolidãoAutor: Gabriel García MárquezGenero: Realismo MágicoAno: 1967"
    );
  });

  it("Deve atualizar a lista de gêneros corretamente", () => {
    cy.get("select").should("have.length.above", 0);
    cy.get("select").select("Realismo");
    cy.get("option").should("have.length.above", 0);
  });
});
