module.exports = {
    topPages: ['home', 'anotherpage'],
    pages: {
        home: {
            url: 'home.html',
            zotero: {
                'tag1': 'foo'
            }
            
        },
        anotherpage: {
            url: 'test.html',
            title: 'foo',
            zotero: {
                'tag2': 'page.title',
                'tag3': 'bar'
            }
        },
    }
}