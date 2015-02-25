import org.openqa.selenium.firefox.FirefoxDriver
import org.openqa.selenium.htmlunit.HtmlUnitDriver
import org.openqa.selenium.remote.RemoteWebDriver
import java.util.logging.Level

import org.openqa.selenium.phantomjs.PhantomJSDriver
import org.openqa.selenium.remote.DesiredCapabilities
driver = {
	//Firefoxdriver config
	
	RemoteWebDriver driver = new FirefoxDriver()
	driver
	
	 
	//Phantomjsdriver config Note may have to change the version of phantom js exe depending on the native OS
	/*  
	File file =new File("src/main/phantomjs-2.0.0-windows/bin/phantomjs.exe");
	String Filestring = file.getAbsolutePath().replace("\\", "/");
	System.setProperty("phantomjs.binary.path",
				Filestring); // Here mention the path
    new PhantomJSDriver(new DesiredCapabilities())
    */
}