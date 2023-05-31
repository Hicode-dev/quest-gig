import React from 'react';
import QuestGig from '../component/QuestGig';
import Searchh from '../component/Searchh';
import Navbar from '../component/Navbar';
import Card from '../component/Card';
import DisplayButton from '../component/DisplayButton';

const Home = () => {

  return (
    <div>
      <Navbar />
<QuestGig />
<Searchh  />
<DisplayButton />
          <Card />
    </div>
  );
}

export default Home;
