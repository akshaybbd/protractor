"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    //seleniumAddress : 'http://localhost:4444/wd/hub',
    //without starting server we can run using
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ['../feature/registration.feature', '../feature/calculator.feature'],
    cucumberOpts: {
        tags: "@LoginFunctionality",
        format: 'json:./CucumberReport.json',
        require: [
            './stepDefinition/*.js',
        ]
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './CucumberReport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "Tester": "Sameer Jadhav",
                "App Version": "0.3.2",
                "Test Environment": "QA",
                "Browser": "Chrome  96.0.4664.110",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    },
    capabilities: {
        'browserName': 'chrome'
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsaUVBQWtEO0FBR3ZDLFFBQUEsTUFBTSxHQUFVO0lBRTFCLG1EQUFtRDtJQUNoRCwwQ0FBMEM7SUFDMUMsYUFBYSxFQUFDLElBQUk7SUFFbEIsU0FBUyxFQUFDLFFBQVE7SUFDbEIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDbEUsS0FBSyxFQUFHLENBQUUsaUNBQWlDLEVBQUUsK0JBQStCLENBQUM7SUFDMUUsWUFBWSxFQUFDO1FBQ1QsSUFBSSxFQUFDLHFCQUFxQjtRQUMxQixNQUFNLEVBQUUsNEJBQTRCO1FBQ3BDLE9BQU8sRUFBQztZQUNKLHVCQUF1QjtTQUMxQjtLQUVBO0lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNiLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQUUsd0JBQXdCO1lBQ2hDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNOLFFBQVEsRUFBQyxlQUFlO2dCQUN4QixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsU0FBUyxFQUFFLHVCQUF1QjtnQkFDbEMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWpDLENBQUM7SUFDSixZQUFZLEVBQUc7UUFDZCxhQUFhLEVBQUcsUUFBUTtLQUN2QjtDQUdGLENBQUMifQ==