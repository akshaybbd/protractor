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
    //framework:'jasmine2',
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ['../feature/registration.feature', '../feature/calculator.feature'],
    cucumberOpts: {
        //tags:"@LoginFunctionality",
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
                "Tester": "BBD Internal Projects",
                "App Version": "0.3.2",
                "Test Environment": "QA",
                "Browser": "Chrome  98.0.4758.82",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            },
        };
        reporter.generate(options);
    },
    capabilities: {
        'browserName': 'chrome'
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
                        { value: '<img src="../Images/BBDIMG.png" alt="BBD LOGO" width="200" >' },
                        { label: 'Project', value: 'Protractor Typescript Framework' },
                        { label: 'Created By', value: 'BBD Internal Framework Factory' }
                    ]
                },
            },
        }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGlFQUFrRDtBQUV2QyxRQUFBLE1BQU0sR0FBVTtJQUMxQixtREFBbUQ7SUFDaEQsMENBQTBDO0lBQzFDLGFBQWEsRUFBQyxJQUFJO0lBRWxCLFNBQVMsRUFBQyxRQUFRO0lBQ2xCLHVCQUF1QjtJQUN2QixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUNsRSxLQUFLLEVBQUcsQ0FBRyxpQ0FBaUMsRUFBQywrQkFBK0IsQ0FBQztJQUMxRSxZQUFZLEVBQUM7UUFDVCw2QkFBNkI7UUFDN0IsTUFBTSxFQUFFLDRCQUE0QjtRQUNwQyxPQUFPLEVBQUM7WUFDSix1QkFBdUI7U0FDMUI7S0FDQTtJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDYixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsTUFBTSxFQUFFLHdCQUF3QjtZQUNoQyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixRQUFRLEVBQUMsdUJBQXVCO2dCQUNoQyxhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUVKLENBQUM7UUFDRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDSixZQUFZLEVBQUc7UUFDZCxhQUFhLEVBQUcsUUFBUTtLQUN2QjtJQUVLLE9BQU8sRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsbURBQW1ELENBQUM7WUFDN0UsT0FBTyxFQUFFO2dCQUNMLDJCQUEyQixFQUFFLElBQUk7Z0JBQ2pDLDRCQUE0QixFQUFFLElBQUk7Z0JBQ2xDLG1CQUFtQixFQUFFLElBQUk7Z0JBQ3pCLFNBQVMsRUFBRSx3Q0FBd0M7Z0JBQ25ELFVBQVUsRUFBRSwyQ0FBMkM7Z0JBQ3ZELFVBQVUsRUFBRTtvQkFDUixLQUFLLEVBQUUsNkJBQTZCO29CQUNwQyxJQUFJLEVBQUU7d0JBQ0YsRUFBQyxLQUFLLEVBQUMsOERBQThELEVBQUM7d0JBQ3RFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUNBQWlDLEVBQUU7d0JBQzlELEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsZ0NBQWdDLEVBQUU7cUJBRW5FO2lCQUNKO2FBQ0o7U0FDSixDQUFDO0NBQ1QsQ0FBQyJ9