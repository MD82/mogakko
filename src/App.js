import youtubeData from './data/youtubeData.json';

function App() {
  console.log('youtubeData : ', youtubeData);
  console.log('youtubeData[data]', youtubeData['data']);
  console.log('youtubeData[data][0]', youtubeData['data'][0]);
  console.log('id : ', youtubeData['data'][0].id, ' -> 영상의 링크 주소');
  console.log('title : ', youtubeData['data'][0].title, ' -> 영상 제목');
  console.log('viewCount : ', youtubeData['data'][0].viewCount, ' -> 조회수');

  return <div>리액트로 데이터 불러오기</div>;
  
}

export default App;