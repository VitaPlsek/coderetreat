package cz.vitaplsek.coderetreat.cucumber.features.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cz.vitaplsek.coderetreat.GameOfLife;

import static org.assertj.core.api.Assertions.assertThat;

public class GameOfLifeStepDefs {

    private GameOfLife gameOfLife;

    @Given("^a new game$")
    public void aNewGame() throws Throwable {
        gameOfLife = new GameOfLife();
    }

    @Then("^should have proper type$")
    public void shouldHaveProperType() throws Throwable {
       assertThat(gameOfLife).isInstanceOf(GameOfLife.class);
    }
}
