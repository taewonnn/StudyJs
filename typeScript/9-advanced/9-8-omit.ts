// omit
// pick과 반대 - 원하는 것을 빼버림

{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  }

  type VideoMetaData = Omit<Video , 'url' | 'data'>;

  function getVideo (id: string):Video {
    return {
      id,
      title: 'video',
      url: 'https://...',
      data: 'byte-data...',
    }
  }

  // omit Ex1
  function getVideoMetaData (id: string): Omit<Video, 'url' | 'data'>  {
    return {
      id : id, 
      title: 'title'
    }
  }

  // omit Ex2
  function getVideoMetaData2 (id: string): VideoMetaData {
    return {
      id : id, 
      title: 'title'
    }
  }


}