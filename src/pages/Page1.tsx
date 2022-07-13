import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => (
  <main>
    <Link to="/">
      <h1>ハッカーと画家</h1>
    </Link>
    <h2>どうしてオタクはモテないか</h2>
    <p>
      中学生のころ、友人のリッチとぼくは、学食のテーブルの人気度マップを作った。
    </p>
    <p>楽勝だった。</p>
    <p>
      なぜって、子供たちは、人気度が同程度の連中だけで固まってメシを食うからだ。
    </p>
  </main>
);
export default Page1;
