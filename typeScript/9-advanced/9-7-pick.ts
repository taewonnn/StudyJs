// pick
// 기존 타입 중 내가 원하는 것만 골라서 사용할 떄

{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  }

  // Pick type 정의 - id / title만 쓸 때
  type VideoMetaData = Pick<Video , 'id' | 'title'>;

  function getVideos (id: string):Video {
    return {
      id,
      title: 'video',
      url: 'https://...',
      data: 'byte-data...',
    }
  }


  // pick Ex1
  function getVideoMetaData11 (id: string): Pick<Video, 'id'| 'title'> {
    return {
      id : id, 
      title: 'title'
    }
  }

   // pick Ex2
  function getVideoMetaData22 (id: string): VideoMetaData {
    return {
      id : id, 
      title: 'title'
    }
  }


}