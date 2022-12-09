import {Config} from "protractor";
import { json } from "stream/consumers";
import * as reporter from "cucumber-html-reporter"

export let config:Config = {
	//seleniumAddress : 'http://localhost:4444/wd/hub',
    //without starting server we can run using
    directConnect:true,

    framework:'custom',
    //framework:'jasmine2',
    frameworkPath: require.resolve("protractor-cucumber-framework"),
	specs : [  '../feature/registration.feature','../feature/calculator.feature'],
    cucumberOpts:{
        //tags:"@LoginFunctionality",
        format: 'json:./CucumberReport.json',
        require:[
            './stepDefinition/*.js',
        ]
        },
        onComplete: () =>{
            var options = {
              theme: 'bootstrap',
              jsonFile: './CucumberReport.json',
              output: './cucumber_report.html',
              reportSuiteAsScenarios: true,
              launchReport: true,
              metadata: {
                  "Tester":"BBD Internal Projects",
                  "App Version":"0.3.2",
                  "Test Environment": "QA",
                  "Browser": "Chrome  98.0.4758.82",
                  "Platform": "Windows 10",
                  "Parallel": "Scenarios",
                  "Executed": "Remote"
              },
              
          };
          reporter.generate(options);
    },
	capabilities : {
		'browserName' : 'chrome'
		},
        
        plugins: [{
            package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                openReportInBrowser: true,
                pageTitle: "Protractor Typescript Framework Report",
                pageFooter: "<div><p>ⒸBBD_Internal_Framework</p></div>",
                customData: {
                    title: 'Protractor Cucucmber Report',
                    data: [
                        {value:'<img src="../Images/BBDIMG.png" alt="BBD LOGO" width="200" >'},
                        { label: 'Project', value: 'Protractor Typescript Framework' },
                        { label: 'Created By', value: 'BBD Internal Framework Factory' }
                        
                    ]
                },  
            },
        }]     
};