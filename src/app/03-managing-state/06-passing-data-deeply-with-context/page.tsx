//https://react.dev/learn/passing-data-deeply-with-context#challenges
//https://react.dev/learn/passing-data-deeply-with-context
import Link from 'next/link'
import Example0101 from './example0101'
import Example0102 from './example0102'
import Example0201 from './example0201'
import Example0202 from './example0202'
import Example03 from './example03'
//import Example02 from './example02'
//import Challenge01 from './challenge01'
//import Challenge02 from './challenge02'
//import Challenge03 from './challenge03'

export default function Page() {
  return (
    <div>
      <h2>
        <a
          className=""
          href="https://react.dev/learn/passing-data-deeply-with-context"
          target="_blank"
          rel="noopener noreferrer"
        >
          例
        </a>
      </h2>
      <h3>Example0101</h3>
      <Example0101 />
      <h3>Example0102</h3>
      <Example0102 />
      <h3>Example0201</h3>
      <Example0201 />
      <h3>Example0202</h3>
      <Example0202 />
      <h3>Example03</h3>
      <Example03 />
      <h2>
        <a
          className=""
          href="https://react.dev/learn/passing-data-deeply-with-context#challenges"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try out some challenges|いくつかのチャレンジを試してみる
        </a>
      </h2>
    </div>
  )
}