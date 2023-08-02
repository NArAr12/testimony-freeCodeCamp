import './App.css';
import Testimony from './components/testimony';

function App() {
  return (
    <div className="App">
      <div className='container-main'>
        <h1>These are the freeCodeCamp testimonials:</h1>
        <Testimony
        images= 'emma'
        name= 'Emma Bostian'
        country= 'Sweden'
        position= 'Software Engineer'
        company= 'Spotify'
        testimonials= 'I have always had trouble learning JavaScript. I have taken many courses, but the freeCodeCamp course was the one that stuck. Studying JavaScript, as well as data structures and algorithms at freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'
        />

        <Testimony
        images= 'sarah'
        name= 'Sarah Chima'
        country= 'Nigeria'
        position= 'Software Engineer'
        company= 'ChatDesk'
        testimonials= 'freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my programming skills from a total beginner level to a very confident level. It was everything I needed to get my first developer job at an amazing company.'
        />

        <Testimony
        images= 'shawn'
        name= 'Shawn Wang'
        country= 'Singapore'
        position= 'Software Engineer'
        company= 'Amazon'
        testimonials= 'It is scary to change careers. I only gained the confidence that I could program by working through the hundreds of hours of free lessons at freeCodeCamp. Within a year I had a six-figure job as a software engineer. freeCodeCamp changed my life.'
        />

      </div> 
    </div>
  );
}

export default App;
