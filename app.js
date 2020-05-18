const KEYS = require('./KEYS.json');

var messagebird = require('messagebird')(KEYS.API_KEY);

const FNAME = 'John',
    LNAME = 'Doe';

messagebird.messages.create(
    {
        originator: KEYS.PHONE_NUMBER_ORIGINATOR,
        recipients: KEYS.PHONE_NUMBER_TARGETS,
        body: `Hello ${FNAME} ${LNAME}, this is a test message to see how this all works!`,
    },
    function (err, response) {
        if (err) console.log(`An Error Occured, see below: \n ${err}`);
        else
            console.log(
                `Looks like all worked as expected, see result below \n ${JSON.stringify(
                    response
                )}`
            );
    }
);
