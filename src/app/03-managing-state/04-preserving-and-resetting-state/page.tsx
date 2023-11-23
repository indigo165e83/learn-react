//https://react.dev/learn/preserving-and-resetting-state#challenges
//https://react.dev/learn/preserving-and-resetting-state
import Link from 'next/link'
import Example01 from './example01'
import Example02 from './example02'
import Example03 from './example03'
import Example04 from './example04'
import Example05 from './example05'
import Example06 from './example06'
import Example07 from './example07'
import Example0701 from './example0701'
import Example0702 from './example0702'
import Example08 from './example08'
//import Challenge01 from './challenge01'
//import Challenge02 from './challenge02'
//import Challenge03 from './challenge03'

export default function Page() {
  return (
    <div>
      <h2>
        <a
          className=""
          href="https://react.dev/learn/sharing-state-between-components"
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
      <h3>Example03</h3>
      <Example03 />
      <h3>Example04</h3>
      <Example04 />
      <h3>Example05</h3>
      <Example05 />
      <h3>Example06</h3>
      <Example06 />
      <h3>Example07</h3>
      <Example07 />
      <h3>Example0701</h3>
      <Example0701 />
      <h3>Example0702</h3>
      <Example0702 />
      <h3>Example08</h3>
      <Example08 />
      <h2>
        <a
          className=""
          href="https://react.dev/learn/preserving-and-resetting-state#challenges"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try out some challenges|いくつかのチャレンジを試してみる
        </a>
      </h2>
    </div>
  )
}