package cz.vitaplsek.coderetreat.cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/cz/vitaplsek/coderetreat/cucumber/features")
public class CucumberFeaturesTest {

}
