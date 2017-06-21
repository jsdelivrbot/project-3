import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

 const API_KEY= 'AIzaSyDsF0KUnmlUgiAThx73q_n2brC_PZ1QfIc';



 class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       response:[],
     selectedResponse: null
   };
   this.responseSearch('cricket');
    }
   responseSearch(term){
     YTSearch({key:API_KEY, term:term},(response)=> {
       this.setState({
         response: response,
       selectedResponse: response[0]});
     });

   }
   render() {
   return(
     <div>
        <Search  onSearchTermChange={term => this.responseSearch(term)}/>
        <hr/>
        <VideoDetail response= {this.state.selectedResponse}/>
        <VideoList
        onResponseSelect={selectedResponse => this.setState({selectedResponse})}
         response={this.state.response} />
      </div>
   );
 }
 }

 ReactDOM.render(<App />, document.querySelector('.container'));
