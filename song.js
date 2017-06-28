$(function(){
    $.get('/lyric.json').then(function(object){
        let {lyric} = object
        let array = lyric.split('\n')
        let regex = /^\[(.+)\](.*)$/  // 声明一个正则
        array = array.map(function(string,index){
            let matches = string.match(regex)
            if(matches){
                return {time: matches[1], words: matches[2]}
            }
        })
        let $lyric = $('.lyric')
        array.map(function(object){
            if(!object){return}
            let $p = $('<p/>')
            $p.attr('data-time', object.time).text(object.words)
            $p.appendTo($lyric.children('.lines'))
        })
    })

    let audio = document.createElement('audio')
    audio.src = 'http://dl.stream.qqmusic.qq.com/C400003TgAeV2YzOCj.m4a?vkey=604D98611E2734372ABD52F376CBB9CDB588A8EAEB721D13F1F9F51FE07694FAF2456438BBD2189A2E0AA788B78551E33CC4A96311A4FFC6&guid=5946636130&uin=345004536&fromtag=66'
    audio.oncanplay = function(){
        audio.play()
    }
    $('.disc-container').addClass('playing')

})