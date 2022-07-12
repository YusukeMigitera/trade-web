import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Hello = () => {
  const labels = ['1 月', '2 月', '3 月', '4 月', '', '6 月'];
  const graphData = {
    labels,
    datasets: [
      {
        label: 'A社',
        data: [65, 59, 60, 81, 56, 55],
        borderColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'B社',
        data: [60, 55, 57, 61, 75, 50],
        borderColor: 'rgb(75, 100, 192)',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  // fetch(
  //   'https://deep-index.moralis.io/api/v2/erc20/0x6AE7Dfc73E0dDE2aa99ac063DcF7e8A63265108c/price?chain=polygon',
  //   {
  //     headers: { 'Content-Type': 'application/json',
  //   'x-api-key':'Fyh3K4oH6tuyo5qGV5Alc36P8HDUmavZQ8SJ1J22wyzEadZVqr84bar5Li5Msfvs' },
  //   }
  // )
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  // 2022-06-11 12:00:00 Unixtime 1654916400
  // 2022-06-10 12:00:00 Unixtime 1654830000
  //  curl "https://api.polygonscan.com/api?module=block&action=getblocknobytime&timestamp=1601521200&closest=before&apikey=YourApiKeyToken"

  return (
    <main>
      <div>
        <Line
          height={300}
          width={300}
          data={graphData}
          options={options}
          id="chart-key"
        />
      </div>
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
};
export default Hello;
