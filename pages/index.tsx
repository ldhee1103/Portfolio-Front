import { useEffect } from 'react';
import type { NextPage } from 'next';
import Pageable from '../modules/pageable.min.js';
import Cover from '../components/info/Cover';
import Intro from '../components/info/Intro';

const Home: NextPage = () => {
  new Pageable('#container');

  return (
    <div>
      <div id="container">
        <div data-anchor="page-1" id="page-1">
          <Cover />
        </div>
        <div data-anchor="page-2" id="page-2">
          <Intro />
        </div>
        <div data-anchor="page-3" id="page-3">
          3
        </div>
        <div data-anchor="page-4" id="page-4">
          4
        </div>
      </div>
    </div>
  );
};

export default Home;
