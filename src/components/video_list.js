import React from 'react';
import VideoListItem  from './video_list_item';

const VideoList= (props) => {
const videoItems=props.response.map((response)=>{
  return <VideoListItem
onResponseSelect={props.onResponseSelect}
  key={response.etag} response={response} />
});

  return(
    <ul className="col-md-6 list-group">
  {videoItems}
    </ul>
  );
};

export default VideoList;
