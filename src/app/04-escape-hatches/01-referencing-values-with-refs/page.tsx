//https://react.dev/learn/referencing-values-with-refs#challenges
//https://react.dev/learn/referencing-values-with-refs
import Link from 'next/link'
import Example01 from './example01'
import Example02 from './example02'
//import Example03 from './example03'
//import Example04 from './example04'
//import Example05 from './example05'
//import Example06 from './example06'
//import Challenge01 from './challenge01'
//import Challenge02 from './challenge02'
//import Challenge03 from './challenge03'

export default function Page() {
  return (
    <div>
      <h2>
        <a
          className=""
          href="https://react.dev/learn/referencing-values-with-refs"
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

      {/*
      <h2>
        <a
          className=""
          href="https://react.dev/learn/referencing-values-with-refs#challenges"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try out some challenges|いくつかのチャレンジを試してみる
        </a>
      </h2>
      */}
    </div>
  )
}