//https://react.dev/learn/responding-to-events#challenges
//https://react.dev/learn/responding-to-events
import Link from 'next/link'
import Challenge01 from './challenge01'
//import Challenge02 from './challenge02'
import Challenge03 from './challenge03'

export default function Page() {
  return (
    <div>
      <h2>
        <a
          className=""
          href="https://react.dev/learn/responding-to-events#challenges"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try out some challenges|いくつかのチャレンジを試してみる
        </a>
      </h2>
      <h3>Challenge01</h3>
      <Challenge01 />
      <h3>Challenge02</h3>
      {/* 動かないのでコメントアウト
      <Challenge02 />
       */}
      <h3>Challenge03</h3>  {/* //https://react.dev/learn/responding-to-events#stopping-propagation */}
      <Challenge03 />
    </div>
  )
}