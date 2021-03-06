'use strict';

module.exports = {
  propertySettings: {},
  rules: [
    {
        name: 'Inline Survey Rule',
        events: [
            {
                modulePath: 'questionpro/src/lib/events/delay.js',
                settings: {
                    delay:3000
                }
            }
        ],
        conditions: [
            {
                modulePath: 'questionpro/src/lib/conditions/query-parameter.js',
                settings: {
                    queryParam: 'name',
                    queryParamValue: 'shrikant'
                }
            }

        ],
        actions: [
            {
                modulePath: 'questionpro/src/lib/actions/inline.js',
                settings: {
                    surveyID:'5445613',
                    custom1El:'ProductCategory',
                    custom2El:'ProductName',
                    custom3El:'OrderID'
                }
            }
        ]
    },
      {
          name: 'Popup Survey Rule',
          events: [
              {
                  modulePath: 'questionpro/src/lib/events/delay.js',
                  settings: {
                      delay: 2000, clicked:'CheckoutButton'
                  }
              }

          ],
          conditions: [
              {
                  modulePath: 'questionpro/src/lib/conditions/query-parameter.js',
                  settings: {
                      queryParam: 'name',
                      queryParamValue: 'popup'
                  }
              }
          ],
          actions: [
              {
                  modulePath: 'questionpro/src/lib/actions/popup.js',
                  settings: {
                      surveyID:'5445613'
                  }
              }
          ]
      }],
    dataElements: {
         myDataElement: {
           modulePath: 'questionpro/src/lib/dataElements/javascriptVariable.js',
           settings: {
               variable1:'variable1'
           }
         }
    },
    buildInfo: {
        turbineVersion: "14.0.0",
        turbineBuildDate: "2016-07-01T18:10:34Z",
        buildDate: "2016-03-30T16:27:10Z",
        environment: "development"
    },
    extensions: {
        'questionpro': {
            displayName: 'QuestionPro Survey',
            settings: {}
        }
    }
};
