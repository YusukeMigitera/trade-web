import React from 'react';
import { Link } from 'react-router-dom';

const Hello = () => (
  <main>
    <h1>ハッカーと画家</h1>
    <Link to="page1">
      <h2>どうしてオタクはモテないか</h2>
    </Link>
    <Link to="page2">
      <h2>ハッカーと画家</h2>
    </Link>
    <Link to="page3">
      <h2>口にできないこと</h2>
    </Link>
    <a href="https://gist.github.com/sifue/b6506ea6b3f3d3a46a0c3bb885cd5ddf">
      <p>
        無料で読めるポール・グレアムの「ハッカーと画家」+αの日本語訳のみのまとめ
      </p>
    </a>
  </main>
);
export default Hello;
