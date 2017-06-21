import React from 'react';

const VideoListItem = ({response,onResponseSelect}) =>{
  const imageUrl= response.snippet.thumbnails.default.url;
  return( <li onClick={()=>onResponseSelect(response)} className="list-group-item">
  <div className="video-list media">
  <div className= "media-right">
  <img className="media-object" src={imageUrl} />
  </div>
  <div className="media-body">
  <div className="media-heading">{response.snippet.title}</div>
  </div>
  </div>
    </li>
  );

};

export default VideoListItem;
