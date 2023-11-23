//https://react.dev/learn/extracting-state-logic-into-a-reducer#challenges
//https://react.dev/learn/extracting-state-logic-into-a-reducer
import Link from 'next/link'
import Example01 from './example01'
import Example02 from './example02'
//import Challenge01 from './challenge01'
//import Challenge02 from './challenge02'
//import Challenge03 from './challenge03'

export default function Page() {
  return (
    <div>
      <h2>
        <a
          className=""
          href="https://react.dev/learn/extracting-state-logic-into-a-reducer"
          target="_blank"
          rel="noopener noreferrer"
        >
          例
        </a>
      </h2>
      <h3>Example01</h3>
      <Example01 />
      <h3>Example02</h3>
      <Example02 />
      <h2>
        <a
          className=""
          href="https://react.dev/learn/extracting-state-logic-into-a-reducer#challenges"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try out some challenges|いくつかのチャレンジを試してみる
        </a>
      </h2>
    </div>
  )
}