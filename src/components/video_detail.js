import React from 'react';

const VideoDetail= ({response}) =>{
  if(!response){
    return <div>Loading...</div>
  }
  const videoId= response.id.videoId;
  const url=`https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-9">
    <div className="embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src={url}></iframe>
    </div>
    <div className="details">
    <div>{response.snippet.title}</div>
    <div>{response.snippet.description}</div>
    </div>
    </div>
  );
};

export default VideoDetail;
