'use strict';

module.exports = {
  propertySettings: {},
  rules: [
    {
      name: 'Example Rule',
      events: [
        {
          modulePath: 'questionpro/src/lib/events/delay.js',
          settings: {
            delay: 2000
          }
        }
	
	       ],
      conditions: [
        {
	    modulePath: 'questionpro/src/lib/conditions/query-parameter.js',
	    settings: {
		queryParam: 'name',
		queryParamValue: 'shri'
	    }
	}
      ],
      actions: [
        {
          modulePath: 'questionpro/src/lib/actions/inline.js',
          settings: {
		surveyID:'5445613'
          }
        }
      ]
    }
  ],
  dataElements: {
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
