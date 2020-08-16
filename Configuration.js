"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    Capabilities: {
        browserName: 'chrome'
    },
    specs: ['../Features/Test1.feature'],
    cucumberOpts: {
        require: 'Features/Step_Definitions/StepDef.js'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR1csUUFBQSxNQUFNLEdBQVc7SUFDeEIsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFFRCxLQUFLLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztJQUVwQyxZQUFZLEVBQUU7UUFDVixPQUFPLEVBQUUsc0NBQXNDO0tBQ2xEO0NBQ0osQ0FBQyJ9