const app = require('.');

app.listen(app.get('port'), () => {
  console.log(`App is running on http:${app.get('port')}`);
});
