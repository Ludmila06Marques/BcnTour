


describe('testa paginas de login e cadastro', () => {

  it('Testalogar um usuario', () => {
    const user=  {
      email: "l@l.com",
    password:"123",
    name: "Luds",
    city:"Barcelona",
    country: "Spain",
    urlImage: " https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zooplus.pt%2Fmagazine%2Fgatos%2Fgatinhos%2Fcomo-controlar-o-peso-dos-seus-gatinhos&psig=AOvVaw0GmaNinTFrbwJza5TSqDX8&ust=1664566300765000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDHsureuvoCFQAAAAAdAAAAABAD"}

    cy.visit('http://localhost:3000/')


    cy.get("input[placeholder='Email']").type(user.email);
    cy.get("input[placeholder='Contraseña']").type(user.password);
    cy.intercept("POST", "http://localhost:5000/login").as("loginUser");
		cy.get("button").click();
    cy.wait("@loginUser");
  




   
  })
})