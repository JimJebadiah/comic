var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/jimjebadiah/comic.git', // Update to point to your repository  
        user: {
            name: 'JimJebadiah', // update to use your name
            email: 'james@dbej.net' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)