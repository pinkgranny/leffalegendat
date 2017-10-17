import webPush from 'web-push';
import config from '../../config.server.json';

/**
 * Node.js/Connect style handler for handling push notifications.
 * Note that Connect is more limited that express, e.g. the request and
 * response objects are the raw Node.js HTTP Request & Response instances.
 */
export default async function handlePUSH(req, res, next) {
  // Only respond for POST requests
  if (req.method !== 'POST') {
    console.warn(`Method '${req.method}' not supported. '`);
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(JSON.stringify({message: `${req.method} not supported`}));
  }

  console.log(`Handling request with body ${JSON.stringify(req.body)}`);
  try {
    // TODO Validate the input
    const token = req.body.token;
    const program = req.body.program;
    const subscription = {
  		endpoint: token.endpoint,
  		keys: {
  			p256dh: token.keys.p256dh,
  			auth: token.keys.auth,
  		},
  	};

    // Send a registration, with the keys for GCM
    const options = {
      TTL: 60*60, // One hour validity
      gcmAPIKey: config.gcmAPIKey,
      vapidDetails: config.vapidDetails,
    };

    // Send a notification with sample payload to demonstrate the capabilities
    const immediateNotification = {
      title: 'Muistutus tilattu',
      body: `Vinkkaamme heti, kun ${program.title} on saatavilla Areenasta`,
      icon: '/images/touch/chrome-touch-icon-192x192.png',
    };
    await webPush.sendNotification(subscription, JSON.stringify(immediateNotification), options);

    // Simulate a real push notification by sending this sample 15 seconds from
    // subscribing.
    const delayedNotification = {
      title: `${program.title} saatavana Areenassa`,
      body: `Ohjelma on nyt katsottavissa - klikkaa ja katso: ${program.title}`,
      icon: '/images/touch/chrome-touch-icon-192x192.png',
      actions: [{
        title: 'Katso',
        action: '/programs/${program.id}',
      }],
    };
    setTimeout(() => {
      webPush.sendNotification(subscription, JSON.stringify(delayedNotification), options);
    }, 15 * 1000);

    // Send the normal HTTP response
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Subscription created'}));
    return;
  } catch (error) {
    console.error(`Caught an error: ${error.message}`);
    console.error(error.stackTrace);

    res.writeHead(500, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: `Subscription failed: ${error.message}`}));
    return;
  }
}
