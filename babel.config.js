module.exports = {
    presets : [
        ['@babel/preset-env', {
            targets: {
                chrome: '79',
                ie : '11'
            },
            useBuiltIns: 'usage', // entry옵션도 있는데 먼지 모름
            corejs : {
                version : 2,
            }
        }]
    ]
}