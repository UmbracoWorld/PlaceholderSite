var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/UmbracoWorld/PlaceholderSite.git', 
        user: {
            name: 'Sean', 
            email: 'hello@seanthorne.co.uk' 
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)