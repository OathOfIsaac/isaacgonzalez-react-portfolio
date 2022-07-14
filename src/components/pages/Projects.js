import React from 'react';
import current from '../../assets/large/projects/0-current.png'
import sikester1 from '../../assets/large/projects/0-sikester-main.png';
import sikester2 from '../../assets/large/projects/0-sikester.png'
import fetch1 from '../../assets/large/projects/1-fetch.png'
import fetch2 from '../../assets/large/projects/1-fetch-2.png'



export default function Projects() {
  //Todo look up how to map an array in react
  return (
    <div>
      <h1>Projects Page</h1>
      <h2>Current: Linktree but cooler</h2>
      
      <p>CURRENT a website hosting and networking app, similar to linktree, that can be used to organize various links to show off to potential employers, family members , strangers or friends! This app is styled and organized for mobile, easy and functional to share your creations to anyone you wish. </p>
      <p><a href="https://desolate-crag-78193.herokuapp.com/">App Deployed Link</a> </p>
    
      <a href='https://github.com/JonCurls/current'>GitHub Link</a>
      <img src={current} alt="Current hompage, A dark website with three cards showing links to github and instgram."></img>
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
        sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
        vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
        libero. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
        lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
        in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
        bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
        est ligula suscipit velit, sed bibendum turpis dui in sapien.
      </p>
      <img src={sikester1} alt="sikester homepage"></img>
      
    </div>
  );
}
