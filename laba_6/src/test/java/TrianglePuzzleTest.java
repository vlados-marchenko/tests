import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;

import static org.junit.Assert.assertTrue;

public class TrianglePuzzleTest {
    private WebDriver driver;

    @Before
    public void setUp() {
        System.setProperty("webdriver.edge.driver", "src/main/resources/msedgedriver.exe");
        driver = new EdgeDriver();
        driver.manage().window().maximize();
    }

    @Test
    public void testTrianglePuzzle() {
        driver.get("https://playground.learnqa.ru/puzzle/triangle");

        // Проверяем, что кнопка "Я сдаюсь" есть на странице
        WebElement giveUpButton = driver.findElement(By.xpath("//button[text()='Я сдаюсь']"));
        assertTrue(giveUpButton.isDisplayed());
        // Кликаем по кнопке "Я сдаюсь"
        giveUpButton.click();

        // Проверяем, что появились ссылка на ответы и кнопка "Спрятать ответы"
        WebElement answerLink = driver.findElement(By.linkText("Ссылка на ответы"));
        assertTrue(answerLink.isDisplayed());
        WebElement hideAnswersButton = driver.findElement(By.xpath("//button[text()='Спрятать ответы']"));
        assertTrue(hideAnswersButton.isDisplayed());
    }

    @After
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
